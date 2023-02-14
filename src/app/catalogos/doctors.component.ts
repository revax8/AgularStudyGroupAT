import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Doctor } from '../models/doctor.model';
import { MedicalService } from '../Services/medical.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent  implements OnInit{

  constructor(private fb: MedicalService) { } 

  studentForm!: Doctor;

  ngOnInit(): void {
  }

  Register(regForm: NgForm) {

    this.studentForm = regForm.form.value;
    this.save();


  }

  save() {
   
    this.fb.createDoctor(this.studentForm);
  }

}
