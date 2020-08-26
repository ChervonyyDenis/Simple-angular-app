import {NgModule} from '@angular/core';
import {MaterialModule} from '@shared/modules/material.module';
import {CommonModule} from '@angular/common';
import {LogoComponent} from '@shared/components/logo/logo.component';

@NgModule({
  declarations: [LogoComponent],
  exports: [
    MaterialModule,
    CommonModule,
    LogoComponent
  ]
})

export class SharedModule {}
