import { Component, OnInit } from '@angular/core';
import { Ques2Component } from '../ques2/ques2.component';
import { IonNav, ModalController } from '@ionic/angular';
import { Quest2finalComponent } from '../quest2final/quest2final.component';
import { Quest3Component } from '../quest3/quest3.component';
import { Quest4Component } from '../quest4/quest4.component';
import { QuestionBankComponent } from '../question-bank/question-bank.component';

@Component({
  selector: 'app-ques1',
  templateUrl: './ques1.component.html',
  styleUrls: ['./ques1.component.css']
})
export class Ques1Component implements OnInit {

  constructor(
    private modalController: ModalController, private nav: IonNav
  ) { }
  level = 0;
  nextPage = QuestionBankComponent;
  component=[ { component: QuestionBankComponent, componentProps: { input1: 1, input2: "value" } },
    { component: QuestionBankComponent, componentProps: { input1: 2, input2: "value" } },
    { component: QuestionBankComponent, componentProps: { input1: 3, input2: "value" } },
    { component: QuestionBankComponent, componentProps: { input1: 4, input2: "value" } }
  ]
  component1={ component: QuestionBankComponent, componentProps: { input1: "1", input2: "value" }}
  store:any;
  ngOnInit(): void {
    console.log(this.nav)
    this.store=JSON.parse(localStorage.getItem("storeddata")||'')
    if(this.store['page'].touched){
      this.nav.insertPages(1,this.component.slice(0,this.store['page'].data))
    }
    console.log(this.nav)
  }
  goForward() {
    this.nav.push(this.nextPage, { level: this.level + 1 });
  }

  goRoot() {
    this.nav.popToRoot();
  }

  close() {
    this.modalController.dismiss();
  }
  clear(){
    this.nav.insertPages(1,this.component.slice(0,1))
    localStorage.setItem("storeddata",JSON.stringify({
      1:{touched:false,data:{}},
      2:{touched:false,data:{}},
      3:{touched:false,data:{}},
      4:{touched:false,data:{}},
      page:{touched:true,data:1}
    }))
  }

}
