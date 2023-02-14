import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Doctor } from '../models/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class MedicalService {

  constructor(private firestore: AngularFirestore) { }

  getDoctors() {
    return this.firestore.collection('doctors').snapshotChanges();
}
// Store Doctor data in firestore
createDoctor(doctor: Doctor){
  return this.firestore.collection('doctors').add(doctor);
}

}
