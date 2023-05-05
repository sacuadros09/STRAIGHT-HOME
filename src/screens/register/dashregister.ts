import { att } from "../../components/register/register";
import styles from "./dashregister.css"
import {reginput} from "../register/dashregister.css"

export class dashregister extends HTMLElement {
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

        const rightregister = this.ownerDocument.createElement("section")
        rightregister.className= "right"

        const create = this.ownerDocument.createElement("h2")
        create.innerText = "Crear una cuenta"
         rightregister.appendChild(create)

         const have  = this.ownerDocument.createElement("h1")
         have.innerText = "¿Ya tienes una cuenta? Inicia sesión"
         rightregister.appendChild(have)

         
         const usuario = this.ownerDocument.createElement("h1")
         usuario.innerText = "Usuario"
          rightregister.appendChild(usuario)
        
            const register = this.ownerDocument.createElement("my-reginput");
            register.setAttribute(att.placeholder,"Usuario");
            register.setAttribute(att.type,"Usuario" );
            rightregister.appendChild(register)

            const correo = this.ownerDocument.createElement("h1")
            correo.innerText = "Email"
             rightregister.appendChild(correo)

            const email = this.ownerDocument.createElement("my-reginput");
            email.setAttribute(att.placeholder,"Email");
            email.setAttribute(att.type,"Email" );
            rightregister.appendChild(email)

            const pass = this.ownerDocument.createElement("h1")
            pass.innerText = "Contraseña"
             rightregister.appendChild(pass)

            const password = this.ownerDocument.createElement("my-reginput");
            password.setAttribute(att.placeholder,"Contraseña");
            password.setAttribute(att.type,"Contraseña" );
            rightregister.appendChild(password)

            const espacio = this.ownerDocument.createElement("h1")
            espacio.innerText = ""
             rightregister.appendChild(espacio)

            const button = this.ownerDocument.createElement("my-butregister");
            button.innerText= "Contraseña"
            rightregister.appendChild(button)











            countainer.appendChild(rightregister)
        
            this.shadowRoot?.appendChild (countainer)

            const css = this.ownerDocument.createElement("style")
            css.innerHTML=styles
            this.shadowRoot?.appendChild(css)
}

}
}

customElements.define("app-dashregister", dashregister);