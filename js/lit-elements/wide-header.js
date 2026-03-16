// Imports
import {LitElement, html} from 'lit';

// HTML Elements
export class WideHeader extends LitElement {
  static styles = css`p { color: blue }`;

  static properties = {
    text: {type: String},
  };

  constructor() {
    super();
    this.text = 'Header Text';
  }

  render() {
    return html`<p>Hello, ${this.text}!</p>`;
  }
}