import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChannelService {

  private url: string = '/assets/data/channel.json';

  constructor(private http: HttpClient) { }

  getChannelData(): Observable<any> {
   return this.http.get<any>(this.url);
  }
}
