import { Component, OnInit } from '@angular/core';
import { LeadsService } from 'src/app/services/leads.service';
import { Leads } from 'src/app/interfaces/leads';

@Component({
  selector: 'app-leads',
  templateUrl: './leads.component.html',
  styleUrls: ['./leads.component.scss'],
})
export class LeadsComponent implements OnInit {
  leads: Leads[] = [];

  constructor(private leadsService: LeadsService) {
    this.leads = leadsService.getAllLeads();
  }

  ngOnInit(): void {}
}
