import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name:  string = 'ironman';
  public age:   number = 45;
  public heroNumber: number = 0;
  public heroArray: string[] = ['Batman', 'Superman', 'Wolverine'];
  public heroAgeArray: number[] = [75, 100, 210];

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${ this.name } - ${ this.age }`;
  }
  changeHero():void{
    const randomNum = Math.floor(Math.random() * 3);
          this.heroNumber = randomNum;
          this.name = this.heroArray[this.heroNumber];
  }
  changeAge():void{
    const randomNum = Math.floor(Math.random() * 3);
          this.heroNumber = randomNum;
          this.age = this.heroAgeArray[this.heroNumber];
  }
  resetForm():void{
    this.age = 45;
    this.name = 'ironman ';
  }

}
