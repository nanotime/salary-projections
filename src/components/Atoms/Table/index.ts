import { LitElement, html, CSSResultGroup, css } from 'lit';
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

  render() {
    if (!this.data) return html`<div>Loading ....</div>`;

    return html`
      <table id=${this.id || sum(this.data)}>
        ${this._buildHead()}
        ${this._buildBody()}
      </table>
    `
  }

  static styles?: CSSResultGroup | undefined = css`
    table {
      width: 100%;
      border-collapse: collapse;
    }

    tr {
      border-top: 1px dashed;
      border-bottom: 1px dashed;
    }

    tr:nth-child(1) {
      border-top: none;
    }
    
    tr:nth-child(1) th {
      text-align: left;
    }
  `;

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
          ${item.headingTd ? html`<td><strong>${item.headingTd}</strong></td>` : ''}
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
}

declare global {
  interface HTMLElementTagNameMap {
    'app-table': AppTable;
  }
}
