import { beforeEach, describe, expect, it, vi } from 'vitest';

import './index';

const buildData = (
  heads: string[] = [],
  body: Array<{ headingTd: string; elements: string[] }>
) => ({ heads, body });

const dataSet1 = JSON.stringify(
  buildData(
    ['a', 'b', 'c'],
    [{ headingTd: 'Test', elements: ['lorem', 'ipsum', 'dolor'] }]
  )
);

function getElement(query?: string) {
  return document.body
    .querySelector('app-table')
    ?.shadowRoot?.querySelector(query || '');
}

describe('Table component', () => {
  beforeEach(() => {
    document.body.innerHTML = `<app-table id="table-test-data" title="${dataSet1}"></app-table>`;
  });

  it('Should render a table element', () => {
    const element = getElement('table#table-test-data');
    expect(element?.textContent).toBe('Example');
  });
});
