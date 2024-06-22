import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowser } from '@angular/platform-browser';

import { HomeComponent } from './home/home.component';
import { AppModule } from './app.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OrderConfirmComponent } from './order-confirm/order-confirm.component';
import { OrderComponent } from './order/order.component';
import { LoginComponent } from './login/login.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    AppModule,
    ServerModule
  ],
  bootstrap: [OrderConfirmComponent],
})
export class AppServerModule {
  ngDoBootstrap() {
    platformBrowser().bootstrapModule(AppServerModule);
  }
}
