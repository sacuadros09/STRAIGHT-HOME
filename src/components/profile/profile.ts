import styles from "./profile.css"

export enum attribu{
    "name" = "name",
    "pfp" = "pfp"
}

class Myprofile extends HTMLElement{
    name?: string;
    pfp?: string;


    static get observedAttributes() {
        const attrs: Record<attribu,null> ={
    
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
    propName: attribu,
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
         <img src="/src/image/Barra Naranja.jpg">
 </section>
 <section class= "matches">
 <img src="/src/image/Matches.png">
 <img src= "/src/image/Message.png">
 </section>
         `
         const css = this.ownerDocument.createElement("style")
css.innerHTML=styles
this.shadowRoot?.appendChild(css)

}
}
}
customElements.define("my-profile",Myprofile);
export default Myprofile;


