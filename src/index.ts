import "./components/export"
import "./screens/dashboard"
import"./screens/login/dashlogin"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('app-dashlogin');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)