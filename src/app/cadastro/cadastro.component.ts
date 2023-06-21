import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ConsultaCepService } from '../service/consulta-cep.service';
import { HttpEvent } from '@angular/common/http';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private router: Router,
    private serviceCep: ConsultaCepService
   ) { }

  ngOnInit(): void {
  }

  consultaCEP(event: any, f: NgForm) {
    const cep = event.target.value
    let result = undefined
    if (cep !== '') {
      this.serviceCep
      .getConsultaCep(cep)
      .subscribe(resultado => {
        console.log(resultado)
        this.populandoEndereco(resultado, f)
      })
    }
  }

  populandoEndereco(dados: any, f: NgForm) {
    // Duas formas de fazer
    // f.controls['endereco'].setValue(dados['logradouro'])
    // f.controls['bairro'].setValue(dados['bairro'])
    // f.controls['cidade'].setValue(dados['localidade'])
    // f.controls['estado'].setValue(dados['uf'])
    f.form.patchValue({
      endereco: dados.logradouro,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf
    })
  }

  cadastrar(form: NgForm){
    // if (form.valid) {
    //   this.router.navigate(['/sucesso'])
    // } else {
    //   alert('Formulário inválido')
    // }
    console.log(form.controls);
    
  }
}
