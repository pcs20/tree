import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  FormGroup: FormGroup;
  TotalRow: number;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    console.log('alex')
    this.FormGroup = this._fb.group({
      itemRows: this._fb.array([this.initItemRow()])
    });
  }

  initItemRow() {
    return this._fb.group({
      Name: [''],
      RollNo: [''],
      Class: [''],
      MobileNo: [''],
      alma: ['']
    });
  }

  addNewRow() {
    let amar = this.FormGroup.controls.itemRows.controls;
    if(amar[this.FormGroup.controls.itemRows.controls.length] === undefined &&
      amar[this.FormGroup.controls.itemRows.controls.length - 1].value['Name'] != ''){
    const control = this.FormGroup.controls['itemRows'] as FormArray;
    control.push(this.initItemRow());
    }
  }

  deleteRow(index: number) {
    const control = this.FormGroup.controls['itemRows'] as FormArray;
    if(control.value[index]['Name'] != ''){
    if(control != null){
      this.TotalRow = control.value.length;
    }
    if(this.TotalRow > 1){
      control.removeAt(index)
    }
    // else {
    //   alert('não pode ficar vazio, tá ligado?')
    //   return false;
    // }
  } else {
    return false;
  }
  }

}
