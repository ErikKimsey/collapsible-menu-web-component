const template = document.createElement('template');
template.innerHTML = `
<style>
    :host {
      width:200px;
      height:200px;
    display: block;
    background-color: #000;
    color: white;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    border: none;
    text-align: left;
    outline: none;
    font-size: 15px;
    }

    .tab {
    border: none;
    cursor: pointer;
    }

    .active, .collapsible:hover {
      background-color: #555;
    }

    ul {
      list-style: none;
      padding: 0;
    }
    
    .content {
      padding: 0 18px;
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.2s ease-out;
      background-color: #f1f1f1;
    }
</style>
<div class="tab">Tab</div>

<div class="items">YOYOYO</div>
`;

class Collapsible extends HTMLElement {
	constructor() {
		super();
		this._shadowRoot = this.attachShadow({ mode: 'open' });
		this._shadowRoot.appendChild(template.content.cloneNode(true));
		console.log(this._shadowRoot);

		this.$subItemList = this._shadowRoot.querySelector('items');
		this.$tab = this._shadowRoot.querySelector('tab');
	}

	connectedCallback() {
		console.log('connected!');
	}

	disconnectedCallback() {
		console.log('disconnected!');
	}

	attributeChangedCallback(name, oldVal, newVal) {
		console.log(`Attribute: ${name} changed!`);
	}

	adoptedCallback() {
		console.log('adopted!');
	}
}

window.customElements.define('collapsible-list', Collapsible);
