import {
  createArgsExtractor,
  createLitRenderer,
} from 'cem-plugin-better-lit-types/storybook';
import { setCustomElementsManifest } from '@storybook/web-components';

const customElements = await (await fetch('/custom-elements.json')).json();

setCustomElementsManifest(customElements);

export const parameters = {
  docs: {
    extractArgTypes: createArgsExtractor(customElements),
  },
  backgrounds: {
    default: 'light',
  },
};

/**
 * Custom renderer made specially for LitComponents
 */
export const render = createLitRenderer({
  wrapSlots: true, // Wraps a non-default slot in `<span slot="name">`
  joinArrays: true, // Converts array to a comma-separated string
});
