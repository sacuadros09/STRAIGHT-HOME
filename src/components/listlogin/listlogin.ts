import { addObserver, appState, dispatch } from "../../store";
import { navigate } from "../../store/action";
import { Screens } from "../../types/store";
import Firebase from "../../utils/firebase"
import styles from "./listlogin.css"

const credentials = { email: "", password: ""};


class Listlogin extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this);
    }


    connectedCallback() {
        this.render()
    }
    async Regfirebase(){
      Firebase.Authlogin(credentials);
  }

    render() {
        if (this.shadowRoot) this.shadowRoot.innerHTML="";
            const Email = this.ownerDocument.createElement("h3")
             Email.className = "palabra"
          Email.innerText = "Email"

        const correo = this.ownerDocument.createElement("input")
        correo.className = "logear"
        correo.placeholder = "Correo electronico"
        correo.type= "email"
        correo.addEventListener(
            "change",
            (s: any) => (credentials.email = s.target.value)
          );

            const Contraseña = this.ownerDocument.createElement("h3")
            Contraseña.className = "palabra"
          Contraseña.innerText = "Contraseña"

        const log = this.ownerDocument.createElement("input")
            log.className = "logear"
            log.placeholder = "Iniciar sesión"
            log.type= "password"
            this.shadowRoot?.appendChild(log)
            log.addEventListener(
                "change",
                (s: any) => (credentials.password = s.target.value)
              );



        const button= this.ownerDocument.createElement("button");
        button.innerText = "Iniciar sesión"
        button.addEventListener("click",this.Regfirebase)
        button.addEventListener("click",()=>{
            dispatch(navigate(Screens.DASHBOARD))
        })
       
       
        this.shadowRoot?.appendChild(Email)
        this.shadowRoot?.appendChild(correo)
        this.shadowRoot?.appendChild(Contraseña)
        this.shadowRoot?.appendChild(log)
        this.shadowRoot?.appendChild(button)

        const css = this.ownerDocument.createElement("style")
        css.innerHTML=styles
        this.shadowRoot?.appendChild(css)
     
        }
   
    }


customElements.define('app-listlogin', Listlogin)
export default Listlogin;