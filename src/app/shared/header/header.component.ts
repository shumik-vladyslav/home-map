import {Component, ElementRef,Directive, EventEmitter,Output,OnInit} from '@angular/core';
declare var $: any;
@Component({
  selector: 'header',
  styleUrls: ['./header.component.sass'],
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit{
  constructor(private _elRef: ElementRef){};
  ngOnInit() {

    $(".profile-drop2").click(function () {
      $(".profile-menu2").slideToggle("slow");
    });

    $(".mobile-drop2").click(function () {
      $(".mobile-menu2").slideToggle("slow");
    });

  }

}
