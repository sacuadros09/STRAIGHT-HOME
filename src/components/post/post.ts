export enum attribut {
    "name" = "name",
    "pfp" = "pfp",
    "hour" = "hour",
    "description" = "description",
    "uploadimage" = "uploadimage"
}

class Mypost extends HTMLElement{
    name?: string;
    pfp?: string;
   hour?: string;
   description?: string;
    uploadimage?: string;


static get observedAttributes() {
    const attrs: Record<attribut,null> ={

        name: null,
        pfp: null,
        hour: null,
        description: null,
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
    propName: attribut,
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
    <section class="maxdiv">
    <div class="post">
<div class="user-info">
<img src="${this.pfp}" class="profile-image">
<div class="user-details">
  <h3 class="username">${this.name}</h3>
  <p class="post-time">${this.hour}</p>
</div>
</div>

<div class="allpost">
<div class="post-content">
<p class="post-text">${this.description}</p>
<img src="${this.uploadimage}" class="post-image">
</div>
</div>
</section>

    `
}
}



}
customElements.define("my-post",Mypost);
export default Mypost;