import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { Usuario } from './models/usuario';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html'
})
export class CadastroComponent implements OnInit {

  cadastroForm: FormGroup;
  usuario: Usuario;
  formResult: string = '';

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    let senha = new FormControl('', Validators.required, CustomValidators.rangeLength([6, 15]));
    let senhaConfirmacao = new FormControl('', [Validators.required, CustomValidators.rangeLength([6, 15]), CustomValidators.equalTo(senha)]);

    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: senha,
      senhaConfirmacao: senhaConfirmacao
    });

  }

  adicionarUsuario() {
    if(this.cadastroForm.dirty && this.cadastroForm.valid){
      this.usuario = Object.assign({}, this.usuario, this.cadastroForm.value);
      this.formResult = JSON.stringify(this.cadastroForm.value)
    }
    else{
      this.formResult = "Não submeteu!"
    }
  }
}
