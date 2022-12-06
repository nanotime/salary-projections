import { LitElement, html, css, CSSResultGroup } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { getData, tops } from './utils';
import { ChartData } from 'chart.js';
import sum from 'hash-sum';

@customElement('people-analysis')
export class PeopleAnalysis extends LitElement {
  @state()
  _cards: Array<{ title: string; key: string }> = [
    { title: 'Top 10% of earnings', key: 'top10percent' },
    { title: 'Top 10 projections', key: 'top10Projections' },
    { title: 'Most works', key: '' },
  ];

  @state()
  _topsData = tops(getData().persons_data);

  private _buildbarChart(target: string): unknown {
    const data = this._topsData[target] || [];
    const labels = JSON.stringify(data.map(item => item.name));
    const chartItems = data.map(item => item.salary).sort((a,b) => b - a);
    const datasets: ChartData<'line'> = {
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

    console.log(labels);
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

  render() {
    const repeater = repeat(
      this._cards,
      card => sum(card),
      card =>
        html`
          <app-card title=${card.title}
            >${this._buildbarChart(card.key)}</app-card
          >
        `
    );
    return html` <section class="people-data-analysis">${repeater}</section> `;
  }

  static styles?: CSSResultGroup | undefined = css`
    :host {
      width: 100%;
    }
    .people-data-analysis {
      margin-top: 12px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'people-analysis': PeopleAnalysis;
  }
}
