import {useState, }from "react"

export function serverRequests() {
    const endPoint = 'http//localhost:4000';


 const [serverObject, setServerObject] = useState(null)
  async function getWordFromServer() {
    
        const response = await fetch('http://localhost:4000/getWord');
        const serverObject = await response.json();
        console.log('test')
        setServerObject(serverObject);
    };

    return ({
        serverObject,
        setServerObject,
        getWordFromServer
    })

}


// adjusments needed
// async function checkWordAtServer (guess: string, encriptedWorsKey: string) {
//     const attempt = {guess: guess,
//                     encriptedWorsKey: encriptedWorsKey}
//     const response = await fetch(`${endPoint}/check`, {method: 'post',
//                                                                     headers: {'Content-Type': 'application/json'},
//                                                                     body: JSON.stringify(attempt)});

//     const resultObject = await response.json();
//     return resultObject;
// };

