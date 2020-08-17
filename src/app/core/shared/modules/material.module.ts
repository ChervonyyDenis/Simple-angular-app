import {NgModule} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  imports: [],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ]
})

export class MaterialModule {}
