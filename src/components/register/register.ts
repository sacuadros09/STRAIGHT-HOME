import styles from "./register.css"
import Firebase from "../../utils/firebase"
const credentials = { email: "", password: "" };
export enum att {
    "placeholder" = "placeholder",
    "type" = "type",
}

  class reginput extends HTMLElement{
    placeholder?: string;
    type?: string;
   

static get observedAttributes() {
    const att: Record<att,null> ={

        placeholder: null,
        type: null,

    };
    return Object.keys(att);
}

constructor() {
    super();
    this.attachShadow({mode:"open"});
}
attributeChangedCallback(
    propName: att,
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
    async Regfirebase(){
        Firebase.Authregister(credentials);
    }
    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML= "";

            const reg = this.ownerDocument.createElement("input")
            reg.placeholder = "Registrarse"
            reg.type= "password"
            this.shadowRoot?.appendChild(reg)
            reg.addEventListener(
                "change",
                (s: any) => (credentials.password = s.target.value)
              );

            const button= this.ownerDocument.createElement("button");
            button.innerText = "Regístrate"
            button.addEventListener("click",this.Regfirebase)
            
            this.shadowRoot?.appendChild(button)

            

            const css = this.ownerDocument.createElement("style")
            css.innerHTML=styles
            this.shadowRoot?.appendChild(css)

            
        }
    }
    
}





customElements.define("my-reginput",reginput);
export default reginput;