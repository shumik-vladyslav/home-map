import {Component, OnInit, ElementRef} from '@angular/core';

import {Router, ActivatedRoute} from "@angular/router";
declare var $: any;
@Component({
  selector: 'detail',
  styleUrls: ['./detail.component.sass'],
  templateUrl: './detail.component.html',

})
export class DetailComponent implements OnInit {
  items = [{
    id: 1,
    cost: 1111,
    label: "Entire home/ apt *2 beds *4 guests",
    src: "assets/item1.jpg",
    owner: "assets/owner.jpg",
    like: false,
    position: {lat: 46.83540294257893, lng: -71.24165268144532},
    stars: [true,true,true,true,true]

  },{
    id: 2,
    cost: 5000,
    label: "Entire home",
    src: "assets/item2.jpg",
    owner: "assets/owner.jpg",
    like: false,
    position: {lat: 46.73540294257893, lng: -71.54165268144532},
    stars: [true,true,true,true,true]

  },{
    id: 3,
    cost: 10000,
    label: "Entire home/ apt *1 beds *1 guests",
    src: "assets/item3.jpg",
    owner: "assets/owner.jpg",
    like: true,
    position: {lat: 46.73540294257893, lng: -71.94165268144532},
    stars: [true,true,true,false,false]

  },{
    id: 4,
    cost: 2000,
    label: "Entire home/ apt *5 beds *4 guests",
    src: "assets/item4.jpg",
    owner: "assets/owner.jpg",
    like: true,
    position: {lat: 46.53540294257893, lng: -71.24165268144532},
    stars: [true,true,true,true,false]
  }];

  item;

  constructor(private _elRef: ElementRef, private route: ActivatedRoute){
    this.route.params.subscribe(matrixParams =>
      this.items.forEach((item) =>{
        if(item.id === +matrixParams["id"])
          this.item = item;
      })
    );
  };
  ngOnInit() {
    $( ".datepick" ).datepicker();
    setInterval(()=>{
      $( ".datepick" ).datepicker();
    },1000);

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
