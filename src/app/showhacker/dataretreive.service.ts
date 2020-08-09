import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Data{
    id:number,
    name: string,
    challanges: string,
    expertise: string,
    DS: string,
    Algo: string,
    Cpp: string,
    python: string,
    vote: number
}

interface Valid{
  success: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataretreiveService {

  Url = 'http://localhost:3000/retrievedata';
  url = 'http://localhost:3000/updatevote';
  constructor(private http: HttpClient) { }

  public DataRetrieve(): Observable<Data[]> {
    return this.http.get<Data[]>(this.Url);
  }

  public UpdateVote(id, vote){
    console.log(vote);
    return this.http.post<Valid>(this.url, {
      id,
      vote
    });
  }
}
