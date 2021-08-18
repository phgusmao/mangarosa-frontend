import { 
  Component, 
  OnInit 
} from '@angular/core';
import { RegisterService } from '../register.service';
import { Register } from '../register';

@Component({
  selector: 'app-register-list',
  templateUrl: './register-list.component.html',
  styleUrls: ['./register-list.component.css']
})
export class RegisterListComponent implements OnInit {

  filterRegister: any;
  // filterRegister?: Register[] = [];

  _register: any;

  _filterBy?: any;

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.registerService.retriveAll().then(data =>  {
      this._register = data
    }).catch(err => { (err)});

    this.filterRegister = this._register
  }

  set filter(value: string){
    this._filterBy = value;

    this.filterRegister = this._register.filter((register: Register) => register.name.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);
  }

  get filter() {
    return this._filterBy
  }

}
