import styles from "./login.css"

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

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML= "";

            const log = this.ownerDocument.createElement("input")
            log.placeholder = `${this.placeholder}`
            log.type= `${this.type}`
            this.shadowRoot?.appendChild(log)

            const css = this.ownerDocument.createElement("style")
            css.innerHTML=styles
            this.shadowRoot?.appendChild(css)
            
        }
    }
    
}





customElements.define("my-loginput",loginput);
export default loginput;