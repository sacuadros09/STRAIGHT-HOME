import { attr } from "../../components/login/login";
import styles from "./dashlogin.css"
import {loginput} from "../login/dashlogin.css"
import { dispatch } from "../../store/index";
import { navigate } from "../../store/action";
import { Screens } from "../../types/store";

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

            const loges= this.ownerDocument.createElement("app-listlogin");

            const countainer = this.ownerDocument.createElement("section")
        countainer.className ="all"

        const leftphoto = this.ownerDocument.createElement("section")
        leftphoto.className ="left"

        const rightlogin = this.ownerDocument.createElement("section")
        rightlogin.className= "right"

        const body = this.ownerDocument.createElement("div")
        body.className = "body"
        this.shadowRoot?.appendChild(body)

        const img = this.ownerDocument.createElement("img")
        img.className = "imgs"
            img.src="/src/image/straight.png"
            rightlogin.appendChild(img)

            const img2 = this.ownerDocument.createElement("img")
            img2.className = "imgs"
                img2.src="/src/image/negro.png"
               leftphoto.appendChild(img2)
    
        const create = this.ownerDocument.createElement("h2")
        create.innerText = "Iniciar sesión"
         rightlogin.appendChild(create)


         const account = this.ownerDocument.createElement("h1")
         account.className = "have"
         account.innerText = "¿No tienes una cuenta? Regístrate"    
          rightlogin.appendChild(account)



           
           








            countainer.appendChild(leftphoto)
            countainer.appendChild(rightlogin)
            countainer.appendChild(body)
       
        
            this.shadowRoot?.appendChild (countainer)
            this.shadowRoot?.appendChild(loges);

            const css = this.ownerDocument.createElement("style")
            css.innerHTML=styles
            this.shadowRoot?.appendChild(css)
}

}
}

customElements.define("app-dashlogin", dashlogin);