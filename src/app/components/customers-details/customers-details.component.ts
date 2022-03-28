import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers-details',
  templateUrl: './customers-details.component.html',
  styleUrls: ['./customers-details.component.scss'],
})
export class CustomersDetailsComponent implements OnInit, OnDestroy {
  customer$: Observable<Customer>;

  constructor(
    activatedRouteService: ActivatedRoute,
    customersService: CustomersService
  ) {
    this.customer$ = activatedRouteService.params.pipe(
      switchMap((params) => customersService.getById(params.id))
    );
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {}
}
