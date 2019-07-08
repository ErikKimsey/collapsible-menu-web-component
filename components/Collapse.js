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
    width:100px;
    height:33px;
    background-color:pink;
    }

    .content {
      display:flex;
      flex-flow:column;
      color:white;
      padding: 0 18px;
      height:0;
      overflow: hidden;
      background-color: #f1f1f1;
      transition: all 0.2s ease-out;
    }
    a {
      color:white;
    }
    .active, .collapsible:hover {
      background-color: #555;
      height:auto;
    }

    ul {
      list-style: none;
      padding: 0;
    }
    
</style>
<div class="tab">Tab</div>
<div class="content">
    <a>DKFJSKDJF</a>
    <a>DKFJSKDJF</a>
    <a>DKFJSKDJF</a>
</div>

`;

class Collapsible extends HTMLElement {
	constructor() {
		super();
		this._shadowRoot = this.attachShadow({ mode: 'open' });
		this._shadowRoot.appendChild(template.content.cloneNode(true));
		console.log(this._shadowRoot);

		this.$subItemList = this._shadowRoot.querySelector('.content');
		console.log(this.$subItemList);

		this.$tab = this._shadowRoot.querySelector('.tab');
		this.$tab.addEventListener('click', this._toggleCollapse.bind(this));
	}

	_toggleCollapse() {
		console.log(this.$subItemList.classList);
		// if(this.$subItemList.classList)
		this.$subItemList.classList.toggle('active');
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

/**
 * <div class="content">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <div><a href="https://erikkimsey.com">CLICKEROO</a></div>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
 */
