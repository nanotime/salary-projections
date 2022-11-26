import { beforeEach, describe, expect, it, vi } from 'vitest';

import './index';

// Tiene todas las celdas?
// Se renderiza?
// Tiene los headers?
// Renderiza la estructura buscada?

const buildData = (
  heads: string[] = [],
  body: Array<{ headingTd: string; elements: string[] }>
) => {
  return {
    heads,
    body,
  };
};

const dataSet1 = JSON.stringify(
  buildData(['a', 'b', 'c'], [{ headingTd: 'Test', elements: ['lorem', 'ipsum', 'dolor'] }])
);

function getElement(query?: string) {
  return document.body
    .querySelector('app-table')
    ?.shadowRoot?.querySelector(query || '');
}

describe('Table component', () => {
  beforeEach(() => {
    document.body.innerHTML = `<app-table id="table-test-data" title="${dataSet1}"></app-table>`
  });

  it('Should render a table element', () => {
    const element = getElement('table#table-test-data');
    expect(element?.textContent).toBe('Example');
  });

  // it('Should have a chevron', () => {
  //   const element = getElement('.chevron');
  //   expect(element).toBeTruthy();
  // });

  // it('Should dispatch toggle event', () => {
  //   const spy = vi.fn();
  //   document.querySelector('app-card')?.addEventListener('toggleChevron', spy);
  //   document.body
  //     .querySelector('app-card')
  //     ?.shadowRoot?.querySelector('button')
  //     ?.click();

  //   expect(spy).toHaveBeenCalled();
  // });
});
