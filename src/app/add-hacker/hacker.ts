import { stringify } from 'querystring';

export class Hacker {
  constructor(
    public name: string,
    public challanges: string,
    public expertise: string,
    public DS: string,
    public Algo: string,
    public Python: string,
    public Cpp: string
  ){}
}
