import {Component, OnInit, ElementRef} from '@angular/core';
import {TranslateService} from "ng2-translate";
declare var $: any;
@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
  showLoad = true;
  constructor(private _elRef: ElementRef,private translate: TranslateService) {
    translate.addLangs(['en', 'hy']);
    translate.setDefaultLang('en');
    translate.use('en');
    setTimeout(() => this.showLoad = false, 2000);

  }

  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
