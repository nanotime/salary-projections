import { LitElement, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import { ChartData } from 'chart.js';
import { repeat } from 'lit/directives/repeat.js';
import sum from 'hash-sum';
import { getData, lineChartOptions, generalChartOptions } from '../../../utils';

@customElement('people-cards')
export class PeopleCards extends LitElement {
  @state()
  _people = getData().persons_data;

  protected render(): unknown {
    const cards = [];
    for (let name of this._people.keys()) {
      cards.push(name);
    }

    return repeat(
      cards,
      name => sum(name),
      name => html`
        <app-card title=${name}>
          <app-table
            data=${JSON.stringify(this._setTableFormat(name))}
          ></app-table>
          ${this._buildLineChart(name)}
        </app-card>
      `
    );
  }

  private _setTableFormat(person: string) {
    const data = this._people.get(person);

    return {
      heads: ['Job', 'Year', 'Salary'],
      body: data?.map(item => ({
        headingTd: undefined,
        elements: [item.company, item.year, item.salary],
      })),
    };
  }

  private _buildLineChart(target: string): unknown {
    const data = this._people.get(target);
    const labels = JSON.stringify(data?.map(item => item.year));
    const chartItems = data?.map(item => item.salary);
    const datasets: ChartData<'line'> = {
      datasets: [
        {
          label: 'Salary',
          data: chartItems || [],
          ...lineChartOptions,
        },
      ],
    };
    const chartOptions = JSON.stringify({
      ...generalChartOptions,
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
}

declare global {
  interface HTMLElementTagNameMap {
    'people-cards': PeopleCards;
  }
}
