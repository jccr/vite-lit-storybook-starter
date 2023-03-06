import { html, css, LitElement } from 'lit';
import { property, customElement } from 'lit/decorators.js';

/**
 * An example component.
 *
 * @slot - This component has a slot
 * @cssprop --my-component-text-color - The color of the text
 */
@customElement('my-component')
export class MyComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--my-component-text-color, #000);
    }
  `;

  @property({ type: String }) heading = 'Hey there';

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`
      <h2>${this.heading} Nr. ${this.counter}!</h2>
      <button @click=${this.__increment}>increment</button>
      <slot></slot>
    `;
  }
}
