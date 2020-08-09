import { Component, OnInit } from '@angular/core';
import { DataretreiveService } from './dataretreive.service';

export interface HackerData{
  id,
  name,
  challanges,
  expertise,
  DS,
  Algo,
  Cpp,
  python,
  vote
}

@Component({
  selector: 'app-showhacker',
  templateUrl: './showhacker.component.html',
  styleUrls: ['./showhacker.component.css']
})
export class ShowhackerComponent implements OnInit {


  hackerdatastore: HackerData[];
  constructor(public retrieve: DataretreiveService) { }

  ngOnInit(): void {
    this.onload();
  }

  onload(){
      this.retrieve.DataRetrieve().subscribe(data => {
        this.hackerdatastore = data;
      });
  }

  onVote(event, data){
    this.retrieve.UpdateVote(data._id, data.vote + 1).subscribe(valid => {
      console.log(valid);
      this.onload();
    });
  }
}
