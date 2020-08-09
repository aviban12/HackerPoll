import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface dataretured {
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ADEService {

  Url = 'http://localhost:3000/adddata';

  constructor(private http: HttpClient) { }

  Addhacker(name, challanges, expertise, DS, Algo, Cpp, python, vote){
    return this.http.post<dataretured>(this.Url, {
      name,
      challanges,
      expertise,
      DS,
      Algo,
      Cpp,
      python,
      vote
    });
  }
}
