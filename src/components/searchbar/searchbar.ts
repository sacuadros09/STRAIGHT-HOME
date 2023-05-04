import styles from "./searchbar.css"

class Search extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if  (this.shadowRoot){
            this.shadowRoot.innerHTML=`
        <link rel="stylesheet" href="./src/components/searchbar/searchbar.css">
        <div class="searchbar">
        <div class="composer-container">
      <div class="composer-header">
    <div class="profile-pic">
      <img src="/src/image/Cuadros.jpeg">
    </div>
    <div class="composer-input-container">
      <input type="text" placeholder="What are you thinking?">
    </div>
    <img class="campana" src="/src/image/Icono de imagen.png">
    <img src="/src/image/Icono de campana.png">
    <div class="separator">
    </div>
  </div>
</div>

</div>


        </section>
        `

        const css = this.ownerDocument.createElement("style")
css.innerHTML=styles
this.shadowRoot?.appendChild(css)
    }
}

}

customElements.define("my-search",Search);
export default Search;