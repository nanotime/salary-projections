import { LitElement, html, css, CSSResultGroup } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('data-analysis')
export class DataAnalysis extends LitElement {
  render() {
    return html`
      <div class="app-data-analysis">
        <app-people-analysis></app-people-analysis>
      </div>
    `
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
