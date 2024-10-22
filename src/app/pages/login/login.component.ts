import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  @ViewChild('f') form!:NgForm

    //Se voglio posso anche leggere il valore del Form attraverso il metodo submit.
    submit(form:NgForm){
      console.log('form inviato al submit',form);
      console.log(form.form.value);//qui ci sono tutti i valori sotto forma di oggetto unico

      form.reset();//resetto tutti i campi che hanno la direttiva ngModel

    }

}
