import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxAgoraModule } from 'ngx-agora'
import { environment } from 'src/environments/environment';
import { AngularAgoraRtcModule, AgoraConfig } from 'angular-agora-rtc';


const agoraConfig: AgoraConfig = {
  AppID: '5d3461fa737345c49eefa3fad65126f3',
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  //  NgxAgoraModule.forRoot({ AppID: environment.agora.appId })
  AngularAgoraRtcModule.forRoot(agoraConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
