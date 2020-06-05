import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditCardComponent} from './credit-card/credit-card.component';
import {LoginComponent } from './login/login.component';
import { PaymentModeComponent } from './payment-mode/payment-mode.component';
import { ProductComponent } from './product/product.component';
import { ReturnProjectComponent } from './return-project/return-project.component';
import { SingupComponent } from './singup/singup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { ViewProductComponent } from  './view-product/view-product.component';
import { AddProductComponent} from './add-product/add-product.component';
import { AdminLoginComponent} from './admin-login/admin-login.component';


const routes: Routes = [
 { path: '', redirectTo:'/login', pathMatch: 'full'},
 { path: 'login', component: LoginComponent},
 {path: 'signup', component: SingupComponent},
 {path: 'user', component: UserLoginComponent},
 {path: 'view', component: ViewProductComponent},
 {path: 'return', component: ReturnProjectComponent},
 {path: 'product', component: ProductComponent},
 {path: 'paymentMode', component: PaymentModeComponent},
 {path: 'creditcard', component: CreditCardComponent},
 {path: 'addProduct', component: AddProductComponent},
 {path: 'adminLogin', component: AdminLoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
