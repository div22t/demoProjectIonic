import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-quest4',
  templateUrl: './quest4.component.html',
  styleUrls: ['./quest4.component.css']
})
export class Quest4Component implements OnInit {

  constructor(
    private _fb: FormBuilder
  ) { }
  data:any=["(a) Lactic acid + energy",

   "(b) Carbon dioxide + water + energy",
    
    "(c) Ethanol + carbon dioxide + energy",
    
    "(d) Pyruvate"];
  form = this._fb.group({
    "0q": false,
    "1q": false,
    "2q": false,
    "3q": false,
});
store:any;
ngOnInit(): void {

  this.store=JSON.parse(localStorage.getItem("storeddata")||'')
  if(this.store['4'].touched){
    this.form.setValue(this.store['4'].data)
  }else{
    this.store['4'].touched=true;
    this.store['4'].data=this.form.value;
  }
  this.store['page'].touched=true;
    this.store['page'].data=4;
    localStorage.setItem("storeddata",JSON.stringify(this.store))

}
  checkBoxAllLongiClick(e:any,i:any){
console.log(e,i)
console.log(this.form)
this.form.setValue(
{ "0q": false,
  "1q": false,
  "2q": false,
  "3q": false,
 })
  this.form.get(i+'q')?.patchValue(e.detail.checked);
  this.storeData()
  }
  storeData(){
    this.store=JSON.parse(localStorage.getItem("storeddata")||'')
    this.store['4'].touched=true;
    this.store['4'].data=this.form.value;
    this.store['page'].touched=true;
    this.store['page'].data=4;
    localStorage.setItem("storeddata",JSON.stringify(this.store))
  }
}
