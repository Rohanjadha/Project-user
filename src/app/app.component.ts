import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpservService } from './empserv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud';

  empForm: FormGroup;

  shownData: any[] = [];

  constructor(private fb: FormBuilder, private apiServ: EmpservService) {
    this.empForm = this.fb.group({
      fname: ['',[Validators.required, Validators.minLength(2)]],
      lname: ['',[Validators.required, Validators.minLength(2)]],
      email: ['',[Validators.required, Validators.email]],
      phone: ['',[Validators.required, Validators.pattern('^[0-9]{10}$')]],
      address: ['',[Validators.required, Validators.minLength(5)]],
      id: ['']
    });
  }
  ngOnInit(): void {
    this.getallData();
  }
  resetform(){
    this.empForm.reset()
  }


  addData() {
    if (this.empForm.valid) {
      this.apiServ.addData(this.empForm.value).subscribe(
        (res: any) => {
          console.log(res);
          alert('Data Added Successfully');
          this.getallData();
        },
        (err) => {
          console.error('Error occurred:', err);
        }
      );
      console.log(this.empForm.value);
    }
  }


  getallData() {
    this.apiServ.showData().subscribe((res: any) => {
      console.log(res);
      this.shownData = res;

    })
  }

  getEditdata(id: any) {
    this.apiServ.getallDataEdit(id).subscribe((res: any) => {
      this.empForm.setValue(res)
    })
  }

  putEditedData() {
    this.apiServ.getEditedData(this.empForm.value.id, this.empForm.value).subscribe((res: any) => {
      console.log(res);
      alert("Data Updated successfully");
      this.resetform();
      this.getallData();
    },
      (error) => {
        console.log(error);

      }
    )
  }

  deleteData(id: any) {
    this.apiServ.deleteData(id).subscribe((res: any) => {
      console.log(res);
      alert("data Deleted Succeffuly")
      this.getallData();
    })
  }

}

