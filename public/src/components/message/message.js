class Message extends HTMLElement {

    static get observedAttributes(){
        return ["name","pfp","message","uploadimage",]
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    attributeChangedCallback(propName,oldValue,newValue){
    this[propName] = newValue;
    this.render();
    }

    render(){
        this.shadowRoot.innerHTML =`
        <link rel="stylesheet" href="./src/components/message/message.css">

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
    }
}

customElements.define("my-message",Message);
export default Message;