import "./components/export"
import "./screens/dashboard"
import"./screens/login/dashlogin"
import "./screens/register/dashregister"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('app-dashregister');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)