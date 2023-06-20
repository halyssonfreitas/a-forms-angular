import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  private readonly PrefixAPI = 'https://viacep.com.br/ws/'
  private readonly PosfixAPI = '/json'

  constructor(
    private http: HttpClient
  ) { }

  getConsultaCep(cep: string) {
    return this.http.get(this.mountURLtoAPI(cep))
  }

  private mountURLtoAPI(cep: string): string {
    return this.PrefixAPI + cep.replace("-", "") + this.PosfixAPI
  }
}
