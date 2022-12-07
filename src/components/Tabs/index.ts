import { LitElement, html, CSSResultGroup, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { classMap } from 'lit/directives/class-map.js';
import sum from 'hash-sum';

interface Tabs {
  title: string;
  id: string;
}

@customElement('app-tabs')
export class AppTabs extends LitElement {
  @property({ type: Object })
  tabs: Tabs[] | [] = [];

  @property()
  selected = '';

  protected render(): unknown {
    const elements = repeat(
      this.tabs,
      tab => sum(tab),
      tab => {
        const classes = classMap({ tab: true, active: tab.id === this.selected })
        return html`
          <button class=${classes} id=${tab.id} @click=${this._dispatchTabClick}>
            ${tab.title}
          </button>
        `;
      }
    );

    return html`<div class="tabs">${elements}</div>`;
  }

  private _dispatchTabClick(ev: any) {
    const id = ev.target.id;
    if (id) {
      const opts = {
        detail: { id },
        bubbles: true,
        composed: true,
      };

      this.dispatchEvent(new CustomEvent('tabclick', opts));
    }
  }

  static styles?: CSSResultGroup | undefined = css`
    .tabs {
      display: flex;
      gap: 4px;
      justify-items: start;
      margin-bottom: 4px;
      width: 100%;
    }

    .tab {
      background-color: #fff;
      border: 1px solid #000;
      cursor: pointer;
      padding: 12px;
    }

    .tab:active, .tab:hover {
      background-color: #ddd;
    }

    .active {
      background-color: #000;
      color: #fff;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'app-tabs': AppTabs;
  }
}
