import styles from "./editar perfil.css"

export enum attributes{
    "name" = "name",
    "pfp" = "pfp"
}

class Myeditarprofile extends HTMLElement{
    name?: string;
    pfp?: string;


    static get observedAttributes() {
        const attrs: Record<attributes,null> ={
            name: null,
            pfp: null,
        };
        return Object.keys(attrs);
    }

    constructor() {
        super();
        this.attachShadow({mode:"open"});
}
connectedCallback(){
    this.render();
}

attributeChangedCallback(
    propName: attributes,
    _: string | undefined,
    newValue: string | undefined
    ) {
        switch (propName) {
            
            default:
            this[propName] = newValue;
            break;
        }
        
        this.render();
    }

    render(){
        if  (this.shadowRoot){
         this.shadowRoot.innerHTML=`
         <section class="component">
         
 </section>
         `
    const css = this.ownerDocument.createElement("style")
css.innerHTML=styles
this.shadowRoot?.appendChild(css)

const Email = this.ownerDocument.createElement("h3")
            Email.className = "palabra"
          Email.innerText = "Email"

}
}
}
customElements.define("my-editarprofile",Myeditarprofile);
export default Myeditarprofile;


