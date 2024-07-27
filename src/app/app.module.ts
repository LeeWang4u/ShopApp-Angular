import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { DOCUMENT } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

import { provideHttpClient, withFetch } from '@angular/common/http';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    OrderConfirmComponent,
    OrderComponent,
    LoginComponent,
    DetailProductComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: 
  [
    //HomeComponent,
    //OrderComponent
    // RegisterComponent  
    // OrderConfirmComponent
    //DetailProductComponent
    LoginComponent
  ]
})
export class AppModule { }
