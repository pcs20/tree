import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../core/dialog/dialog.component';
import { Router, Route, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.css']
})
export class AnimaisComponent implements OnInit {

  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute) {
    const alma = route.snapshot.data['alma']
    console.log(alma)
  }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '570px',
      data: {name: 'Leão', animal: 'Mamífero',
      text: 'Sua procuração está revogada. Deseja ativá-la?'},
      panelClass: 'custom-dialog-container'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    });
  }

  back(){
    this.router.navigateByUrl('/')
  }

}
