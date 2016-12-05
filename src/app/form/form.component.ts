import {Component, OnInit, ElementRef} from '@angular/core';
declare var $: any;
@Component({
  selector: 'form',
  styleUrls: ['./form.component.sass'],
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {
  constructor(private _elRef: ElementRef){};
  ngOnInit() {
    $(".datepicker").datepicker();
    $(".profile-drop").click(function () {
      $(".profile-menu").slideToggle("slow");
    });

    $(".mobile-drop").click(function () {
      $(".mobile-menu").slideToggle("slow");
    });
  }
}
