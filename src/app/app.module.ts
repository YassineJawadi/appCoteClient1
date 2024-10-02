import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FootersComponent } from './components/footers/footers.component';
import { HomeComponent } from './components/home/home.component';
import { ListcategoriesComponent } from './components/listcategories/listcategories.component';
import { ContainsPipe } from './pipes/contains.pipe';
import { HighlightDirective } from './highlights/highlight.directive';
import {ProductModule} from "./features/product/product.module";
import {ContactModule} from "./features/contact/contact.module";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent,
    FootersComponent,
    HomeComponent,
    ListcategoriesComponent,
    ContainsPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ProductModule,
    ContactModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
