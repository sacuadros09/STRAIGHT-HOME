import { addObserver, appState, dispatch } from "../../store";
import { navigate } from "../../store/action";
import { Screens } from "../../types/store";
import Firebase from "../../utils/firebase"
import styles from "./listregister.css"

const credentials = { email: "", password: "" ,usuario: ""};


class Listregister extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }


    connectedCallback() {
        this.render()
    }
    async Regfirebase(){
      Firebase.Authregister(credentials);
  }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML="";

        const countainer = this.ownerDocument.createElement("section")
        countainer.className ="all"
        
        const User = this.ownerDocument.createElement("h3")
          User.className = "palabra"
           User.innerText = "Usuario"

        const usuario = this.ownerDocument.createElement("input")
            usuario.className = "registra"
            usuario.placeholder = "Nombre del usuario"
            usuario.type= "usuario"
            usuario.addEventListener(
                "change",
                (s: any) => (credentials.email = s.target.value)
              );

            const Email = this.ownerDocument.createElement("h3")
            Email.className = "palabra"
          Email.innerText = "Email"

        const correo = this.ownerDocument.createElement("input")
        correo.className = "registra"
        correo.placeholder = "Correo electronico"
        correo.type= "email"
        correo.addEventListener(
            "change",
            (s: any) => (credentials.email = s.target.value)
          );

            const Contraseña = this.ownerDocument.createElement("h3")
             Contraseña.className = "palabra"  
          Contraseña.innerText = "Contraseña"

          const espacio = this.ownerDocument.createElement("h2")
             espacio.className = ""  
          espacio.innerText = ""


        const reg = this.ownerDocument.createElement("input")
            reg.className = "registra"
            reg.placeholder = "Registrarse"
            reg.type= "password"
            this.shadowRoot?.appendChild(reg)
            reg.addEventListener(
                "change",
                (s: any) => (credentials.password = s.target.value)
              );



        const button= this.ownerDocument.createElement("button");
        button.className = "btn"
        button.innerText = "Regístrate"
        button.addEventListener("click",this.Regfirebase)
        button.addEventListener("click",()=>{
            dispatch(navigate(Screens.LOGIN))
        })
       
       
        this.shadowRoot?.appendChild(User)
        this.shadowRoot?.appendChild(usuario)
        this.shadowRoot?.appendChild(Email)
        this.shadowRoot?.appendChild(correo)
        this.shadowRoot?.appendChild(Contraseña)
        this.shadowRoot?.appendChild(reg)
        this.shadowRoot?.appendChild(button)

        this.shadowRoot?.appendChild (countainer)

        
        const css = this.ownerDocument.createElement("style")
        css.innerHTML=styles
        this.shadowRoot?.appendChild(css)
        }
   
    }


customElements.define('app-listregister', Listregister)
export default Listregister;

