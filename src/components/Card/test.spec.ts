import { beforeEach, describe, expect, it, vi } from 'vitest';

import './index';

function getElement(query: string) {
  return document.body
    .querySelector('app-card')
    ?.shadowRoot?.querySelector(query);
}

describe('Card component', () => {
  beforeEach(() => {
    document.body.innerHTML = '<app-card title="Example"></app-card>';
  });

  it('Should have a header', () => {
    const element = getElement('.app-card__header h2');
    expect(element?.textContent).toBe('Example');
  });

  it('Should have a chevron', () => {
    const element = getElement('.chevron');
    expect(element).toBeTruthy();
  });

  it('Should dispatch toggle event', () => {
    const spy = vi.fn();
    document.querySelector('app-card')?.addEventListener('toggleChevron', spy);
    document.body
      .querySelector('app-card')
      ?.shadowRoot?.querySelector('button')
      ?.click();

      expect(spy).toHaveBeenCalled();
  });
});
