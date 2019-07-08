class Menu extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: 'open' });
		this.container = document.createElement('div');
		this.container.setAttribute('class', 'container');
	}

	set menu(val) {
		this.shadow.innerHTML = `
      <style>
      .container {
        margin: 0 auto;
        width:${val.width}px;
        
            height:${val.height}px;
            display:flex;
            flex-flow:column;
            justify-content: center;
            align-items:space-around;
            border:solid 1px pink;
          }
      </style>
      <h1>
      ${val.say}
      </h1>
      `;
		this.shadow.appendChild(this.container);
	}
}

customElements.define('menu-container', Menu);
