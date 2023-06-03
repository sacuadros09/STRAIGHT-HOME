import styles from "./friends.css"

export enum attribute {
    "name" = "name",
    "pfp" = "pfp",  
    "message" = "message",
    "uploadimage" = "uploadimage"
}

class Mymessage extends HTMLElement{    
    name?: string;
    pfp?: string;
   message?: string;
    uploadimage?: string;


static get observedAttributes() {
    const attrs: Record<attribute,null> ={

        name: null,
        pfp: null,
        message: null,
        uploadimage: null,

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
    propName: attribute,
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
    <div class="message-container">
<div class="message">
<div class="profile-pic">
  <img src="${this.pfp}">
</div>
<div class="message-content">
  <div class="user-info">
    <h4 class="user-name">${this.name}</h4>
  </div>
  <p class="message-text">${this.message}</p>
</div>
</div>
<hr class="message-separator">
`

const css = this.ownerDocument.createElement("style")
css.innerHTML=styles
this.shadowRoot?.appendChild(css)
}
   } 



}

customElements.define("my-message",Mymessage);
export default Mymessage;