import { LitElement, html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import sum from 'hash-sum';
import { ChartData } from 'chart.js';
import { customElement, state } from 'lit/decorators.js';
import {
  getData,
  CompanyData,
  lineChartOptions,
  generalChartOptions,
  Stringify,
} from '../../../utils';

@customElement('company-card')
export class CompanyCards extends LitElement {
  @state()
  _companies = getData().company_data;

  protected render(): unknown {
    return repeat(
      this._companies,
      company => sum(company),
      company => html`
        <app-card title=${company[0]}>
          <app-table
            data=${Stringify(this._setTableFormat(company[0]))}
          ></app-table>
          ${this._buildChart(company[0])}
        </app-card>
      `
    );
  }

  private _setTableFormat(company: string) {
    const raw = this._companies.get(company) as CompanyData;
    const data = Object.keys(raw || {}).map(year => ({
      headingTd: year,
      elements: raw[Number(year)].salarys,
    }));

    return {
      heads: ['Year'],
      body: data,
    };
  }

  private _buildChart(target: string) {
    const data = this._companies.get(target) as CompanyData;
    const labels = Stringify(Object.keys(data));
    const chartItems = Object.values(data).map(cData =>
      cData.salarys.reduce((prev, curr) => prev + curr, 0)
    );
    const datasets: ChartData<'line'> = {
      datasets: [
        {
          label: 'Salary',
          data: chartItems,
          ...lineChartOptions,
        },
      ],
    };
    const chartOptions = Stringify({
      ...generalChartOptions,
    });

    return html`
      <app-chart
        chartType="line"
        chartId=${target.split(' ').join('-').toLowerCase()}
        data=${Stringify(datasets.datasets)}
        labels=${labels}
        options=${chartOptions}
      ></app-chart>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'company-card': CompanyCards;
  }
}
