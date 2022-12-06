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
      <section class="container">
        <div class="tabs">
          <button class="tab persons-tab">Persons</button>
          <button class="tab companies-tab">Companies</button>
        </div>

        <div class="cards">
          ${this._buildCards()}
        </div>
      </section>
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
      <app-chart
        chartId=${target.split(' ').join('-').toLowerCase()}
        data=${JSON.stringify(datasets.datasets)}
        labels=${labels}
        options=${chartOptions}
      ></app-chart>
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
    .container {
      width: 100%;
      height: 500px;
    }
    
    .cards {
      display: flex;
      gap: 12px;
      width: 100%;
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
    }

    .tabs {
      width: 100%;
      display: flex;
      justify-items: start;
      gap: 4px;
      margin-bottom: 4px;
    }

    .tab {
      border: 1px solid #000;
      background-color: #fff;
      padding: 12px;
      cursor: pointer;
    }

    .tab:active, .tab:hover {
      background-color: #ddd;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'people-data': PeopleData;
  }
}
