import { att } from "../../components/register/register";
import styles from "./dashregister.css"
import {reginput} from "../register/dashregister.css"
import { dispatch } from "../../store/index";
import { navigate } from "../../store/action";
import { Screens } from "../../types/store";

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

        const back = this.ownerDocument.createElement("section")
        back.className ="fondo"


        const leftphoto = this.ownerDocument.createElement("section")
        leftphoto.className ="left"

        const rightregister = this.ownerDocument.createElement("section")
        rightregister.className= "right"

        const body = this.ownerDocument.createElement("div")
        body.className = "body"
        this.shadowRoot?.appendChild(body)


        const feliz = this.ownerDocument.createElement("img")
        feliz.src="/src/image/fondo feliz.png"
        leftphoto.appendChild(feliz)


        const img = this.ownerDocument.createElement("img")
        img.className = "imgs"
            img.src="/src/image/straight.png"
            rightregister.appendChild(img)




        const create = this.ownerDocument.createElement("h2")
        create.innerText = "Crear una cuenta"
         rightregister.appendChild(create)

         const have  = this.ownerDocument.createElement("h1")
         have.className = "have"
         have.innerText = "¿Ya tienes una cuenta? Inicia sesión"
         rightregister.appendChild(have)

         
         const usuario = this.ownerDocument.createElement("h1")
         usuario.innerText = "Usuario"
          rightregister.appendChild(usuario)
        
            const register = this.ownerDocument.createElement("my-reginput");
            register.className = "userinput"
            register.setAttribute(att.placeholder,"Usuario");
            register.setAttribute(att.type,"Usuario" );
            rightregister.appendChild(register)

            const correo = this.ownerDocument.createElement("h1")
            correo.innerText = "Email"
             rightregister.appendChild(correo)

            const email = this.ownerDocument.createElement("my-reginput");
            email.className = "emailinput"
            email.setAttribute(att.placeholder,"Email");
            email.setAttribute(att.type,"Email" );
            rightregister.appendChild(email)

            const pass = this.ownerDocument.createElement("h1")
            pass.innerText = "Contraseña"
             rightregister.appendChild(pass)

            const password = this.ownerDocument.createElement("my-reginput");
            password.className = "passinput"
            password.setAttribute(att.placeholder,"Contraseña");
            password.setAttribute(att.type,"Contraseña" );
            rightregister.appendChild(password)

            const espacio = this.ownerDocument.createElement("h1")
            espacio.innerText = ""
             rightregister.appendChild(espacio)

            const button = this.ownerDocument.createElement("my-butregister");
            button.className = "butinput"
            button.innerText= "Contraseña"
            button.addEventListener("click",()=>{
                dispatch(navigate(Screens.LOGIN))
            })
            rightregister.appendChild(button)


        

           










            countainer.appendChild(leftphoto)
            countainer.appendChild(rightregister)
            countainer.appendChild(back)
            countainer.appendChild(body)
        
            this.shadowRoot?.appendChild (countainer)

            const css = this.ownerDocument.createElement("style")
            css.innerHTML=styles
            this.shadowRoot?.appendChild(css)
}

}
}

customElements.define("app-dashregister", dashregister);