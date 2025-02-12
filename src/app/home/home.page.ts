import { Component, ViewChild } from "@angular/core";
import { IonDatetime } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
  standalone: false
})
export class HomePage {
  // Variable to hold selected date
  selectedDate: string = '';
  minDate: string = '';

  constructor() {}
  
  ngAfterViewInit() {
    this.minDate = new Date().toISOString().split('T')[0];
  }

  // Function that gets called when the date changes
  onDateChange(event: any) {
    // Log the selected date to the console
    console.log('Selected Date:', event.detail.value);
  }



}
