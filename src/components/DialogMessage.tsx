import { wordleContext } from "../providers/wordleContext"
import { useContext } from "react"



export default function DialogMessage(){

    const {dialogMessage} = useContext<any>(wordleContext);

    return (
        
        <main id="dialog">
              <div id="dialog-message" className={dialogMessage.className}>
                  {dialogMessage.message}
              </div>
        </main> 
    )
}