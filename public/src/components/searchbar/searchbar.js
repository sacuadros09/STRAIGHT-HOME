class Search extends HTMLElement {

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML =`
        <link rel="stylesheet" href="./src/components/searchbar/searchbar.css">
        <div class="searchbar">
        <div class="composer-container">
      <div class="composer-header">
    <div class="profile-pic">
      <img src="../public/src/image/Cuadros.jpeg">
    </div>
    <div class="composer-input-container">
      <input type="text" placeholder="What are you thinking?">
    </div>
    <img class="campana" src="../public/src/image/Icono de imagen.png">
    <img src="../public/src/image/Icono de campana.png">
    <div class="separator">
    </div>
  </div>
</div>

</div>


        </section>
        `
    }
}

customElements.define("my-search",Search);
export default Search;