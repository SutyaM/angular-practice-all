import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  public n1: number;
  public n2: number;
  public sum: number;
  public color: string;
  public text: string;
  public checkBox: boolean = true;
  public textArray: string[] = [];
  public collapse: boolean = true;

  public onCollapse() {
    this.collapse = !this.collapse;
  }

  public textDisable() {
    if (this.text.length < 3 || this.text.length > 13) {
      return true;
    } else {
      return false;
    }
  }

  public noMoreAdd() {
    if(this.textArray.length > 4) {
      return true;
    } else {
      return false;
    }
  }

  public arrayLengthCheck() {
    if (this.textArray.length > 4) {
      return true;
    } else {
      if (this.text.length < 3 || this.text.length > 13) {
        return true;
      } else {
        return false;
      }
    }
  }

  public onAdd() {
    this.sum = this.n1 + this.n2;
  }

  public onAddText() {
    this.textArray.push(this.text);
  }

  public onCheck() {
    this.checkBox = !this.checkBox;
  }

  public colorRed(sum: number) {
    if(sum > 100) {
      return {"background-color": 'red'}
    } else {
      return {"background-color": 'none'};
    }
  }

  public colorPurple(num: number) {
    if (num % 2 !== 0) {
      return {"color": 'purple'};
    }
  }

  public textFromSecondComponent(text: string) {
    this.textArray.push(text);
  }

  constructor(private router: Router, private route: ActivatedRoute) { }

  public showPokemons() {
    this.router.navigate(['/pokemons'])
  }

  public showDogs() {
    this.router.navigate(['/dogs'])
  }

  ngOnInit(): void {
  }

}
