import {Component, ElementRef,Directive, EventEmitter,Output,OnInit} from '@angular/core';
declare var $: any;
@Component({
  selector: 'home',
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit{
  constructor(private _elRef: ElementRef){};
  ngOnInit() {

    $("#datepicker").datepicker();

    $("#owl").owlCarousel({

      autoPlay: 3000, //Set AutoPlay to 3 seconds

      items: 4,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [979, 3]

    });
    $(".profile-drop").click(function () {
      $(".profile-menu").slideToggle("slow");
    });

    $(".mobile-drop").click(function () {
      $(".mobile-menu").slideToggle("slow");
    });

}

}
