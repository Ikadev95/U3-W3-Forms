import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormSvcService } from '../../services/form-svc.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent implements OnInit{

  form!:FormGroup
  formvalid = false

  constructor(private fb:FormBuilder, private svc : FormSvcService){} // permette di creare form reattivi

  ngOnInit(): void {
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.required]),
      surname: this.fb.control('', [Validators.required]),
      password: this.fb.control('', [Validators.required, Validators.minLength(5)]),
      confirmpass: this.fb.control('', [Validators.required]),
      genere: this.fb.control(''),
      image: this.fb.control(''),
      bio: this.fb.control(''),
      username: this.fb.control('', [Validators.required])
    },);
  }


  send(){
    if(this.form.valid){
      console.log(this.form.value);
      this.svc.logs.push(this.form.value)
    }//mostra i valori inseriti

      else {
        this.formvalid = true
        console.log("not valid")
      }
  }

  isValid(fieldName: string) {
    return this.form.get(fieldName)?.valid
   }
   isTouched(fieldName: string) {
     return this.form.get(fieldName)?.touched
   }

  isInValidTouched(fieldName:string){
    return !this.isValid(fieldName) && this.isTouched(fieldName)
  }

  passwordValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmpass')?.value;
    return password !== confirmPassword
  }

}

