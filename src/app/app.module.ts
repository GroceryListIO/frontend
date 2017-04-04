import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import {MaterialModule} from '@angular/material';
import 'hammerjs';

import { AuthService } from './_services/auth/auth.service';
import { ListsService } from './_services/lists/lists.service';
import { ItemsService } from './_services/items/items.service';
import { JsonPipe } from './_services/json.pipe';

import { AppComponent } from './app.component';
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { ListsComponent } from './_components/lists/lists.component';
import { FooterComponent } from './_components/footer/footer.component';
import { ItemsComponent } from './_components/items/items.component';
import { SidebarListsComponent } from './_components/sidebar-lists/sidebar-lists.component';
import { ShoppinglistComponent } from './_components/shoppinglist/shoppinglist.component';
import { GrocerylistComponent } from './_components/grocerylist/grocerylist.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'lists', component: ListsComponent },
  { path: 'lists/:listID', component: GrocerylistComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ListsComponent,
    JsonPipe,
    FooterComponent,
    ItemsComponent,
    SidebarListsComponent,
    ShoppinglistComponent,
    GrocerylistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MaterialModule
  ],
  providers: [AuthService, ListsService, ItemsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
