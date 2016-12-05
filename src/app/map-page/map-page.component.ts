import {Component, OnInit, ElementRef, Pipe} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CustomValidators from '../forms/CustomValidators';

import {Router, ActivatedRoute} from "@angular/router";
declare var $: any;
declare var google: any;
declare var noUiSlider: any;
@Component({
  selector: 'map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.sass']
})
export class MapPageComponent implements OnInit {
  constructor(private _elRef: ElementRef, private router: Router){};

  map;

  showLoad = true;

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

  min = 0;

  max = 10000;

  click(item){
    console.log(item)
    this.router.navigate(['/detail/', {id: item.id}]);
  }

  ngOnInit() {


    $(".profile-drop").click(function () {
      $(".profile-menu").slideToggle("slow");
    });

    $(".mobile-drop").click(function () {
      $(".mobile-menu").slideToggle("slow");
    });

    var slider = document.getElementById('slider');

    setTimeout(() => this.showLoad = false, 2000);



    noUiSlider.create(slider, {
      start: [this.min, this.max],
      connect: true,
      range: {
        'min': this.min,
        'max': this.max
      }
    });

    (slider as any).noUiSlider.on('set', () => {
      console.log(document.getElementById('l-set'), (slider as any).noUiSlider.get(), 'tShow', 450);
      let arr = (slider as any).noUiSlider.get();
      this.min = arr[0];
      this.max = arr[1];
    });

  //

    let def = {
      center: {lat: 46.73540294257893, lng: -71.24165268144532},
      zoom: 8
    };
    setTimeout( () =>{
      this.map = new google.maps.Map(document.getElementById('googleMap'), def);

     this.items.forEach((item) =>{
       let marker = new google.maps.Marker({
         map: this.map,
         draggable: true,
         animation: google.maps.Animation.DROP,
         position: item.position
       });

       var contentString = `<div class="photo col-lg-6" style="width: 350px!important;">
                      <a href='#/detail/${item.id}' src="${item.src}" alt="" class="img-responsive" style="background-image: url('${item.src}');max-width: 100%;height: 210px;!important;"></a>
                      <div class="cost" style="background-color: black;width: 30%;position: absolute;top: 62%;padding: 18px 5px;font-size: 18px;color: white;opacity: 0.8;font-weight: bold"><span>${item.cost}/night</span></div>
                      <div class="info"><span>${item.label}</span></div>
                      <span class="like">
                        <i *ngIf="like" class="fa fa-heart" aria-hidden="true"></i>
                        <i *ngIf="!like" class="fa fa-heart" aria-hidden="true"></i>
                      </span>
                    </div>`;

       var infowindow = new google.maps.InfoWindow({
         content: contentString
       });

       marker.addListener('click', function() {
         infowindow.open(this.map, marker);
       });
     })

    }, 3000);



  }
}


// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'MinPipe'
})
export class MinPipe {

  // Transform is the new "return function(value, args)" in Angular 1.x
  transform(value, args?) {
    return value.filter(person => {
      return person.cost >= +args;
    });
  }

}


// Tell Angular2 we're creating a Pipe with TypeScript decorators
@Pipe({
  name: 'MaxPipe'
})
export class MaxPipe {

  // Transform is the new "return function(value, args)" in Angular 1.x
  transform(value, args?) {
    return value.filter(person => {
      return person.cost <= +args;
    });
  }

}
