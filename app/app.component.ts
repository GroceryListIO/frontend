import { Component }    from '@angular/core';
import { Auth }         from './auth/auth.service';

declare var componentHandler: any;

@Component({
    selector: 'my-app',
    providers: [ Auth ],
    templateUrl: 'app/app.template.html'
})

export class AppComponent {
  constructor(private auth: Auth) {}

  ngAfterViewInit() {
    // Ensure material-design-lite effects are applied
    componentHandler.upgradeDom();
  }
};
