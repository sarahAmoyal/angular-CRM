import { Injectable } from '@angular/core';
import { Leads } from '../interfaces/leads';

@Injectable({
  providedIn: 'root',
})
export class LeadsService {
  private _leads: Leads[] = [
    {
      img: 'assets/man1.jpg',
      firstName: 'mosh',
      lastName: 'cohen',
      phone: '0508769543',
      email: 'mosh@gmail.com',
      contactMethod: 'email',
      company: 'GoGo',
      service: 'design',
    },
    {
      img: 'assets/man2.jpg',
      firstName: 'don',
      lastName: 'levi',
      phone: '0508769589',
      email: 'don@gmail.com',
      contactMethod: 'phone',
      company: 'YoYo',
      service: 'management',
    },
    {
      img: 'assets/woman1.jpg',
      firstName: 'rona',
      lastName: 'lily',
      phone: '0508769777',
      email: 'rona@gmail.com',
      contactMethod: 'email',
      company: 'GoGo',
      service: 'management',
    },
    {
      img: 'assets/spongebobjpg.jpg',
      firstName: 'spongeBob',
      lastName: 'squarePants',
      phone: '050908765',
      email: 'bobi@gmail.com',
      contactMethod: 'email',
      company: 'The Krusty Krab',
      service: 'chef',
    },
  ];

  getAllLeads() {
    return this._leads;
  }
  constructor() {}
}
