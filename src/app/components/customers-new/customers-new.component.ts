import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-new',
  templateUrl: './customers-new.component.html',
  styleUrls: ['./customers-new.component.scss'],
})
export class CustomersNewComponent implements OnInit {
  form: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };
  async onSubmit({ valid }: NgForm) {
    if (valid) {
      await this.customerService.add(this.form);
      this.routerService.navigate(['..'], {
        relativeTo: this.activatedRoutService,
      });
    }
  }
  reset(customerForm: NgForm) {
    customerForm.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      notes: '',
    });
  }

  constructor(
    private customerService: CustomersService,
    private routerService: Router,
    private activatedRoutService: ActivatedRoute
  ) {}

  ngOnInit(): void {}
}
