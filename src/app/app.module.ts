import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS } from '@angular/material/dialog';
import { AnimaisComponent } from './animais/animais.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogComponent } from './core/dialog/dialog.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AlmaComponent } from './alma/alma.component';
import {ButtonModule} from 'primeng/button';
import {PickListModule} from 'primeng/picklist';
import { HttpClientModule } from '@angular/common/http';
import { AccordionComponent } from './accordion/accordion.component';
import { TableComponent } from './table/table.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AnimaisComponent,
    DialogComponent,
    AlmaComponent,
    AccordionComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    ButtonModule,
    MatFormFieldModule,
    MatToolbarModule,
    PickListModule,
    MatInputModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    NgxSpinnerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } }
  ],
  entryComponents: [DialogComponent, AlmaComponent],
  bootstrap: [AppComponent, AlmaComponent]
})
export class AppModule {
  constructor() { console.log('alma') }

}
