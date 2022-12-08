import { LitElement, html } from 'lit';
import { repeat } from 'lit/directives/repeat.js';
import sum from 'hash-sum';
import { ChartData } from 'chart.js';
import { customElement, state } from 'lit/decorators.js';
import { getData, CompanyData } from '../../../utils';

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
            data=${JSON.stringify(this._setTableFormat(company[0]))}
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
      heads: [],
      body: data,
    };
  }

  private _buildChart(target: string) {
    const data = this._companies.get(target) as CompanyData;
    const labels = JSON.stringify(Object.keys(data));
    const chartItems = Object
      .values(data)
      .map(cData => cData.salarys.reduce((prev, curr) => prev + curr, 0))
    const datasets: ChartData<'line'> = {
      datasets: [
        {
          label: 'Salarys',
          data: chartItems,
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
        chartType="line"
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
    'company-card': CompanyCards;
  }
}
