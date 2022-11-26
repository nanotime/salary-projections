import { LitElement, html, css, CSSResultGroup } from 'lit';
import { customElement, state } from 'lit/decorators.js'
import { repeat } from 'lit/directives/repeat.js';
import sum from 'hash-sum';

@customElement('people-analysis')
export class PeopleAnalysis extends LitElement {
  @state()
  _cards: string[] = ['Top 10 salarys per year', 'Top 10 projections', 'Most works'];

  render() {
    const repeater = repeat(
      this._cards,
      card => sum(card),
      card => html`
        <app-card title=${card}></app-card>
      `
    )
    return html`
      <section class="people-data-analysis">
        ${repeater}
      </section>
    `
  }

  static styles?: CSSResultGroup | undefined = css`
    :host {
      width: 100%;
    }
    .people-data-analysis {
      margin-top: 12px;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4px;
    }
  `
};

declare global {
  interface HTMLElementTagNameMap {
    'people-analysis': PeopleAnalysis;
  }
}
