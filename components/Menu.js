const menuTemplate = document.createElement('template');
menuTemplate.innerHTML = `
<style>
:host {
  position:absolute;
  left:100px;
  top:100px;
  margin: 0 auto;
  width:400px;
  height:400px;
  display:flex;
  flex-flow:column;
  justify-content: center;
  align-items:space-around;
  border:solid 5px pink;
  }
  .yoyo {
    width:100px;
    height:100px;
    color:pink;
  }
</style>
<div class="yoyo">YOYOYO</div>
`;

class Menu extends HTMLElement {
	constructor() {
		super();
		this._shadowRoot = this.attachShadow({ mode: 'open' });
		this._shadowRoot.appendChild(menuTemplate.content.cloneNode(true));
	}
}

customElements.define('menu-container', Menu);
