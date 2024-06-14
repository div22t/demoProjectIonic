import { Component, OnInit, ViewChild } from '@angular/core';
import { Ques1Component } from '../ques1/ques1.component';
import { FileService } from '../file.service';
import { Ques2Component } from '../ques2/ques2.component';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-ques',
  templateUrl: './ques.component.html',
  styleUrls: ['./ques.component.css']
})
export class QuesComponent implements OnInit {
  constructor(private fileService:FileService,
    public navCtrl: NavController
  ) { }
  component1:any=Ques1Component;
  ngOnInit(): void {
    if(!localStorage.getItem("storeddata")){
      localStorage.setItem("storeddata",JSON.stringify({
        1:{touched:false,data:{}},
        2:{touched:false,data:{}},
        3:{touched:false,data:{}},
        4:{touched:false,data:{}},
        page:{touched:false,data:0}
      }))
    }
  
   
  }
 

}
