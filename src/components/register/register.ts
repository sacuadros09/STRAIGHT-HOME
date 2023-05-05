import styles from "./register.css"

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

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML= "";

            const reg = this.ownerDocument.createElement("input")
            reg.placeholder = `${this.placeholder}`
            reg.type= `${this.type}`
            this.shadowRoot?.appendChild(reg)

            const css = this.ownerDocument.createElement("style")
            css.innerHTML=styles
            this.shadowRoot?.appendChild(css)
            
        }
    }
    
}





customElements.define("my-reginput",reginput);
export default reginput;