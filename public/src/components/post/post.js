class Post extends HTMLElement {

    static get observedAttributes(){
        return ["pfp","name","hour","description","uploadimage"]
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    //Que va a pasar cuando mi componente se incruste en el html
    connectedCallback(){
        this.render();
    }

    //Escuchar los cambios en nuestras variables
    attributeChangedCallback(propName,oldValue,newValue){
    this[propName] = newValue;
    this.render();
    }

    render(){
        this.shadowRoot.innerHTML =`
        <link rel="stylesheet" href="./src/components/post/post.css">
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

customElements.define("my-post",Post);
export default Post;