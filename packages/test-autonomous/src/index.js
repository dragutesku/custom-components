export default class TestAutonomous extends HTMLElement {
  constructor() {
    super();    
    this.message = 'Simple autonomous component';
  }

  style(DOM) {
    let style = document.createElement('style');
    style.textContent = `
      .webcomponent {
        background: #000;
        color: red;
      }
    `;
    DOM.appendChild(style)
  }

  render(DOM) {
    DOM.innerHTML = `
      <div class="webcomponent">
        ${this.message}
      </div>
    `;
  };

  connectedCallback() {
    // browser calls this method when the element is added to the document
    // (can be called many times if an element is repeatedly added/removed)
    // Attach shadow DOM
    const shadow = this.attachShadow({mode: 'open'});
    if(!this.redered) {
      // Render
      this.render(shadow);
      this.rendered = true;
      // Attach styles
      this.style(shadow);
    }
  }

  disconnectedCallback() {
    // browser calls this method when the element is removed from the document
    // (can be called many times if an element is repeatedly added/removed)
  }

  static get observedAttributes() {
    return [/* array of attribute names to monitor for changes */]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // called when one of attibutes listed above is modified
  }

  adoptedCallback() {
    // called when the element is moved to a new document
    // (happens in document.adoptNode, very rarely used)
  }
}

!customElements.get('test-autonomous') && customElements.define('test-autonomous', TestAutonomous);
