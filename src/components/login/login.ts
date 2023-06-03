import styles from "./login.css"
import Firebase from "../../utils/firebase"
const credentials = { email: "", password: "" };
export enum attr {
    "placeholder" = "placeholder",
    "type" = "type",
}

  class loginput extends HTMLElement{
    placeholder?: string;
    type?: string;
   

static get observedAttributes() {
    const attr: Record<attr,null> ={

        placeholder: null,
        type: null,

    };
    return Object.keys(attr);
}

constructor() {
    super();
    this.attachShadow({mode:"open"});
}
attributeChangedCallback(
    propName: attr,
    _: string | undefined,
    newValue: string | undefined
    ) {
        switch (propName) {
            
            default:
            this[propName] = newValue;
            break;
        }
    }
    connectedCallback(){
        this.render();
    }
async Logfirebase(){
    Firebase.Authlogin(credentials);
}

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML= "";

            const log = this.ownerDocument.createElement("input")
            log.placeholder = "Correo electronico"
            log.type= "email"
            this.shadowRoot?.appendChild(log)
           log.addEventListener(
                "change",
                (s: any) => (credentials.email = s.target.value)
              );

            const logpassword = this.ownerDocument.createElement("input")
            logpassword.placeholder = "Password"
            logpassword.type= "password"
            this.shadowRoot?.appendChild(logpassword)
            logpassword.addEventListener(
                "change",
                (s: any) => (credentials.password = s.target.value)
              );

            const button= this.ownerDocument.createElement("button");
            button.innerText = "Iniciar sesión"
            button.addEventListener("click",this.Logfirebase)

            
            this.shadowRoot?.appendChild(button)

            const css = this.ownerDocument.createElement("style")
            css.innerHTML=styles
            this.shadowRoot?.appendChild(css)
           
            
        }
    }
    
}





customElements.define("my-loginput",loginput);
export default loginput;