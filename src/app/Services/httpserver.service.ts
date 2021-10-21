import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpserverService {
  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) { }

}
