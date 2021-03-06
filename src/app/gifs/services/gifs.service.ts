import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey    : string = 'tUdk085bhue5phmKr7Q3TdjlblMYlKcw';
  private _historial: string[] = [];

  get historial(){
    return [...this._historial];
  }

  constructor(private http: HttpClient){}

  buscarGifs(query:string = ''){

    query = query.trim().toLowerCase();

    if (!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial = this._historial.splice(0,10);

    }

    this.http.get('https://api.giphy.com/v1/gifs/search?api_key=tUdk085bhue5phmKr7Q3TdjlblMYlKcw&q=One Piece&limit=10')
          .subscribe((resp: any) => {
            console.log(resp.data);
          });

  }
}
