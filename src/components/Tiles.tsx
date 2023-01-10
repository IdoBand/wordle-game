import { useContext } from "react";
import { wordleContext } from "../providers/wordleContext";
import { Tile } from "../interface/types";


export default function Tiles() {

  const {tiles} = useContext<any>(wordleContext);

    return (
         tiles.map(tile => 
       <div key={tile.id.toString()}
            className={tile.className} 
            id={tile.id} 
             >{tile.content}</div>
    )   
    );
  }