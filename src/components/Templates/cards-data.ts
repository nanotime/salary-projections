import { LitElement, html, css } from 'lit';
import { customElement, state } from 'lit/decorators.js';

@customElement('data-cards')
export class DataCards extends LitElement {
  @state()
  _selectedTab = 'people';

  protected render(): unknown {
    const tabs = [
      { title: 'People', id: 'people' },
      { title: 'Companies', id: 'companies' },
    ];

    const peopleCards = html`<people-cards class="cards"></people-cards>`;
    const companiesCards = html`<company-card class="cards"></company-card>`

    return html`
      <section class="container">
        <app-tabs
          selected=${this._selectedTab}
          tabs=${JSON.stringify(tabs)}
          @tabclick=${this._setSelectedTab}
        ></app-tabs>

        ${this._selectedTab === 'people' ? peopleCards : null}
        ${this._selectedTab === 'companies' ? companiesCards : null}
      </section>
    `;
  }

  private _setSelectedTab(e: CustomEvent) {
    this._selectedTab = e.detail.id;
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
      scrollbar-width: thin;
      scroll-snap-type: x proximity;
    }

    .cards::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      background-color: #aaa;
    }

    .cards::-webkit-scrollbar-thumb {
      background-color: #000;
      width: 8px;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'data-cards': DataCards;
  }
}
