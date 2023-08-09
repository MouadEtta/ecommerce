import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

//primeng components
import { SlideMenuModule } from 'primeng/slidemenu';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductService } from 'src/service/productservice';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlideMenuModule,
    ButtonModule,
    BrowserAnimationsModule,
    MenubarModule,
    InputTextModule,
    OverlayPanelModule,
    DialogModule,
    ImageModule,
    CarouselModule ,
    TagModule,
    CardModule,
    FlexLayoutModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
