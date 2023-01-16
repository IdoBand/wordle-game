import { useContext } from "react";
import { wordleContext } from "../providers/wordleContext";
import { Tile } from "../interface/interface";

export default function Tiles() {

  const {tiles} = useContext<any>(wordleContext);

    return (
         tiles.map((tile: Tile) => 
       <div key={tile.id.toString()}
            className={tile.className} 
            id={tile.id.toString()} 
             >{tile.content}</div>
    )   
    );
  }