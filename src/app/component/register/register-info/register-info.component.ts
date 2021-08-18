import { Register } from './../register';
import { 
  Component, 
  OnInit 
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RegisterService } from '../register.service';

@Component({
  templateUrl: './register-info.component.html',
  styleUrls: ['./register-info.component.css']
})
export class RegisterInfoComponent implements OnInit {

  register: any;

  constructor(private route: ActivatedRoute, private registerService: RegisterService) { }

  ngOnInit(): void {
this.registerService.retriveById(Number(this.route.snapshot.paramMap.get('id'))).then(data => {
  this.register = data;

}).catch(err => {
  (err)
}) 
 }

  save() {
    this.registerService.save(this.register)
  }

}
