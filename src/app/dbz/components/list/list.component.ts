import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power:10
  }];
  @Output()
  public onDeleteId: EventEmitter<string> = new EventEmitter();
  // onDeleteId 
  onDeleteCharacter( id?: string ): void{
    // TODO: Emitir el ID del personaje
    if ( !id ) return;
    console.log('Se emitio index: ', id);
    this.onDeleteId.emit(id);
  }
}
