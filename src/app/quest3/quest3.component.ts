import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Quest4Component } from '../quest4/quest4.component';

@Component({
  selector: 'app-quest3',
  templateUrl: './quest3.component.html',
  styleUrls: ['./quest3.component.css']
})
export class Quest3Component implements OnInit {

  constructor(
    private _fb: FormBuilder
  ) { }
  component=Quest4Component
  data:any=["(a) Translocation",

    "(b) Transpiration",
    
    "(c) Peristaltic movement",
    
    "(d) Digestion"];
  form = this._fb.group({
    "0q": false,
    "1q": false,
    "2q": false,
    "3q": false,
});
store:any;
ngOnInit(): void {

  this.store=JSON.parse(localStorage.getItem("storeddata")||'')
  if(this.store['3'].touched){
    this.form.setValue(this.store['3'].data)
  }else{
    this.store['3'].touched=true;
    this.store['3'].data=this.form.value;
  }
  this.store['page'].touched=true;
  this.store['page'].data=3;
  localStorage.setItem("storeddata",JSON.stringify(this.store))

}
checkBoxAllLongiClick(e:any,i:any){
  console.log(e)
this.form.setValue(
{ "0q": false,
  "1q": false,
  "2q": false,
  "3q": false,
 })
  this.form.get(i+'q')?.patchValue(e.detail.checked);
  this.storeData(); 
  }
  storeData(){
    console.log('aayayayay')
    this.store=JSON.parse(localStorage.getItem("storeddata")||'')
    this.store['3'].touched=true;
    this.store['3'].data=this.form.value;
    this.store['page'].touched=true;
    this.store['page'].data=3;
    localStorage.setItem("storeddata",JSON.stringify(this.store))
  }

}
