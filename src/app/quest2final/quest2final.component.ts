import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Quest3Component } from '../quest3/quest3.component';

@Component({
  selector: 'app-quest2final',
  templateUrl: './quest2final.component.html',
  styleUrls: ['./quest2final.component.css']
})
export class Quest2finalComponent implements OnInit {
   
  constructor(
    private _fb: FormBuilder
  ) { }
  component=Quest3Component
  data:any=["(a) Mushroom, green plants, amoeba",

    "(b) Yeast, mushroom, bread mould",
    
   "(c) Paramecium, amoeba, cuscuta",
    
    "(d) Cuscuta, lice, tapeworm"];
  form = this._fb.group({
    "0q": false,
    "1q": false,
    "2q": false,
    "3q": false,
});
store:any;
ngOnInit(): void {

  this.store=JSON.parse(localStorage.getItem("storeddata")||'')
  console.log(this.store['2'].touched)
  if(this.store['2'].touched){
    this.form.setValue(this.store['2'].data)
  }else{
    this.store['2'].touched=true;
    this.store['2'].data=this.form.value;
  }
  this.store['page'].touched=true;
  this.store['page'].data=2;
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
    console.log("aaj")
    this.store=JSON.parse(localStorage.getItem("storeddata")||'')
    this.store['2'].touched=true;
    this.store['2'].data=this.form.value;
    this.store['page'].touched=true;
    this.store['page'].data=2;
    console.log(this.form.value)
    localStorage.setItem("storeddata",JSON.stringify(this.store))
  }

}
