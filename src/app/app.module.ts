import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

//import {MaterialModule} from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';

import 'hammerjs';
import { GoogleAnalyticsEventsService } from './_services/ga/google-analytics-events.service';

import { AuthService } from './_services/auth/auth.service';
import { ListsService } from './_services/lists/lists.service';
import { ItemsService } from './_services/items/items.service';
import { ConfirmDialogService } from './_services/confirm-dialog/confirm-dialog.service';
import { ItemQuestionDialogService } from './_services/item-question-dialog/item-question-dialog.service';
import { JsonPipe } from './_services/json.pipe';

import { AppComponent } from './app.component';
import { LoginComponent } from './_components/login/login.component';
import { RegisterComponent } from './_components/register/register.component';
import { ListsComponent } from './_components/lists/lists.component';
import { FooterComponent } from './_components/footer/footer.component';
import { ItemsComponent, EditItemDialog } from './_components/items/items.component';
import { SidebarListsComponent } from './_components/sidebar-lists/sidebar-lists.component';
import { ShoppinglistComponent } from './_components/shoppinglist/shoppinglist.component';
import { GrocerylistComponent } from './_components/grocerylist/grocerylist.component';
import { ConfirmDialogComponent } from './_components/confirm-dialog/confirm-dialog.component';
import { ItemQuestionDialogComponent } from './_components/item-question-dialog/item-question-dialog.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'lists', pathMatch: 'full' },
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
    GrocerylistComponent,
    EditItemDialog,
    ConfirmDialogComponent,
    ItemQuestionDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatGridListModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatStepperModule,
  ],
  entryComponents: [ EditItemDialog, ConfirmDialogComponent, ItemQuestionDialogComponent ],
  providers: [AuthService, ListsService, ItemsService, ConfirmDialogService, ItemQuestionDialogService, GoogleAnalyticsEventsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
