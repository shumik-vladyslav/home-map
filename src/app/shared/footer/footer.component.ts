import {Component, ElementRef,Directive, EventEmitter,Output,OnInit} from '@angular/core';
declare var $: any;
@Component({
  selector: 'footer',
  styleUrls: ['./footer.component.css'],
  templateUrl: './footer.component.html'
})

export class FooterComponent implements OnInit{
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
