import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gastrood-web';
    supportedLanguages = ['en-en', 'es-es', 'ca-es'];

    constructor(
        translate: TranslateService
    ) {
        translate.addLangs(this.supportedLanguages);
        translate.setDefaultLang('es-es');
    }

}
