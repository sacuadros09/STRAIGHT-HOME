import styles from "./dashboard.css"

import "../components/export"
import {dataprofile} from "../components/Data/data"
import {attribute} from "../components/message/message"
import {attribut} from "../components/post/post"
import {attribu} from "../components/profile/profile"


export class Dashboard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });   
}

connectedCallback(){
this.render()
}

render(){
    if(this.shadowRoot){
        const countainer = this.ownerDocument.createElement("section")
        countainer.className ="all"

        const leftmessage = this.ownerDocument.createElement("section")
        leftmessage.className ="left"

        const rightpost = this.ownerDocument.createElement("section")
        rightpost.className= "right"

        const searchBar = this.ownerDocument.createElement("my-search")
        searchBar.className = "top"
        rightpost.appendChild(searchBar)

    
            const profile = this.ownerDocument.createElement("my-profile");
                profile.setAttribute(attribu.name, dataprofile[5].name);
                profile.setAttribute(attribu.pfp, dataprofile[5].pfp);
                leftmessage.appendChild(profile)
            

        dataprofile.forEach((dat)=>{
            const message = this.ownerDocument.createElement("my-message");
            message.setAttribute(attribute.name, dat.name);
            message.setAttribute(attribute.pfp, dat.pfp);
            message.setAttribute(attribute.message, dat.message);
            message.setAttribute(attribute.uploadimage, dat.uploadimage);
            leftmessage.appendChild(message)

            
        });

        dataprofile.forEach((dat)=>{
        const post = this.ownerDocument.createElement("my-post");
            post.setAttribute(attribut.name, dat.name);
            post.setAttribute(attribut.pfp, dat.pfp);
            post.setAttribute(attribut.hour, dat.hour);
            post.setAttribute(attribut.description, dat.description);
            post.setAttribute(attribut.uploadimage, dat.uploadimage);
            rightpost.appendChild(post)

    });
    countainer.appendChild(leftmessage)
    countainer.appendChild(rightpost)

    this.shadowRoot?.appendChild (countainer)

    const css = this.ownerDocument.createElement("style")
    css.innerHTML=styles
    this.shadowRoot?.appendChild(css)
}

}

}

customElements.define("app-dashboard", Dashboard);