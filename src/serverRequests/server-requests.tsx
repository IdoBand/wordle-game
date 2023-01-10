import {useState, }from "react"

export function serverRequests() {
    const endPoint = 'http//localhost:4000';


 const [encryptedObject, setEncryptedObject] = useState(null)
  async function getWordFromServer() {
    
        const response = await fetch('http://localhost:4000/getWord');
        const encryptedObject = await response.json();
        setEncryptedObject(encryptedObject);
    };

    return ({
        encryptedObject,
        setEncryptedObject,
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

