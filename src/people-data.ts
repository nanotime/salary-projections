import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { getData } from './utils';
import { ChartData } from 'chart.js';
import sum from 'hash-sum';

@customElement('people-data')
export class PeopleData extends LitElement {
  @state()
  _peopleData = getData().persons_data;

  protected render(): unknown {
    return html`
      <section class="people-data-cards">${this._buildCards()}</section>
    `;
  }

  private _getTableFormat(person: string) {
    const data = this._peopleData.get(person);

    return {
      heads: [],
      body: data?.map(item => ({
        headingTd: undefined,
        elements: [item.company, item.year, item.salary],
      })),
    };
  }

  private _buildLineChart(target: string): unknown {
    const data = this._peopleData.get(target);
    const labels = JSON.stringify(data?.map(item => item.year));
    const chartItems = data?.map(item => item.salary);
    const datasets: ChartData<'line'> = {
      datasets: [
        {
          label: 'Salarys',
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

    return html`
      <app-line-chart
        chartId=${target.split(' ').join('-').toLowerCase()}
        data=${JSON.stringify(datasets.datasets)}
        labels=${labels}
        options=${chartOptions}
      ></app-line-chart>
    `;
  }

  private _buildCards() {
    const cards = [];
    for (let name of this._peopleData.keys()) {
      cards.push(name);
    }

    return repeat(
      cards,
      name => sum(name),
      name => html`
        <app-card title=${name}>
          <app-table data=${JSON.stringify(this._getTableFormat(name))}>
          </app-table>
          ${this._buildLineChart(name)}
        </app-card>
      `
    );
  }

  static styles = css`
    .people-data-cards {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 4px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'people-data': PeopleData;
  }
}
