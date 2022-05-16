import { 
  html, 
  css, 
  LitElement 
} from 'lit';
import { customElement } from 'lit/decorators.js';
// @ts-ignore
import { keyboard } from './keyboard/index';


/**
 * Litelement input
 * @type string:  text | number | search | password
 * @disabled boolean: true | false
 * @placeholder string: text
 * @extraPart string: custom webcomponent selector
 * @value string : text
 * @theme string: text
 * @haskeyboard string: "true" | "false"
 */
@customElement('retail-input')
export class RetailInput extends LitElement {
  static properties = {
    type: { type: String },
    placeholder: { type: String },
    value: { type: String },
    disabled: { type: Boolean },
    outline: { type: Boolean },
    extraPart: { type: String },
    haskeyboard: { type: String },
    theme: { type: String },
  };

  staticNode: any;
  value;
  disabled;
  type;
  placeholder;
  extraPart;
  theme;
  haskeyboard;

  constructor() {
    super();
    this.value = '';
    this.type = 'text';
    this.placeholder = '';
    this.disabled = false;
    this.extraPart = '';
    this.theme = 'fixed';
    this.haskeyboard = 'true';
  }

  render() {
    return html`
      <input
        id="input"
        part="retail-input ${this.extraPart}"
        haskeyboard=${this.haskeyboard}
        .theme=${this.theme}
        .type=${this.type}
        .placeholder=${this.placeholder}
        .value=${this.value}
        ?disabled=${this.disabled}
        @input=${this.handleInput}
        keyboard:theme=${this.theme}
        @keyboard:change="${(e: any) => this.value = e.detail}"
      />
    `
  }

  updated() {
    if(this.haskeyboard === 'true') {
      this.staticNode = this.renderRoot.querySelector('#input');
      keyboard(this.staticNode, this.value);
    }
  } 

  handleInput(e: any) {
    this.dispatchEvent(
      new CustomEvent('value', {
        detail: { value: e?.composedPath()[0].value }
      })
    );
    
  };

  static styles = css`
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      list-style: none;
      text-decoration: none;
      outline: none;
      box-sizing: border-box;
      user-select: var(--retail-text-select, auto);
      font-family: var(--retail-font-family), sans-serif;
    }

    input {
      width: 100%;
      padding: 5px 10px;
      background: none;
      border: 2px solid var(--retail-border-color, #fff);
      color: var(--retail-input-text-color, #000);
      font-size: 14px;
      @media (min-width: 1024px) {
        padding: 15px 15px;
        font-size: 18px;
        width: 150px;
      }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }

    input[type="number"] {
      -moz-appearance: textfield;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    'retail-input': RetailInput
  }
}
