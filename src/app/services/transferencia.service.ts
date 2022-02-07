import { Transferencia } from './../models/transferencia.model';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
//Root serve pra ser existente enquanto a aplicação for ativa
export class TransferenciaService {
    private listaTransferencia: any[];
    private url = 'http://localhost:3000/transferencias';

    constructor(private httpClient: HttpClient) {
      this.listaTransferencia = [];
    }
    get transferencias(){
      return this.listaTransferencia;
    }

    todas(): Observable<Transferencia[]>{ //Observable implementa padrão observador. Retorna resposta em algum futuro
      return this.httpClient.get<Transferencia[]>(this.url);
    }
    adicionar(transferencia: Transferencia): Observable<Transferencia>{
      this.hidratar(transferencia);
      return this.httpClient.post<Transferencia>(this.url, transferencia);
    }

    private hidratar(transferencia: any){
      transferencia.data = new Date();
      //Aqui são adicionadas as regras de negocio
    }
}
