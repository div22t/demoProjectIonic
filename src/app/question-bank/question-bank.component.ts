import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Quest2finalComponent } from '../quest2final/quest2final.component';
import { IonNav, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-question-bank',
  templateUrl: './question-bank.component.html',
  styleUrls: ['./question-bank.component.css']
})
export class QuestionBankComponent implements OnInit {

  constructor(
    private _fb: FormBuilder,
    public navParams : NavParams,
    private nav: IonNav
  ) { }
  data:any=[{ques:"In amoeba, food is digested in the?",op:["(a) Food vacuole","(b) Mitochondria","(c) Pseudopodia","(d) Chloroplast"]},
    {ques:"In which of the following groups of organisms are food materials broken down outside the body and absorbed?",op:["(a) Mushroom, green plants, amoeba",

      "(b) Yeast, mushroom, bread mould",
      
     "(c) Paramecium, amoeba, cuscuta",
      
      "(d) Cuscuta, lice, tapeworm"]},
    {ques:"The contraction and expansion movement of the walls of the food pipe is called:?",op:["(a) Translocation",

      "(b) Transpiration",
      
      "(c) Peristaltic movement",
      
      "(d) Digestion"]},
    {ques:"What are the products obtained by anaerobic respiration in plants?",op:["(a) Lactic acid + energy",

      "(b) Carbon dioxide + water + energy",
       
       "(c) Ethanol + carbon dioxide + energy",
       
       "(d) Pyruvate"]}
    ];
  component:any;
  form = this._fb.group({
    "0q": false,
    "1q": false,
    "2q": false,
    "3q": false,
});
store:any;
index:any;
  ngOnInit(): void {
    console.log(this.navParams.get('input1'))
this.index=this.navParams.get('input1') || 1
this.component=[{ component: QuestionBankComponent, componentProps: { input1: this.index+1, input2: "value" }}]
  this.store=JSON.parse(localStorage.getItem("storeddata")||'')
  if(this.store[this.index].touched){
    this.form.setValue(this.store[this.index].data)
  }else{
    this.store[this.index].touched=true;
    this.store[this.index].data=this.form.value;
  }
  this.store['page'].touched=true;
  this.store['page'].data=this.index
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
  this.store[this.index].touched=true;
  this.store[this.index].data=this.form.value;
  this.store['page'].touched=true;
  this.store['page'].data=this.index;
  localStorage.setItem("storeddata",JSON.stringify(this.store))
}
next(){
  let a=Number(this.navParams.get('input1'))+1
  console.log(a)
  console.log(a)
  this.nav.insertPages(a,this.component)
}
}
