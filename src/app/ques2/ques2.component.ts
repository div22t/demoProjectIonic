import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Quest2finalComponent } from '../quest2final/quest2final.component';
import { NavParams } from '@ionic/angular';

@Component({
  selector: 'app-ques2',
  templateUrl: './ques2.component.html',
  styleUrls: ['./ques2.component.css']
})
export class Ques2Component implements OnInit {
  
  constructor(
    private _fb: FormBuilder,
    public navParams : NavParams
  ) { }
  component=Quest2finalComponent
  data:any=["(a) Food vacuole","(b) Mitochondria","(c) Pseudopodia","(d) Chloroplast"];
  form = this._fb.group({
    "0q": false,
    "1q": false,
    "2q": false,
    "3q": false,
});
store:any;
  ngOnInit(): void {
console.log(this.navParams)
    this.store=JSON.parse(localStorage.getItem("storeddata")||'')
    if(this.store['1'].touched){
      this.form.setValue(this.store['1'].data)
    }else{
      this.store['1'].touched=true;
      this.store['1'].data=this.form.value;
    }
    this.store['page'].touched=true;
    this.store['page'].data=1
    localStorage.setItem("storeddata",JSON.stringify(this.store))
  }
  checkBoxAllLongiClick(e:any,i:any){
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
    this.store['1'].touched=true;
    this.store['1'].data=this.form.value;
    this.store['page'].touched=true;
    this.store['page'].data=1;
    localStorage.setItem("storeddata",JSON.stringify(this.store))
  }

}
