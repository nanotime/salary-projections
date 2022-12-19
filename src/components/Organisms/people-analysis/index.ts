import { LitElement, html, CSSResultGroup, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import {
  getData,
  tops,
  Top,
  generalChartOptions,
  Stringify,
  chartColors
} from '../../../utils';
import { ChartData } from 'chart.js';

const buildDataset = (data: Top[], dataMapTarget: string): ChartData<'bar'> => {
  const items = data.map(item => item[dataMapTarget]).sort((a, b) => b - a);
  const datasets: ChartData<'bar'> = {
    datasets: [
      {
        label: 'Name',
        data: items,
      },
    ],
  };

  return datasets;
};

@customElement('app-people-analysis')
export class PeopleAnalysis extends LitElement {
  @state()
  _topsData = tops(getData().persons_data);

  protected render(): unknown {
    const baseOptions = generalChartOptions;
    const top10PercentData = {
      data: this._buildTop10percent(),
      options: {
        ...baseOptions,
        backgroundColor: [chartColors.teal, chartColors['light-teal']],
      },
    };
    const top10SalaryData = {
      data: this._buildTop10Salarys(),
      options: {
        ...baseOptions,
        backgroundColor: [chartColors['soft-black']],
      },
    };
    const top10ProjectionsData = {
      data: this._buildTop10Projections(),
      options: {
        ...baseOptions,
        backgroundColor: [chartColors['soft-black']],
      }
    };

    return html`<section class="people-data-analysis">
      <app-card title="Top 10% of earnings" justify="center">
        <app-chart
          chartType="bar"
          chartId="top10percent"
          labels=${Stringify(top10PercentData.data.labels)}
          data=${Stringify(top10PercentData.data.datasets.datasets)}
          options=${Stringify(top10PercentData.options)}
        ></app-chart>
      </app-card>
      <app-card title="Top 10 median salarys" justify="center">
        <app-chart
          chartType="bar"
          chartId="top10Salarys"
          labels=${Stringify(top10SalaryData.data.labels)}
          data=${Stringify(top10SalaryData.data.datasets.datasets)}
          options=${Stringify(top10SalaryData.options)}
        ></app-chart>
      </app-card>
      <app-card title="Top 10 projections" justify="center">
        <app-chart
          chartType="bar"
          chartId="top10Projections"
          labels=${Stringify(top10ProjectionsData.data.labels)}
          data=${Stringify(top10ProjectionsData.data.datasets.datasets)}
          options=${Stringify(top10ProjectionsData.options)}
        ></app-chart>
      </app-card>
    </section>`;
  }

  private _buildTop10percent() {
    const data = this._topsData.top10percent;
    const labels = data.map(item => item.name);
    return {
      labels,
      datasets: buildDataset(data, 'salary'),
    };
  }

  private _buildTop10Salarys() {
    const data = this._topsData.top10Salarys;
    const labels = data.map(item => item.name);
    return {
      labels,
      datasets: buildDataset(data, 'salary'),
    };
  }

  private _buildTop10Projections() {
    const data = this._topsData.top10Projections;
    const labels = data.map(item => item.name);
    return {
      labels,
      datasets: buildDataset(data, 'projection'),
    };
  }

  static styles?: CSSResultGroup | undefined = css`
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
    'app-people-analysis': PeopleAnalysis;
  }
}
