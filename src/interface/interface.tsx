export interface Tile {
    id: number, 
    content: string, 
    className: string
}

export interface User {
    firstName: string,
    lastName?: string,
    email?: string
}

export interface EncryptedObject {
    iv: {
        type: string;
        data: number[];
        };
    encrypted: string;
}