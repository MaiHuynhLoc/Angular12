import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor() { }
  binhPhuong(n: number) : number {
    if (n !== 0) return n*n;
    return n;
  }
}
