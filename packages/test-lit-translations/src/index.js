import { css, html, LitElement} from 'lit-element';
import { i18nMixin, translate } from 'lit-element-i18n';

export default class TestLitTranslations extends i18nMixin(LitElement) {
  static get properties() {
    return {
      authHeaders: { type: Object },
      src: {
        type: String,
        reflect: true,
        attribute: 'src'
      },
      lang: { 
        type: String,
        reflect: true,
        attribute: 'lang'
      }
    };
  }

  constructor() {
    super();
    this.src = '';
    this.lang = 'fr';
    this.languageResources = `/translations/${this.lang}/{{ns}}.json`;
    
  }

  render() {
    return html`
      <div class="webcomponent">
        <!-- Simple LitElement component! -->
        ${translate('app:foo')}
        <!-- ${this.src} -->
      </div>
    `;
  }

  static get styles() {
    return css`
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
    `;
  }
}

!customElements.get('test-lit-translations') && customElements.define('test-lit-translations', TestLitTranslations);
