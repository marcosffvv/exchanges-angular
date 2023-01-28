import { ServicesService } from './../../shared/services/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent implements OnInit{



  conversonSubscription: any;

  countryReceptor: string = '';

  constructor(private service: ServicesService){}

  ngOnInit() {
    this.recibeExchange('');
  }

  recibeExchange(text: string){
    this.conversonSubscription = this.service.getExchanges('').subscribe((res: any) => {
      console.log(res);
    })
  }
}


