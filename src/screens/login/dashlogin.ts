import { attr } from "../../components/login/login";
import styles from "./dashlogin.css"
import {loginput} from "../login/dashlogin.css"

export class dashlogin extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });   
}

connectedCallback(){
    this.render()
    }
    render(){
        if(this.shadowRoot){

            const countainer = this.ownerDocument.createElement("section")
        countainer.className ="all"

        const leftphoto = this.ownerDocument.createElement("section")
        leftphoto.className ="left"

        const rightlogin = this.ownerDocument.createElement("section")
        rightlogin.className= "right"

        
            const login = this.ownerDocument.createElement("my-loginput");
            login.setAttribute(attr.placeholder,"email");
            login.setAttribute(attr.type,"email" );
            rightlogin.appendChild(login)

            const password = this.ownerDocument.createElement("my-loginput");
            password.setAttribute(attr.placeholder,"password");
            password.setAttribute(attr.type,"password" );
            rightlogin.appendChild(password)

            const button = this.ownerDocument.createElement("my-butlogin");
            button.innerText= "Iniciar sesión"
            rightlogin.appendChild(button)











            countainer.appendChild(rightlogin)
        
            this.shadowRoot?.appendChild (countainer)

            const css = this.ownerDocument.createElement("style")
            css.innerHTML=styles
            this.shadowRoot?.appendChild(css)
}

}
}

customElements.define("app-dashlogin", dashlogin);