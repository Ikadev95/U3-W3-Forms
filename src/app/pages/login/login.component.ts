import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormSvcService } from '../../services/form-svc.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  @ViewChild('f') form!:NgForm

  constructor(private svc: FormSvcService){}
    //Se voglio posso anche leggere il valore del Form attraverso il metodo submit.
    submit(form:NgForm){
      this.checkInfo(form)
      console.log('form inviato al submit',form);
      console.log(form.form.value);//qui ci sono tutti i valori sotto forma di oggetto unico

      form.reset();//resetto tutti i campi che hanno la direttiva ngModel

    }

    checkInfo(form: NgForm) {
      let pass: boolean = false;
      let username: boolean = false;

      this.svc.logs.map((obj: any) => {
        if (obj && typeof obj.password === 'string' && obj.password === form.form.value.password) {
          pass = true;
        }
        if (obj && typeof obj.username === 'string' && obj.username === form.form.value.username) {
          username = true;
        }
      });

      if (pass && username) {
        console.log('Login corretto');
      } else {
        console.log('Username o password errati');
      }
    }


}
