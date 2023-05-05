import { at } from "../../components/button landing/button landing";
import { navigate } from "../../store/action";
import { dispatch } from "../../store/index";
import { Screens } from "../../types/store";
import styles from "./dashbutton.css"

export class dashlading extends HTMLElement {
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

        const leftlogo = this.ownerDocument.createElement("section")
        leftlogo.className ="left"

        const rightlogin = this.ownerDocument.createElement("section")
        rightlogin.className= "right"

        const center = this.ownerDocument.createElement("section")
        center.className= "center"

        const img = this.ownerDocument.createElement("img")
        img.className = "imgs"
            img.src="/src/image/Logo blanco.png"
            leftlogo.appendChild(img)

            const newform = this.ownerDocument.createElement("h2")
            newform.innerText = "A new way to love"
             center.appendChild(newform)

            const button = this.ownerDocument.createElement("my-butlanding");
            button.className = "butinput"
            button.setAttribute(at.text,"Conocer más")
            button.addEventListener("click",()=>{
                dispatch(navigate(Screens.LOGIN))
            })
            rightlogin.appendChild(button)

            const butreg = this.ownerDocument.createElement("my-butlanding");
            butreg.setAttribute(at.text,"Registrarse")
            butreg.addEventListener("click",()=>{
               dispatch(navigate(Screens.SIGNUP))
            })
            rightlogin.appendChild(butreg)

            const butcenter = this.ownerDocument.createElement("my-butlanding");
            butcenter.className = "butcenter"
            butcenter.setAttribute(at.text,"Iniciar sesión")
            center.appendChild(butcenter)


        
        countainer.appendChild(leftlogo)
        countainer.appendChild(center)
        countainer.appendChild(rightlogin)

   
    
        this.shadowRoot?.appendChild (countainer)

        const css = this.ownerDocument.createElement("style")
        css.innerHTML=styles
        this.shadowRoot?.appendChild(css)
    }
}

}


customElements.define("app-dashlanding", dashlading);