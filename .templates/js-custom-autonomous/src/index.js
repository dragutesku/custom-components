export default class {{ properCase name }} extends HTMLElement {
  constructor() {
    super();
    // element created
  }

  render() {
    this.innerHTML = `
      <div>Simple autonomous component</div>
    `;
  };

  connectedCallback() {
    // browser calls this method when the element is added to the document
    // (can be called many times if an element is repeatedly added/removed)
    if(!this.redered) {
      this.render();
      this.rendered = true;
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

!customElements.get('{{ dashCase name }}') && customElements.define('{{ dashCase name }}', {{ properCase name }});
