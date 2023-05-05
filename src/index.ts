import "./components/export"
import "./screens/dashboard"
import"./screens/login/dashlogin"
import "./screens/register/dashregister"
import { addObserver, appState } from "./store/index";
import { Screens } from "./types/store";


class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot)this.shadowRoot.innerHTML="";
        switch (appState.screen) {
            
            case Screens.SIGNUP:
                const something = this.ownerDocument.createElement('app-dashregister');
                this.shadowRoot?.appendChild(something);
                break;

                case Screens.LOGIN:
                const log = this.ownerDocument.createElement('app-dashlogin');
                this.shadowRoot?.appendChild(log);
                break;

                case Screens.DASHBOARD:
                const dash = this.ownerDocument.createElement('app-dashboard');
                this.shadowRoot?.appendChild(dash);
                break;
            
            default:
                break;
        }
    }
}

customElements.define('app-container', AppContainer)