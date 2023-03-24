import * as components from "./components/index.js";
import {dataprofile} from "./dataprofile.js";


class AppContainer extends HTMLElement {
    
    constructor(){
        super();
        this.attachShadow({mode:'open'});
    }

    connectedCallback(){
        this.render();
    }
    attributeChangedCallback(propName,oldValue,newValue){
        this[propName] = newValue;
        this.render();
        }

        
    render(){
        this.shadowRoot.innerHTML +=
        `
        <link rel="stylesheet" href="./src/components/message/message.css">
        <link rel="stylesheet" href="./src/components/post/post.css">
        <link rel="stylesheet" href="./src/index.css">
        `;
        this.shadowRoot.innerHTML +=
        `
        <section class="sectiongrande1"> 
        <div class="barra">
        <img src="../public/src/image/Barra Naranja.jpg">
        </div>
        <div class="matche">
        <img src="../public/src/image/Matches.png">
        <img src="../public/src/image/Message.png">
        </div>
        </section>

        `;
        const message = this.ownerDocument.createElement("section")
        message.className = "section1"
        dataprofile.forEach((user)=>{ `
            <my-message pfp="${user.pfp}"name="${user.name}"message="${user.message}"></my-message>
            `
            const messagecard = this.ownerDocument.createElement("my-message")
        messagecard.setAttribute("pfp",user.pfp)
        messagecard.setAttribute("name",user.name)
        messagecard.setAttribute("message",user.message)
        message.appendChild(messagecard)
    
        })
        this.shadowRoot.appendChild(message)
        this.shadowRoot.innerHTML +=
        `
        <section class="sectiongrande2"> 
        <my-search> </my-search>
        </section>

        `;


        const post = this.ownerDocument.createElement("section")
        post.className = "section2"
        dataprofile.forEach((user)=>{ `
            <my-post pfp="${user.pfp}"name="${user.name}"post="${user.post}"></my-post>
            `
            const postcard = this.ownerDocument.createElement("my-post")
        postcard.setAttribute("pfp",user.pfp)
        postcard.setAttribute("name",user.name)
        postcard.setAttribute("hour",user.hour)
        postcard.setAttribute("description",user.description)
        postcard.setAttribute("uploadimage",user.uploadimage)

        post.appendChild(postcard)
    
        })
        this.shadowRoot.appendChild(post)


    }
    }




customElements.define("app-container",AppContainer);