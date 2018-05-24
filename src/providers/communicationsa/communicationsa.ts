
import {Http, Headers, URLSearchParams} from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the CommunicationsaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommunicationsaProvider {

  constructor(public http: Http) {
    console.log('Hello CommunicationsaProvider Provider');
  } 

  testapi(){
    
    return new Promise(
      resolve => {
        // let headers = new Headers();
        // headers.append('Content-Type', 'application/x-www-form-urlencoded');
        // //let params = new HttpParams().set('db', 'prueba').set('q', 'SELECT * FROM corriente');
        // let body = {'db': 'prueba' , 'q': 'SELECT * FROM corriente'}

        let body = new URLSearchParams();
        body.set('db', 'prueba');
        body.set('q', 'SELECT * FROM corriente');

        this.http.post("http://tecnoandina-server.ddns.net:8086/query?pretty=true", body )
        .map(res => res.json())
          .subscribe(
            data => {
              /*
              if(data.response)
              {
                  console.log(data);
              }
              */
              // console.log('planificacion_platos ');
              // this.planificacion_platos = data['planificacion'];
              // console.log(this.planificacion_platos);
              console.log('##########################################');
              console.log('se ha recibido respuesta desde api');
              console.log(data)
              resolve(data);
            },
            error => {
              console.log(error);
            }
          )
      }
    );
  }

}
