import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { DoctorsComponent } from './catalogos/doctors.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environment/environments';
// import { AngularFireModule } from 'angularfire2';
//  import { AngularFireModule } from '@angular/fire/compat';
//  import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
//  import { AngularFirestore } from '@angular/fire/compat/firestore';
// import { AngularFirestore } from '@angular/fire/firestore';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DoctorsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()),
    
    // AngularFireDatabaseModule
  ],
  //  providers: [AngularFirestore],
  bootstrap: [MenuComponent]
})
export class AppModule { }
