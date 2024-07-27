import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { registerDTO } from '../dtos/user/register.dto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  @ViewChild('registerForm') registerForm!: NgForm; 

  phoneNumber: string;
  password: string;
  retypePassword: string; 
  fullname: string;
  address: string;
  isAccepted: boolean;
  dateOfBirth: Date;
  constructor( private router: Router,private  userService: UserService){
    this.phoneNumber = '1234565459';
    this.password = '123456';
    this.retypePassword = '123456';
    this.fullname = 'dggdg';
    this.address = 'gggdg';
    this.isAccepted = true;
    this.dateOfBirth = new Date();
    this.dateOfBirth.setFullYear(this.dateOfBirth.getFullYear() - 18);
    // inject

  }

  onPhoneNumberChange(){
    console.log(`phoneNumber typed: ${this.phoneNumber}`)
  }

  register(){
    const message = `phoneNumber: ${this.phoneNumber} \n` + 
                    `password: ${this.password} \n` + 
                    `retypePassword: ${this.retypePassword} \n` + 
                    `fullname: ${this.fullname}\n` + 
                    `address: ${this.address}\n` + 
                    `isAccepted: ${this.isAccepted}\n` +
                    `dateOfBirth: ${this.dateOfBirth}\n` 
    alert(message)
    debugger
    
    const registerDTO: registerDTO = {
      "fullname": this.fullname,
      "phone_number": this.phoneNumber,
      "address": this.address,
      "password": this.password,
      "retype_password": this.retypePassword,
      "date_of_birth": this.dateOfBirth,
      "facebook_account_id": 0,
      "google_account_id": 0,
      "role_id": 1
    }
    
    
    this.userService.register(registerDTO).subscribe({
      next: (response: any) => {
        debugger
        this.router.navigate(['/login']);          
      },
      complete: () => {
        debugger
      },
      error: (error: any) => {          
        alert(`Cannot register, error: ${error.error}`)          
      }
  })  
  }

  checkPassWordsMatch(){
    if (this.password !== this.retypePassword) {
      this.registerForm.form.controls['retypePassword']
            .setErrors({ 'passwordMismatch': true });
    } else {
      this.registerForm.form.controls['retypePassword'].setErrors(null);
    }
  }

  checkAge() {
    if (this.dateOfBirth) {
      const today = new Date();
      const birthDate = new Date(this.dateOfBirth);
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      if (age < 18) {
        this.registerForm.form.controls['dateOfBirth'].setErrors({ 'invalidAge': true });
      } else {
        this.registerForm.form.controls['dateOfBirth'].setErrors(null);
      }
    }
  }

}
