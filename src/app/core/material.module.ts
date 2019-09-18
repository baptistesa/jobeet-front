import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatMenuModule, MatCardModule, MatGridListModule, MatDividerModule, MatChipsModule, MatTableModule, MatPaginatorModule, MatStepperModule, MatDialogModule, MatDatepickerModule, MatSnackBarModule, MatExpansionModule, MatProgressSpinnerModule, MatTabsModule
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
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatTabsModule
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
        MatExpansionModule,
        MatProgressSpinnerModule,
        MatTabsModule
    ],
})
export class CustomMaterialModule { }