class Collapse extends HTMLElement {
	constructor() {
		super();
		const shadow = this.attachShadow({ mode: 'open' });
		const collapse = document.createElement('div');
		collapse.classList.add('collapse-item');

		const collapseItems = this.items;
		console.log(collapseItems);

		collapseItems.innerHTML = `
      <style>
      
        background-color:black;
        border: solid 3px yellow;  
      
      </style>
      <h1>${item.title}</h1>
      ${item.subItems.map((sub) => {
			return `<div>${sub}</div>`;
		})}
    
    `;
		shadow.appendChild(collapse);
	}
}

customElements.define('collapse-item', Collapse);
