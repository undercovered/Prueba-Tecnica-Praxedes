import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../../environments/environment';
import { Character, Episodios, Login, Registro, Results } from '../interfaces/interfaces';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
var_entorno = environment;
  constructor(private http: HttpClient,
              public router: Router) { }

  getEpisodes(page: string) {
    return this.http.get<Episodios>(this.var_entorno.url_episodios+page);
  }

  getcharacters(idPersonajes: string | null) {
    let url = this.var_entorno.url_personajes+idPersonajes;
    return this.http.get<Results[]>(url);
  }


  /*Login*/
  logear(data: Login) {
    console.log('Logeando')
    return this.http.post<any>(environment.login_url, data)
    .subscribe(
      data => {
        console.log(data.token)
        sessionStorage.setItem('access_token', data.token);
        this.router.navigate(['/main']);
      } 
    )
    
  }


  /*REGISTRO*/

  registrar(registro: Registro) {
    console.log('Realizando registro');
    this.http.post<any>(environment.register_url, registro)
    .subscribe(
      data => {
        console.log('data', data);
        this.router.navigate(['/auth/login']);
      }
    )
  }



  obtenerFavoritos() {
    try {
      return this.http.post(environment.url_favoritos+'api/Favoritos',
        { headers: {'Authorization': 'Bearer ' + sessionStorage.getItem('access_token') } })
      .subscribe(
        data => {
          console.log(data);
        }
      );
    } catch (error) {
      console.log(error);
      return error
    }
  }
}
