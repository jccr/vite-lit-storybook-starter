import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
// eslint-disable-next-line import/no-duplicates
import { MyComponent } from '../src/my-component.js';
// eslint-disable-next-line import/no-duplicates
import '../src/my-component.js';

describe('MyComponent', () => {
  it('has a default heading "Hey there" and counter 5', async () => {
    const el = await fixture<MyComponent>(html`<my-component></my-component>`);

    expect(el.heading).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<MyComponent>(html`<my-component></my-component>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the heading via attribute', async () => {
    const el = await fixture<MyComponent>(
      html`<my-component heading="attribute text"></my-component>`
    );

    expect(el.heading).to.equal('attribute text');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<MyComponent>(html`<my-component></my-component>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
