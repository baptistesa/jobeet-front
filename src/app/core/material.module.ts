import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatMenuModule, MatCardModule, MatGridListModule, MatDividerModule, MatChipsModule, MatTableModule, MatPaginatorModule, MatStepperModule, MatDialogModule, MatDatepickerModule, MatSnackBarModule, MatExpansionModule
} from '@angular/material';

@NgModule({
    imports: [CommonModule,
        MatButtonModule,
        MatToolbarModule,
        MatNativeDateModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatCardModule,
        MatGridListModule,
        MatDividerModule,
        MatChipsModule,
        MatTableModule,
        MatPaginatorModule,
        MatStepperModule,
        MatDialogModule,
        MatDatepickerModule,
        MatSnackBarModule,
        MatExpansionModule
    ],
    exports: [
        CommonModule,
        MatButtonModule,
        MatToolbarModule,
        MatNativeDateModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatCardModule,
        MatGridListModule,
        MatDividerModule,
        MatChipsModule,
        MatTableModule,
        MatPaginatorModule,
        MatStepperModule,
        MatDialogModule,
        MatDatepickerModule,
        MatSnackBarModule,
        MatExpansionModule
    ],
})
export class CustomMaterialModule { }