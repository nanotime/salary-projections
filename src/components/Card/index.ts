import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * Creates a simple html card to contain elements
 *
 * @slot - filters
 * @slot - content
 */
@customElement('app-card')
export class Card extends LitElement {
  @property({ type: String })
  title = 'Card Title';

  @property({ type: Boolean })
  open = false;

  render() {
    return html`
      <article class="app-card">
        <header class="app-card__header">
          <slot name="filters"></slot>
          <h2>${this.title}</h2>
        </header>

        <div class="app-card__content">
          <div class="slot">
            <slot></slot>
          </div>
        </div>

        <div class="chevron-container">
          <button @click=${this._setOpen}>
            <span  class="chevron ${this.open ? '' : 'down'}"></span>
          </button>
        </div>
      </article>
    `;
  }

  private _setOpen() {
    this.open = !this.open;
    this.renderRoot
      .querySelector('.app-card__content')
      ?.classList.toggle('invisible');
    const evt = new CustomEvent('toggleChevron', { detail: this.open });
    this.dispatchEvent(evt);
  }

  static styles = css`
    :host {
      border: 1px solid black;
      min-height: 400px;
      max-height: 500px;
      display: flex;
      padding: 8px;
      scroll-snap-align: start;
    }

    .invisible {
      display: none;
    }

    .chevron {
      border-style: solid;
      border-width: 0.25em 0.25em 0 0;
      content: '';
      display: inline-block;
      height: 0.45em;
      left: 0.15em;
      position: relative;
      top: 0.15em;
      transform: rotate(-45deg);
      vertical-align: top;
      width: 0.45em;
      cursor: pointer;
    }

    .chevron.down {
      top: 0;
      transform: rotate(135deg);
    }

    .chevron-container {
      display: flex;
      justify-content: center;
    }

    .chevron-container button {
      padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: transparent;
      border: none;
      position: absolute;
      left: 0;
      right: 0;
      bottom: 10px;
      margin: 0 auto;
    }

    .app-card {
      width: 100%;
      position: relative;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'app-card': Card;
  }
}
