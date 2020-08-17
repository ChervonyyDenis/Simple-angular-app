import {NgModule} from '@angular/core';
import {MaterialModule} from '@shared/modules/material.module';
import {LazyImageDirective} from '@shared/directives/lazy-image.directive';

@NgModule({
  declarations: [LazyImageDirective],
  exports: [
    MaterialModule,
    LazyImageDirective
  ]
})

export class SharedModule {}
