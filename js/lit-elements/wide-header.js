// Import Lit
import {html, css, LitElement} from 'lit';

// Element Construction
export class WideHeader extends LitElement {
  static styles = css`p { color: blue }`;

  static properties = {
    text: {type: String},
  };

  constructor() {
    super();
    this.text = 'Somebody';
  }

  render() {
    return html`<p>Hello, ${this.text}!</p>`;
  }
}

// Registration
customElements.define('wide-header', WideHeader);