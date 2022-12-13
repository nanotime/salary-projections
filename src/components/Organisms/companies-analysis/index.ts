import { LitElement, html, css, CSSResultGroup } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import {
  getData,
  calcPromedy,
  projectionByCompany,
  calcMedian,
  calcPercentualProjection,
  CompanyData,
  Stringify,
  generalChartOptions,
} from '../../../utils';

@customElement('app-companies-analysis')
export class CompaniesAnalysis extends LitElement {
  @state()
  _companies = getData().company_data;

  protected render(): unknown {
    const promedySalary = this._salaryPromedyByYear();
    const growByYear = this._percentGrowByYear();
    const projections = this._companiesProjection();
    const options = Stringify(generalChartOptions);

    console.log(growByYear);

    return html`<section class="companies-data-analysis">
      <app-card title="Promedy of salarys by year" justify="center">
        <app-chart
          chartId="salary-promedy-year"
          labels=${Stringify(promedySalary.labels)}
          data=${Stringify(promedySalary.datasets)}
          options=${options}
        ></app-chart>
      </app-card>  

      <app-card title="Percentual grow of salarys by year" justify="center">
        <app-chart
          chartId="percent-grow-year"
          chartType="bar"
          labels=${Stringify(growByYear.labels)}
          data=${Stringify(growByYear.datasets)}
        ></app-chart>
      </app-card>  

      <app-card title="Companies projections" justify="center">
        <app-chart
          chartId="companies-projections"
          chartType="bar"
          labels=${Stringify(projections.labels)}
          data=${Stringify(projections.datasets)}
          options=${options}
        ></app-chart>
      </app-card>  
    </section>`;
  }

  static styles?: CSSResultGroup | undefined = css`
    .companies-data-analysis {
      margin-top: var(--size-lg);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: var(--size-sm);
    }
  `

  private _salaryPromedyByYear() {
    const labels = ['2018', '2019', '2020', '2021', '2022', '2023'];
    const values = Array.from(this._companies.entries());

    return {
      labels,
      datasets: values.map(company => {
        const promedys = Object.values(company[1]).map(datum =>
          calcPromedy(datum.salarys)
        );
        return {
          label: company[0],
          data: promedys,
        };
      }),
    };
  }

  private _percentGrowByYear() {
    const labels = ['2018', '2019', '2020', '2021', '2022', '2023'];
    const values = Array.from(this._companies.entries());

    return {
      labels,
      datasets: values.map(company => {
        const medians = Object.values(company[1]).map(datum =>
          calcMedian(datum.salarys)
        );
        return {
          label: company[0],
          data: calcPercentualProjection({ medians }).map(total => total * 100),
        };
      }),
    };
  }

  private _companiesProjection() {
 
    const labels = Array.from(this._companies.keys());
    const datum = labels.map(company => {
      return projectionByCompany(this._companies.get(company) as CompanyData);
    });

    return {
      labels,
      datasets: [
        {
          label: 'Projection',
          data: datum,
        }
      ],
    };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-companies-analysis': CompaniesAnalysis;
  }
}
