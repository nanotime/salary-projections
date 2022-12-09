import { LitElement, html, CSSResultGroup, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { getData, tops } from '../../../utils';
import { ChartData } from 'chart.js';
import sum from 'hash-sum';
import { repeat } from 'lit/directives/repeat.js';

@customElement('app-people-analysis')
export class PeopleAnalysis extends LitElement {
  @state()
  _cards: Array<{ title: string; key: string; dataMapTarget: string }> = [
    { title: 'Top 10% of earnings', key: 'top10percent', dataMapTarget: 'salary' },
    { title: 'Top 10 median salarys', key: 'top10Salarys', dataMapTarget: 'salary' },
    { title: 'Top 10 projections', key: 'top10Projections', dataMapTarget: 'projection' },
  ];

  @state()
  _topsData = tops(getData().persons_data);

  protected render(): unknown {
    const repeater = repeat(
      this._cards,
      card => sum(card),
      card =>
        html`
          <app-card title=${card.title}>
            ${this._buildbarChart(card.key, card.dataMapTarget)}
          </app-card>
        `
    );
    return html`<section class="people-data-analysis">${repeater}</section> `;
  }

  private _buildbarChart(target: string, dataMapTarget: string): unknown {
    const data = this._topsData[target] || [];
    const labels = JSON.stringify(data.map(item => item.name));
    const chartItems = data.map(item => item[dataMapTarget]).sort((a,b) => b - a);
    const datasets: ChartData<'bar'> = {
      datasets: [
        {
          label: 'Persons',
          data: chartItems || [],
        },
      ],
    };
    const chartOptions = JSON.stringify({
      scales: {
        x: { grid: { display: false } },
        y: { grid: { display: false } },
      },
    });

    if (!target) return html`<div>No target</div>`;

    return html`
      <app-chart
        chartType="bar"
        chartId=${target}
        data=${JSON.stringify(datasets.datasets)}
        labels=${labels}
        options=${chartOptions}
      ></app-chart>
    `;
  }

  static styles?: CSSResultGroup | undefined = css`
    .people-data-analysis {
      margin-top: 12px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4px;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'app-people-analysis': PeopleAnalysis;
  }
}