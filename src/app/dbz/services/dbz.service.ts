import { Injectable } from '@angular/core';
import { v4 as uuid } from "uuid";
import { Character } from '../interfaces/character.interface';

@Injectable({
    providedIn: 'root'
})

export class DbzService {
    public characters: Character[] = [{
        id: uuid(),
        name: 'Raditz',
        power: 1500
    },
    {
        id: uuid(),
        name: 'Nappa',
        power: 5000
    }
    ,
    {
        id: uuid(),
        name: 'Vegeta',
        power: 9500
    }];

    AddCharacter( character: Character):void{
        const newCharacter: Character = {
            id: uuid(),
                ...character
        };
        this.characters.push(newCharacter);
    }
    // onDeleteCharacter( index:number ):void{
    //     this.characters.splice(index, 1);
    // }
    deleteCharacterById( id:string ):void{
        this.characters = this.characters.filter( character => character.id !== id );
    }
    
}