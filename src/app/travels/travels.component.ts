import { Component, OnInit } from '@angular/core';
import { trips } from '../travels';
import { CartService } from '../cart.service';

@Component({
  selector: 'travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  trips = trips;
  trip: any;
  constructor(private CS: CartService) { }
  addToCart(trip: any) {
    this.CS.addToCart(trip);
    alert("Your Trip to " + trip.destination + " was sucsessfully booked!");
  }
  ngOnInit(): void {
  }

}
