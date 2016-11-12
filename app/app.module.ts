import { NgModule }            from '@angular/core';
import { BrowserModule  }      from '@angular/platform-browser';
import { AUTH_PROVIDERS }      from 'angular2-jwt';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent }        from './app.component';
import { HomeComponent }       from './home/home.component';
import { ListComponent }       from './list/list.component';

import { routing,
         appRoutingProviders } from './app.routes';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ListComponent
    ],
    providers:    [
        appRoutingProviders,
        AUTH_PROVIDERS
    ],
    imports:      [
        BrowserModule,
        routing,
        HttpModule,
        JsonpModule
    ],
    bootstrap:    [AppComponent],
})
export class AppModule {}
