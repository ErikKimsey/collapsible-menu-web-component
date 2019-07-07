class Menu extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: 'open' });
		const container = document.createElement('div');
		container.classList.add('container');

		// append 'collapse-items' to shadow
		const collapseItems = this.items;
		console.log(collapseItems);

		container.innerHTML = `
    <style>
      .container {
        position:absolute;
        width:500px;
        height:500px;
        display:flex;
        flex-flow:column;
        justify-content: center;
        align-items:space-around;
        border:solid 1px pink;
      }
    
    </style>
    <div class="collapse-list">
    </div>
    `;
		shadow.appendChild(container);
	}

	get items() {
		let items = [];

		return items;
	}
}

customElements.define('menu-container', Menu);
