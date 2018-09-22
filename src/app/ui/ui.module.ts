import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import {routing} from '../app-routing.module';
import {
  MatIconModule,
  MatBadgeModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule, routing, RouterModule,  MatIconModule, MatBadgeModule
  ],
  declarations: [LayoutComponent, HeaderComponent, FooterComponent],
  exports: [LayoutComponent]
})
export class UiModule { }
