import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextComponentComponent } from './text-component/text-component.component';
import { ImagecomponentComponent } from './imagecomponent/imagecomponent.component';
import { EmpinfoComponent } from './empinfo/empinfo.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { EInfoComponent } from './e-info/e-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponentComponent,
    ImagecomponentComponent,
    EmpinfoComponent,
    FormComponentComponent,
    EInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
