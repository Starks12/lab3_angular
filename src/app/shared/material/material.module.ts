import {NgModule} from '@angular/core';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatDatepickerModule} from "@angular/material/datepicker";

let components  = [
  MatButtonModule,
  MatListModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatCheckboxModule,
  // MatAutocompleteModule,
  // MatSidenavModule,
  // MatExpansionModule,
  // MatDividerModule,
  MatButtonToggleModule,
  // MatCardModule,
  // MatDialogModule,
  // MatPaginatorModule,
  // MatMenuModule,
  // MatGridListModule,
  // MatRadioModule,
  // NgxMatSelectSearchModule,
  // MatSortModule,
  MatDatepickerModule,
  // MatTooltipModule,
  // DragDropModule,
  // MatSlideToggleModule,
  // MatProgressBarModule,
  // MatNativeDateModule,
  // MatRippleModule,
  // MatProgressSpinnerModule,
  // ClipboardModule,
  // MatChipsModule,
  // ScrollingModule,
  // MatBadgeModule,
  // MatToolbarModule,
  // MatMomentDateModule,
  // MatBottomSheetModule
];

@NgModule({
  imports: components,
  exports: components
})
export class MaterialModule { }
