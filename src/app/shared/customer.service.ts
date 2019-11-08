import { Injectable } from '@angular/core';
import { FormControl , FormGroup , Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";


@Injectable({
 providedIn: 'root'
})
export class CustomerService {

 constructor(private firebase: AngularFireDatabase) { }
         customerList: AngularFireList<any>;

         form = new FormGroup({
             $key: new FormControl(null),
             firstName: new FormControl('', Validators.required),
             lastName: new FormControl('', Validators.required),
             email: new FormControl('', Validators.email),
             mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
         });

         getCustomers(){
                 this.customerList = this.firebase.list('customers');
                 return this.customerList.snapshotChanges();
         }
         insertCustomer(customer){
                 this.customerList.push({
                         firstName: customer.firstName,
                         lastName: customer.lastName,
                         email: customer.email,
                         mobile: customer.mobile,
                  });
         }
         populateForm(customer){
            this.form.setValue(customer);
          };

          deleteCustomer($key: string){
            this.customerList.remove($key);
  }

         updateCustomer(customer){
            this.customerList.update(customer.$key,{
                    firstName: customer.firstName,
                    lastName: customer.lastName,
                    email: customer.email,
                    mobile: customer.mobile,
    }
   );
  }
  }
