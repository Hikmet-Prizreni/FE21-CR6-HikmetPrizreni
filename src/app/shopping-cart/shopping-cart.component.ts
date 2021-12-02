import { Component, OnInit } from '@angular/core';
import { trips } from '../travels';
import { CartService } from '../cart.service';

@Component({
  selector: 'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
    trips = trips;
    bookings : any;
    summe : number = 0;
    constructor(private CS:CartService) {

    
    
    }

    addToCart(trip: any) {
      alert("Your Trip to " + trip.destination + " was sucsessfully booked!");
      this.CS.addToCart(trip);
    }

    ngOnInit(): void {
      this.bookings = this.CS.getItems();
      for (let val of this.bookings) {
        this.summe += val.price;
      }
      if (this.summe>200 && this.summe<500) {
        this.summe=this.summe*0.9;
      }
      else if (this.summe>500) {
        this.summe = this.summe*0.8;
      }
    }
   
  }
