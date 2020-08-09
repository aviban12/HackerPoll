import { Component, OnInit } from '@angular/core';
import { Hacker } from './hacker';
import { ADEService } from './ade.service';

@Component({
  selector: 'app-add-hacker',
  templateUrl: './add-hacker.component.html',
  styleUrls: ['./add-hacker.component.css']
})
export class AddHackerComponent implements OnInit {
  Expert = new Hacker('', '', '', '', '', '', '');
  constructor(private addhac: ADEService) { }

  ngOnInit(): void {
  }

  addhacker(){
    const dataretrieved = this.Expert;
    const name = dataretrieved.name;
    const challanges = dataretrieved.challanges;
    const expertise = dataretrieved.expertise;
    const DS = dataretrieved.DS;
    const Algo = dataretrieved.Algo;
    const Cpp = dataretrieved.Cpp;
    const python = dataretrieved.Python;
    const vote = 0;
    this.addhac.Addhacker(name, challanges, expertise, DS, Algo, Cpp, python, vote).subscribe(data =>{
      if (data.success){
         console.log('Data inserted');
       }
    });
  }

  deletehacker(){
    console.log('delete');
  }

  edithacker(){
    console.log('edit');
  }
}
