import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule  }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { QuesComponent } from './ques/ques.component';
import { Ques1Component } from './ques1/ques1.component';
import { Ques2Component } from './ques2/ques2.component';
import { Quest2finalComponent } from './quest2final/quest2final.component';
import { Quest3Component } from './quest3/quest3.component';
import { Quest4Component } from './quest4/quest4.component';
import { QuestionBankComponent } from './question-bank/question-bank.component';

@NgModule({
  declarations: [
    AppComponent,
    QuesComponent,
    Ques1Component,
    Ques2Component,
    Quest2finalComponent,
    Quest3Component,
    Quest4Component,
    QuestionBankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
