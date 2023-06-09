import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from '../common-service.service';
import { ResourceLoader } from '@angular/compiler';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  displayStyle: any;
  formData: any;
  buttonDisabled: any;
  id: any;
  admissionroles: any;

  constructor(private commonService: CommonServiceService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.formData = new FormGroup({
      id: new FormControl(0),
      admissionRole: new FormControl("", [Validators.required])
    })
    this.commonService.get("Angular_Assement").then((result:any) => {
      this.admissionroles = result.data;
    });
    this.displayStyle = "none";
  }

  openModal() {
    this.displayStyle = "block";
  }

  closeModal() {
    this.displayStyle = "none";
  }

  editRole(id:any){
    this.displayStyle = "block";
    this.commonService.get("Angular_Assement/" + id).then((result:any) => {
      this.formData.patchValue({
        id:id,
        admissionRole:result.data.admissionRole
      });
    });
  }

  onSave(formdata: any) {
    if (formdata.id == 0)
    {
      this.commonService.post("Angular_Assement", formdata).then((result:any) => {
        this.load();
      })
    } else
    {
      this.commonService.put("Angular_Assement/" + formdata.id, formdata).then((result:any) => {
        this.load();
      })
    }
  }

  deleteRole(id: any) {
    if (confirm("Sure To Delete The Role?")) {
      this.commonService.delete("Angular_Assement/" + id).then((result:any) => {
        this.load();
      })
    }
  }
}
