import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, take } from 'rxjs/operators';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.scss'],
})
export class CustomersEditComponent implements OnInit {
  form: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  constructor(
    private customerService: CustomersService,
    private routerService: Router,
    private activatedRouteService: ActivatedRoute
  ) {}
  async onSubmit({ valid }: NgForm) {
    if (valid) {
      await this.customerService.update(this.form);
      this.routerService.navigate(['../..'], {
        relativeTo: this.activatedRouteService,
      });
    }
  }

  ngOnInit(): void {
    this.activatedRouteService.params
      .pipe(
        switchMap((params) => this.customerService.getById(params.id)),
        take(1)
      )
      .subscribe((customer) => {
        this.form = customer;
      });
  }
}
