import { Component, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-error-dialog',
  imports: [
    MatDialogModule,
    MatButtonModule
  ],
  templateUrl: './error-dialog.component.html',
  styleUrl: './error-dialog.component.scss'
})
export class ErrorDialogComponent {
  data = inject(MAT_DIALOG_DATA);
}
