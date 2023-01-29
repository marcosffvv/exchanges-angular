import { ServicesService } from './../../shared/services/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.scss']
})
export class ConversorComponent implements OnInit{

  // oneExchanges: any;
  //conversorSubscription: any;
  multiplier: number = 1;
  allExchanges: any;
  result: any;
  country: string = 'EUR';
  

  constructor(private service: ServicesService){}

  ngOnInit() {
    this.recibeExchange(this.country);
  }

  recibeExchange(param: string = 'EUR'){
    this.service.getExchanges(param).subscribe((data: any) => {
      this.allExchanges! = (data);
    })
  }

  multiplierValue(amount: any){
    this.result =this.multiplier * amount;
    return this.result.toFixed(2);
  }

}

  // recibeExchange(){
  //   this.conversonSubscription = this.service.getExchanges().subscribe((res: any) => {
  //       // console.log(res);
  //       // this.oneExchanges = res.rates.USD;
  //       this.allExchanges = (res.rates);
  //   })
  // }
