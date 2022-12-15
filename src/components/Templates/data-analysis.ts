import { LitElement, html, css, CSSResultGroup } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('data-analysis')
export class DataAnalysis extends LitElement {
  @state()
  _selectedTab = 'people-analysis';

  protected render() {
    const tabs = [
      { title: 'People', id: 'people-analysis' },
      { title: 'Companies', id: 'companies-analysis' },
    ];

    const peopleAnalysis = html`<app-people-analysis></app-people-analysis>`;
    const companyAnalysis = html`<app-companies-analysis></app-companies-analysis>`;

    return html`
      <section class="app-data-analysis">
        <app-tabs
          selected=${this._selectedTab}
          tabs=${JSON.stringify(tabs)}
          @tabclick=${this._setSelectedTab}
        ></app-tabs>
        ${this._selectedTab === 'people-analysis' ? peopleAnalysis : null}
        ${this._selectedTab === 'companies-analysis' ? companyAnalysis : null}
      </section>
    `;
  }

  private _setSelectedTab(e: CustomEvent) {
    this._selectedTab = e.detail.id;
  }

  static styles?: CSSResultGroup | undefined = css`
    .app-data-analysis {
      width: 100%;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'data-analysis': DataAnalysis;
  }
}
