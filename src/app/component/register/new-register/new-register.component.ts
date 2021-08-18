import { 
  Component,
  OnInit 
} from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Register } from '../register';
import { RegisterService } from '../register.service';


 interface Conhecimento {
   value: string;
   viewValue: string;
 }

@Component({
  templateUrl: './new-register.component.html',
  styleUrls: ['./new-register.component.css']
})
export class NewRegisterComponent implements OnInit {
  form: FormGroup;
  register: Register = {
    id: null,
    name: '',
    email: '',
    cpf: '',
    phoneNumber: '',
    knowledges: [],
    status: false
  }

  knowledges: Array<any> = [
    {
      name: 'Git'
    },
    {
      name: 'php'
    },
    {
      name: 'nodejs'
    },
    {
      name: 'banco de dados'
    },
    {
      name: 'react'
    },
    {
      name: 'devops'
    },
    {
      name: 'typescript'
    },
  ];


  constructor(
    private registerService: RegisterService,
  ) {
    this.form = new FormGroup({
      id: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      cpf: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      status: new FormControl('', Validators.required),
      knowledges: new FormArray([]),
    })
    const formArray = this.form.get('knowledges') as FormArray;
    this.knowledges.forEach(x => formArray.push(new FormControl(false)));
  }

  ngOnInit(): void {
  }

  handleSave (): void{
    const formValue = Object.assign({}, 
      this.form.value, { 
        knowledges: this.knowledges
          .filter((x, i) => !!this.form.value.knowledges[i])});
  
    this.registerService.save(formValue);

    window.alert('Registro realizado com sucesso!')
  }

}
