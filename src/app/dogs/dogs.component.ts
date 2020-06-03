import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DogService } from '../dog.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.css']
})
export class DogsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, public dogService: DogService) { }


  public dog;
  public pictureUrl: string;
  public dogObj;

  public backButton() {
    this.router.navigate([''])
  }

  public showDogs() {
    this.dogService.getDogs().subscribe((value) => {
      this.dogObj = value;
      this.pictureUrl = this.dogObj.message;
    })
    return this.pictureUrl
  }

  ngOnInit(): void {
        
  }

}
