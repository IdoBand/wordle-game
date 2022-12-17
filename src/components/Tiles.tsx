import { useContext } from "react";
import { wordleContext } from "../providers/wordleContext";


export default function Tiles() {

  const {tiles} = useContext<any>(wordleContext);

    return (
         tiles.map(item => 
       <div key={item.id.toString()}
            className={item.className} 
            id={item.id} 
             >{item.content}</div>
    )   
    );
  }