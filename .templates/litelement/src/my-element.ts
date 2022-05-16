import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { setupI18n, _ } from '../translations/i18n.js';

/**
 * Litelement Webcomponent
 *
 * @csspart button - The button
 */
@customElement('{{ dashCase name }}')
export class {{ properCase name }} extends LitElement {
  static properties() {
    src: { type: String }
  }

  constructor() {
    super();
    this.src = '';
  }


  render() {
    return html`
      <div 
        part="{{ properCase name }}" 
        class="{{ properCase name }}"
      >
        Webcomponent Litelement
        ${this.src}
      </div>
    `
  }

  static styles = css`
    *,
    *::before,
    *::after {
      margin: 0;
      padding: 0;
      list-style: none;
      outline: none;
      text-decoration: none;
      box-sizing: border-box;
      font-family: "Helvetica Neue", "Helvetica", sans-serif;
    }
    .webcomponent {
      background:#000;
      color: #fff;
    }
  `
}

declare global {
  interface HTMLElementTagNameMap {
    '{{ dashCase name }}': {{ properCase name }}
  }
}
