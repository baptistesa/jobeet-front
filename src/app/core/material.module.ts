import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import {
    MatButtonModule, MatNativeDateModule, MatIconModule, MatSidenavModule, MatListModule, MatToolbarModule, MatMenuModule, MatCardModule, MatGridListModule, MatDividerModule, MatChipsModule, MatTableModule, MatPaginatorModule, MatStepperModule, MatDialogModule, MatDatepickerModule, MatSnackBarModule, MatExpansionModule, MatProgressSpinnerModule, MatTabsModule, MatCheckboxModule
} from '@angular/material';
import { ScrollingModule } from '@angular/cdk/scrolling';

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
        MatTabsModule,
        MatCheckboxModule,
        ScrollingModule
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
        MatTabsModule,
        MatCheckboxModule,
        ScrollingModule
    ],
})
export class CustomMaterialModule { }