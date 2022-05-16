import '@componentchest/time-formated';

export default class LiveTimer extends HTMLElement {
  constructor() {
    super();
    // element created
  }

  render() {
    this.innerHTML = `
      <time-formated 
        id="elem" 
        year="numeric" 
        hour="numeric" 
        minute="numeric" 
        second="numeric"
      />
    `;

    this.timerElement = this.firstElementChild;
  }

  connectedCallback() {
    // browser calls this method when the element is added to the document
    // (can be called many times if an element is repeatedly added/removed)
    if(!this.redered) {
      this.render();
      this.rendered = true;
    }

    this.timer = setInterval(() => this.update(), 1000);
    console.log(this.timerElement);
  }

  update() {
    this.date = new Date();
    this.timerElement.setAttribute('datetime', this.date);
    this.dispatchEvent(new CustomEvent('tick', { detail: this.date }));
  }

  disconnectedCallback() {
    // browser calls this method when the element is removed from the document
    // (can be called many times if an element is repeatedly added/removed)
    clearInterval(this.timer);
  }

}

!customElements.get('live-timer') && customElements.define('live-timer', LiveTimer);
