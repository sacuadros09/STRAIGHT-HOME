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
         <section class="component profile">
<img src="${this.pfp}" class="image pfp">
  <h3 class="username">${this.name}</h3>
 </section>
         `

}
}
}
customElements.define("my-profile",Myprofile);
export default Myprofile;


