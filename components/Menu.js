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
          width:300px;
          display:flex;
          flex-flow:column;
          align-items:center;
          border:solid 1px pink;
        }
      </style>
      <div class="collapse-list">
      ${collapseItems.map((e, i) => {
			return e;
		})}
      </div>
    `;
	}
	get items() {
		let items = [];
		[ ...this.attributes ].forEach((attr) => {
			console.log(attr);
		});
		console.log('items');
		return [ ...this.attributes ];
	}
}

customElements.define('menu-container', Menu);
