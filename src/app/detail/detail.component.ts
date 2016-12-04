import {Component, OnInit, ElementRef} from '@angular/core';
declare var $: any;
@Component({
  selector: 'detail',
  styleUrls: ['./detail.component.sass'],
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  constructor(private _elRef: ElementRef){};
  ngOnInit() {

    $( ".datepick" ).datepicker();
    $(".profile-drop").click(function () {
      $(".profile-menu").slideToggle("slow");
    });

    $(".mobile-drop").click(function () {
      $(".mobile-menu").slideToggle("slow");
    });
    function sticky_relocate() {
      var window_top = $(window).scrollTop();
      var div_top = $('.anchor').offset().top;
      if (window_top > div_top) {
        $('.form-fixed').addClass('fix-form');
      } else {
        $('.form-fixed').removeClass('fix-form');
        $('.anchor').height(0);
      }
    }
    $(function() {
      $(window).scroll(sticky_relocate);
      sticky_relocate();
    });

  }
}
