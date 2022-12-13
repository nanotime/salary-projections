import { LitElement, css, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

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

  @property({ type: String })
  justify: 'between' | 'end' | 'center' = 'between';

  render() {
    const justifyClass = classMap({
      'justify-between': this.justify === 'between',
      'justify-end': this.justify === 'end',
      'justify-center': this.justify === 'center',
    });

    return html`
      <article class="app-card">
        <header class="app-card__header">
          <h2>${this.title}</h2>
        </header>

        <div class="app-card__content">
          <div class="slot ${justifyClass}">
            <slot></slot>
          </div>
        </div>
      </article>
    `;
  }

  static styles = css`
    :host {
      border: 1px solid black;
      border-radius: var(--size-sm);
      display: block;
      height: 450px;
      max-height: 450px;
      min-height: 400px;
      padding: 0 var(--size-md);
      /* scroll-snap-align: start; */
      margin-bottom: 2px;
    }

    .app-card {
      display: flex;
      flex-direction: column;
      height: 100%;
      height: 100%;
      justify-content: space-between;
      min-width: 320px;
      width: 100%;
    }

    h2 {
      margin: 0;
    }

    .app-card__content {
      height: 90%;
    }

    .slot {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
    }

    .justify-between {
      justify-content: space-between;
    }

    .justify-end {
      justify-content: end;
    }

    .justify-center {
      justify-content: center;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'app-card': Card;
  }
}
