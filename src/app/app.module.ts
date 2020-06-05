import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlanetViewComponent } from './planet-view/planet-view.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { ProductComponent } from './product/product.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ReturnProjectComponent } from './return-project/return-project.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { PaymentModeComponent } from './payment-mode/payment-mode.component';
import { CreditCardComponent } from './credit-card/credit-card.component';


@NgModule({
  declarations: [
    AppComponent,
    PlanetViewComponent,
    LoginComponent,
    SingupComponent,
    ProductComponent,
    UserLoginComponent,
    AdminLoginComponent,
    AddProductComponent,
    ReturnProjectComponent,
    ViewProductComponent,
    PaymentModeComponent,
    CreditCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
