import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { repeat } from 'lit/directives/repeat.js';
import { map } from 'lit/directives/map.js';
import sum from 'hash-sum';

type dataProps = {
  heads: string[],
  body: Array<{ headingTd: string, elements: string[] }>
}

@customElement('app-table')
export class AppTable extends LitElement {
  @property({ type: String })
  id: string = ''

  @property({ type: Object, attribute: 'data' })
  data: dataProps | undefined = undefined;

  private _buildHead() {
    const part = this.data?.heads || [];
    const repeater = repeat(
      part,
      (head: string) => sum(head),
      (head: string) => html`<th>${head}</th>`
    );

    return html`
      <thead>
        <tr>
          ${repeater}
        </tr>
      </thead>
    `;
  }

  private _buildBody() {
    const part = this.data?.body || [];
    const itemMapper = (itm: string) => html`<td>${itm}</td>`
    const repeater = repeat(
      part,
      item => sum(item),
      item => html`
        <tr>
          ${item.headingTd ? html`<td>${item.headingTd}</td>` : ''}
          ${map(item.elements, itemMapper)}
        </tr>
      `
    );
    return html`
      <tbody>
        ${repeater}
      </tbody>
    `
  }

  render() {
    if (!this.data) return html`<div>Loading ....</div>`;
    return html`
      <table id=${this.id || sum(this.data)}>
        ${this._buildHead()}
        ${this._buildBody()}
      </table>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'app-table': AppTable;
  }
}
