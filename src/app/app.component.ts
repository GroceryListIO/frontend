import { Component } from '@angular/core';
import { AuthService } from './_services/auth/auth.service';
import { FooterComponent } from './_components/footer/footer.component';
import { SidebarListsComponent } from './_components/sidebar-lists/sidebar-lists.component';
import { Router, NavigationEnd } from '@angular/router';
import { isDevMode } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GroceryList.io';

  constructor(public router: Router, public authService: AuthService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && !isDevMode()) {
        ga('set', 'page', event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

}
