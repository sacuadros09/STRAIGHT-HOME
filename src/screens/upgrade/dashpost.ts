import styles from ".dashpost.css"

import "../components/export"
import { dataprofile } from "../../components/Data/data"
import { attribute } from "../../components/friends/friends"
import { attribut } from "../../components/post/post"
import { attribu } from "../../components/profile/profile"
import { dispatch } from "../../store"
import { navigate } from "../../store/action"
import { Screens } from "../../types/store"


export class Dashpost extends HTMLElement {
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

        const centerpost = this.ownerDocument.createElement("section")
        centerpost.className = "center"
        centerpost.appendChild(centerpost)

    
            const profile = this.ownerDocument.createElement("my-profile");
                profile.setAttribute(attribu.name, dataprofile[5].name);
                profile.setAttribute(attribu.pfp, dataprofile[5].pfp);
                leftmessage.appendChild(profile)
                profile.addEventListener("click",()=>{
                    dispatch(navigate(Screens.PROFILE))
                })

        dataprofile.forEach((dat)=>{
            const message = this.ownerDocument.createElement("my-message");
            message.setAttribute(attribute.name, dat.name);
            message.setAttribute(attribute.pfp, dat.pfp);
            message.setAttribute(attribute.message, dat.message);
            message.setAttribute(attribute.uploadimage, dat.uploadimage);
            message.addEventListener("click",()=>{
            dispatch(navigate(Screens.LANDING))
        })
        
            leftmessage.appendChild(message)
            const imgs = this.ownerDocument.createElement("img")
            imgs.className = "imgs"
            imgs.src="/src/image/Cuadros.jpeg"
            rightpost.appendChild(imgs)

            const namesacuadros  = this.ownerDocument.createElement("h2")
            namesacuadros.className = "namesacuadros"
            namesacuadros.innerText = "Sacuadros09"
        rightpost.appendChild(namesacuadros)

         const namehour  = this.ownerDocument.createElement("h2")
         namehour.className = "namehour"
         namehour.innerText = "13 h"
         rightpost.appendChild(namehour)

         const imgpoints = this.ownerDocument.createElement("img")
         imgpoints.className = "imgs"
         imgpoints.src="/src/image/Icono de configuración.png"
            rightpost.appendChild(imgpoints)
         
            const imgname = this.ownerDocument.createElement("img")
            imgname.className = "imgs"
            imgname.src="/src/image/Anne aceptado.png"
            rightpost.appendChild(imgname)

            
        });


        

        dataprofile.forEach((dat)=>{
        const post = this.ownerDocument.createElement("my-post");
            post.setAttribute(attribut.name, dat.name);
            post.setAttribute(attribut.pfp, dat.pfp);
            post.setAttribute(attribut.hour, dat.hour);
            post.setAttribute(attribut.description, dat.description);
            post.setAttribute(attribut.uploadimage, dat.uploadimage);
            post.addEventListener("click",()=>{
                dispatch(navigate(Screens.SIGNUP))
            })
            rightpost.appendChild(post)

    });
    countainer.appendChild(leftmessage)
    countainer.appendChild(rightpost)
    countainer.appendChild(centerpost)

    this.shadowRoot?.appendChild (countainer)

    const css = this.ownerDocument.createElement("style")
    css.innerHTML=styles
    this.shadowRoot?.appendChild(css)
}{}

}

}

customElements.define("app-dashpost", Dashpost);