import { NgModule } from '@angular/core';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { FooterComp } from '../../components/footer-comp/footer-comp.component';
import { HeaderComp } from '../../components/header-comp/header-comp.component';
import { AppRoutingModule } from '../../app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TranslatePipe, FooterComp, HeaderComp],
  imports: [AppRoutingModule, CommonModule],
  exports: [TranslatePipe, FooterComp, HeaderComp],
  providers: [],
})
export class SharedModule {}
