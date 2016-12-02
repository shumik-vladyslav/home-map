import {Component} from '@angular/core';
import {TranslateService} from "ng2-translate";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'hy']);
    translate.setDefaultLang('en');
    translate.use('en');
  }
  changeLang(lang: string) {
    this.translate.use(lang);
  }
}
