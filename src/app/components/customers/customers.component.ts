import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss'],
})
export class CustomersComponent implements OnInit {
  nameTerm:string ='';
  phoneTerm:string = '';

  customer$: Observable<Customer[]>;
  constructor(private customersService: CustomersService) {
    this.customer$ = this.customersService.getAll();
  }
  remove(id?: string) {
    if (!id) {
      return;
    }
    if (confirm('Are you sure you want to delete?')) {
      this.customersService.remove(id);
    }
  }

  ngOnInit(): void {}
}
