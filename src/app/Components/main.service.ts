import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Appointment1 } from '../commons/common.objects';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class MainService {

  hostUrl : string = "http://localhost:9090";
  baseUri: string = this.hostUrl;

  constructor(private httpClient: HttpClient,private router : Router) {}

  //  Complete company
  public getAllCompanies(callback: any) {
    this.httpClient.get(this.baseUri + '/company/').subscribe((data) => {
      callback(data);
    });
  }

  public getCompany(id: number, callback: any) {
    this.httpClient
      .get(this.baseUri + '/company/' + id)
      .subscribe((data: any) => {
        callback(data);
      });
  }

  public addCompany(company: any, callback: any) {
    this.httpClient
      .post(this.baseUri + '/company', company)
      .subscribe(
        (data: any) => {
          // Success callback
          callback(data);
          //alert("Successfully Submitted");
        },
        (error) => {
          // Error callback
          console.error('An error occurred:', error);
          //alert("Error Submitting form");
          // You can handle the error here, for example, show a user-friendly message
        });
  }

  public deleteCompany(id: number, callback: any) {
    this.httpClient
      .delete(this.baseUri + '/company/' + id)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/company/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public updateCompany(id: number, company: any, callback: any) {
    this.httpClient
      .put(this.baseUri + '/company/' + id, company)
      .subscribe(
        (data: any) => {
          // Success callback
          callback(data);
          //alert("Successfully Submitted");
        },
        (error) => {
          // Error callback
          console.error('An error occurred:', error);
          //alert("Error Submitting form");
          // You can handle the error here, for example, show a user-friendly message
        });
  }
  // Ending of company

  //complete companyEntity

  public getAllCompaniesentity(callback: any) {
    this.httpClient.get(this.baseUri + '/Entity').subscribe((data) => {
      callback(data);
    });
  }

  public getCompanyentity(entityId: number, callback: any) {
    console.log(entityId)

    this.httpClient
      .get(this.baseUri + '/Entity/' + entityId)
      .subscribe((data: any) => {
        console.log(data)
        callback(data);
      });
  }

  public addCompanyentity(companyEntity: any, callback: any) {
    this.httpClient
      .post(this.baseUri + '/Entity', companyEntity)
            .subscribe(
              (data: any) => {
                // Success callback
                callback(data);
                //alert("Successfully Submitted");
                this.setData1("Successfully Submitted");
              },
              (error) => {
                // Error callback
                console.error('An error occurred:', error);
                //alert("Error Submitting form");
                this.setData1("Error Submitting form");
                // You can handle the error here, for example, show a user-friendly message
              });
  }

  public deleteCompanyentity(entityId: number, callback: any) {
    this.httpClient
      .delete(this.baseUri + '/companyEntity/' + entityId)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/companyEntity/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public updateCompanyentity(
    entityId: number,
    companyEntity: any,
    callback: any
  ) {
    this.httpClient
      .put(this.baseUri + '/companyEntity/' + entityId, companyEntity)
      .subscribe(
        (data: any) => {
          // Success callback
          callback(data);
          //alert("Successfully Submitted");
        },
        (error) => {
          // Error callback
          console.error('An error occurred:', error);
          //alert("Error Submitting form");
          // You can handle the error here, for example, show a user-friendly message
        });
  }
  // End of companyEntity

  //  Complete Department
  public getAlldepartments(callback: any) {
    this.httpClient.get(this.baseUri + '/Department').subscribe((data) => {
      callback(data);
    });
  }

  public getdepartment(departmentId: number, callback: any) {
    this.httpClient
      .get(this.baseUri + '/Department/' + departmentId)
      .subscribe((data: any) => {
        callback(data);
      });
  }

  public adddepartment(department: any, callback: any) {
    this.httpClient
      .post(this.baseUri + '/Department', department)
      .subscribe(
        (data: any) => {
          // Success callback
          callback(data);
          //alert("Successfully Submitted");
        },
        (error) => {
          // Error callback
          console.error('An error occurred:', error);
          //alert("Error Submitting form");
          // You can handle the error here, for example, show a user-friendly message
        });
  }

  public deletedepartment(departmentId: number, callback: any) {
    this.httpClient
      .delete(this.baseUri + '/Department/' + departmentId)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/Department/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public updatedepartment(
    departmentId: number,
    department: any,
    callback: any
  ) {
    this.httpClient
      .put(this.baseUri + '/Department/' + departmentId, department)
      .subscribe(
        (data: any) => {
          // Success callback
          callback(data);
          //alert("Successfully Submitted");
        },
        (error) => {
          // Error callback
          console.error('An error occurred:', error);
          //alert("Error Submitting form");
          // You can handle the error here, for example, show a user-friendly message
        });
  }

  public getDepartmentByEntity(entityId: number, callback: any) {
    this.httpClient
      .get(this.baseUri + '/Department/Entity/' + entityId)
      .subscribe((data: any) => {
        callback(data);
       
      });
  }
  // Ending of Department

  // Complete Employee

  getDepList(): Observable<any[]> {
    return this.httpClient.get<any>(this.baseUri + '/employee/');
  }

  public getAllemployees(callback: any) {
    this.httpClient.get(this.baseUri + '/employee').subscribe((data) => {
      callback(data);
    });
  }

  public addemployee(employee: any, callback: any) {
    this.httpClient
      .post(this.baseUri + '/employee', employee)
      .subscribe(
        (data: any) => {
          // Success callback
          callback(data);
          //alert("Successfully Submitted");
        },
        (error) => {
          // Error callback
          console.error('An error occurred:', error);
          //alert("Error Submitting form");
          // You can handle the error here, for example, show a user-friendly message
        });
  }

  // public addemployee(employee: any, callback: any): void {
  //   const url = `${this.baseUri}/employee`;

  //   this.httpClient
  //     .post(url, { ...employee, departmentId: employee.Department })
  //     .subscribe((data: any) => {
  //       this.httpClient
  //         .get(this.baseUri + '/employee/')
  //         .subscribe((data: any) => {
  //           callback(data);
  //         });
  //     });
  // }

  public getemployee(employeeId: number, callback: any) {
    this.httpClient
      .get(this.baseUri + '/employee/' + employeeId)
      .subscribe((data: any) => {
        callback(data);
      });
  }

  public deleteemployee(employeeId: number, callback: any) {
    this.httpClient
      .delete(this.baseUri + '/employee/' + employeeId)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/employee')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public updateemployee(employeeId: number, employee: any, callback: any) {
    this.httpClient
      .put(this.baseUri + '/employee/' + employeeId, employee)
      .subscribe(
        (data: any) => {
          // Success callback
          callback(data);
          //alert("Successfully Submitted");
        },
        (error) => {
          // Error callback
          console.error('An error occurred:', error);
          //alert("Error Submitting form");
          // You can handle the error here, for example, show a user-friendly message
        });
  }

  //  End  of Employee

  // Complete  role
  public getAllroles(callback: any) {
    this.httpClient.get(this.baseUri + '/Role').subscribe((data) => {
      callback(data);
    });
  }

  public getrole(roleId: number, callback: any) {
    this.httpClient
      .get(this.baseUri + '/Role/' + roleId)
      .subscribe((data: any) => {
        callback(data);
      });
  }

  public addrole(roles: any, callback: any) {
    this.httpClient
      .post(this.baseUri + '/Role', roles)
      .subscribe(
        (data: any) => {
          // Success callback
          callback(data);
          //("Successfully Submitted");
        },
        (error) => {
          // Error callback
          console.error('An error occurred:', error);
          //("Error Submitting form");
          // You can handle the error here, for example, show a user-friendly message
        });
  }

  public deleterole(roleId: number, callback: any) {
    this.httpClient
      .delete(this.baseUri + '/Role/' + roleId)
      .subscribe((data: any) => {
        this.httpClient.get(this.baseUri + '/Role').subscribe((data: any) => {
          callback(data);
        });
      });
  }

  public updaterole(roleId: number, roles: any, callback: any) {
    this.httpClient
      .put(this.baseUri + '/Role/' + roleId, roles)
      .subscribe(
        (data: any) => {
          // Success callback
          callback(data);
          //("Successfully Submitted");
        },
        (error) => {
          // Error callback
          console.error('An error occurred:', error);
          //("Error Submitting form");
          // You can handle the error here, for example, show a user-friendly message
        });
  }
  // Ending of Role

  //complete Designation

  public getAllDesignation(callback: any) {
    this.httpClient.get(this.baseUri + '/designation/').subscribe((data) => {
      callback(data);
    });
  }

  public getDesignation(designationId: number, callback: any) {
    this.httpClient
      .get(this.baseUri + '/designation/' + designationId)
      .subscribe((data: any) => {
        callback(data);
      });
  }

  public addDesignation(designation: any, callback: any) {
    this.httpClient
      .post(this.baseUri + '/designation', designation)
      .subscribe(
        (data: any) => {
          // Success callback
          callback(data);
          //alert("Successfully Submitted");
        },
        (error) => {
          // Error callback
          console.error('An error occurred:', error);
          //alert("Error Submitting form");
          // You can handle the error here, for example, show a user-friendly message
        });
  }

  public deleteDesignation(designationId: number, callback: any) {
    this.httpClient
      .delete(this.baseUri + '/designation/' + designationId)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/designation/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public updateDesignation(
    designationId: number,
    designation: any,
    callback: any
  ) {
    this.httpClient
      .put(this.baseUri + '/designation/' + designationId, designation)
      .subscribe(
        (data: any) => {
          // Success callback
          callback(data);
          //alert("Successfully Submitted");
        },
        (error) => {
          // Error callback
          console.error('An error occurred:', error);
          //alert("Error Submitting form");
          // You can handle the error here, for example, show a user-friendly message
        });
  }
  // End of Designation

  // Complete Section

  public getAllsections(callback: any) {
    this.httpClient.get(this.baseUri + '/Section').subscribe((data) => {
      callback(data);
    });
  }

  public getsection(sectionId: number, callback: any) {
    console.log(sectionId)
    this.httpClient
      .get(this.baseUri + '/Section/' + sectionId)
      .subscribe((data: any) => {
        callback(data);
      });
  }

  public addsection(section: any, callback: any) {
    this.httpClient
      .post(this.baseUri + '/Section', section)
      .subscribe(
        (data: any) => {
          // Success callback
          callback(data);
          //alert("Successfully Submitted");
        },
        (error) => {
          // Error callback
          console.error('An error occurred:', error);
          //alert("Error Submitting form");
          // You can handle the error here, for example, show a user-friendly message
        });
  }

  public deletesection(sectionId: number, callback: any) {
    this.httpClient
      .delete(this.baseUri + '/Section/' + sectionId)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/Section')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public updatesection(sectionId: number, section: any, callback: any) {
    this.httpClient
      .put(this.baseUri + '/Section/' + sectionId, section)
      .subscribe(
        (data: any) => {
          // Success callback
          callback(data);
          //alert("Successfully Submitted");
        },
        (error) => {
          // Error callback
          console.error('An error occurred:', error);
          //alert("Error Submitting form");
          // You can handle the error here, for example, show a user-friendly message
        });
  }

  public getSectionByDepartment(departmentId: number, callback: any) {
    console.log('HELLLLLLL')
    this.httpClient
      .get(this.baseUri + '/Section/department/' + departmentId)
      .subscribe((data: any) => {
    console.log('HEAVEN')

        console.log(data)
        callback(data);
      });
  }
  // End of Section

  // Complete menu

  public getAllmenus(callback: any) {
    this.httpClient.get(this.baseUri + '/menu').subscribe((data) => {
      callback(data);
    });
  }

  public getmenu(menuGroupId: number, callback: any) {
    this.httpClient
      .get(this.baseUri + '/menu/' + menuGroupId)
      .subscribe(
        (data: any) => {
          // Success callback
          callback(data);
          //alert("Successfully Submitted");
        },
        (error) => {
          // Error callback
          console.error('An error occurred:', error);
          //alert("Error Submitting form");
          // You can handle the error here, for example, show a user-friendly message
        });
  }

  public addmenu(menu: any, callback: any) {
    this.httpClient
      .post(this.baseUri + '/menu', menu)
      .subscribe(
        (data: any) => {
          // Success callback
          callback(data);
          //alert("Successfully Submitted");
        },
        (error) => {
          // Error callback
          console.error('An error occurred:', error);
          //alert("Error Submitting form");
          // You can handle the error here, for example, show a user-friendly message
        });
  }

  public deletemenu(menuGroupId: number, callback: any) {
    this.httpClient
      .delete(this.baseUri + '/menu/' + menuGroupId)
      .subscribe((data: any) => {
        this.httpClient
          .get(this.baseUri + '/menu/')
          .subscribe((data: any) => {
            callback(data);
          });
      });
  }

  public updatemenu(menuGroupId: number, menu: any, callback: any) {
    this.httpClient
      .put(this.baseUri + '/menu/' + menuGroupId, menu)
      .subscribe(
        (data: any) => {
          // Success callback
          callback(data);
          //alert("Successfully Submitted");
        },
        (error) => {
          // Error callback
          console.error('An error occurred:', error);
          //alert("Error Submitting form");
          // You can handle the error here, for example, show a user-friendly message
        });
  }
  // End of Menu

  // Complete User
  public getAllusers(callback: any) {
    this.httpClient.get(this.baseUri + '/User').subscribe((data) => {
      callback(data);
    });
  }

  public getAllUnApprovedUsers(callback : any){
     this.httpClient.get(this.baseUri+"/user/unapproved")
                    .subscribe((data : any)=>{
                        callback(data);
                    })
  }

  public getuser(menuGroupId: number, callback: any) {
    this.httpClient
      .get(this.baseUri + '/user/' + menuGroupId)
      .subscribe((data: any) => {
        callback(data);
      });
  }

  public updateUnApprovedUser(userId : any,callback : any){
      this.httpClient.get(this.baseUri+"/user/approve/"+userId)
                     .subscribe((data : any)=>{
                        callback(data);
                     })
  }

  public adduser(user: any, callback: any) {
    this.httpClient
      .post(this.baseUri + '/User', user)
      .subscribe(
        (data: any) => {
          // Success callback
          callback(data);
          //alert("Successfully Submitted");
        },
        (error) => {
          // Error callback
          console.error('An error occurred:', error);
          //alert("Error Submitting form");
          // You can handle the error here, for example, show a user-friendly message
        });
  }

  public updateUser(user_id : any,user : any,callback : any){
      this.httpClient.put(this.baseUri+"/user/"+user_id,user)
                      .subscribe(
                        (data: any) => {
                          // Success callback
                          callback(data);
                          //alert("Successfully Submitted");
                        },
                        (error) => {
                          // Error callback
                          console.error('An error occurred:', error);
                          //alert("Error Submitting form");
                          // You can handle the error here, for example, show a user-friendly message
                        });
  }

  public deleteuser(menuGroupId: number, callback: any) {
    this.httpClient
      .delete(this.baseUri + '/User/' + menuGroupId)
      .subscribe((data: any) => {
        this.httpClient.get(this.baseUri + '/User').subscribe((data: any) => {
          callback(data);
        });
      });
  }

  

  public updateuser(menuGroupId: number, user: any, callback: any) {
    this.httpClient
      .put(this.baseUri + '/user/' + menuGroupId, user)
      .subscribe(
        (data: any) => {
          // Success callback
          callback(data);
          //alert("Successfully Submitted");
        },
        (error) => {
          // Error callback
          console.error('An error occurred:', error);
          //alert("Error Submitting form");
          // You can handle the error here, for example, show a user-friendly message
        });
  }

  // End of User

  baseUri1: string = this.hostUrl+'/Visitor';
  baseUri2: string = this.hostUrl+'/Appointment';
  baseUri3: string = this.hostUrl+'/Section';
  baseUri4: string = this.hostUrl+'/Facility';
  baseUri5: string = this.hostUrl+'/Vehicle';
  baseUri6: string = this.hostUrl+'/User/Userexist/';
  baseUri7: string = this.hostUrl+'/Item';
  baseUri8: string = this.hostUrl+'/User';
  baseUri9 : string = this.hostUrl ;
  baseUri10 : string = this.hostUrl+"/SectionVisited";
  baseUri11 : string = this.hostUrl+"/FacilityVisited";
  

    public addVisitor(Visitor: any,callback:any) {
      this.httpClient.post(this.baseUri1,Visitor)
                     .subscribe((data: any) => {
                        console.log(data)
                        callback(data);
                     });
    }

    public addAppointment(Appointment: any,otp : any,callback : any){
      this.httpClient.post(this.baseUri2+"/"+otp,Appointment)
                      .subscribe(
                        (data: any) => {
                          // Success callback
                          callback(data);
                          alert("Successfully Submitted");
                        },
                        (error) => {
                          // Error callback
                          console.error('An error occurred:', error);
                          alert("Error Submitting form");
                          // You can handle the error here, for example, show a user-friendly message
                        });
    }

    public getAppointment(appointment_id : any,callback : any){
       this.httpClient.get(this.baseUri2+"/"+appointment_id)
                      .subscribe((data : any)=>{
                          callback(data);
                      })
    }

    

    public addVehicle(Vehicle: any,callback : any){
      this.httpClient.post(this.baseUri5,Vehicle)
                     .subscribe((data:any) => {
                      console.log(data)
                      callback(data)
                     });
    }

    public addItem(Item: any,callback:any){
      this.httpClient.post(this.baseUri7,Item)
                     .subscribe((data:any) => {
                      console.log(data)
                      callback(data)
                     });
    }

    public getAllSection(callback : any){
      this.httpClient.get(this.baseUri3)
                        .subscribe((data:any)=>{
                          callback(data);
                          console.log(data);
                        })
    }

    public getAllFacility(callback : any){
      this.httpClient.get(this.baseUri4)
                        .subscribe((data:any)=>{
                          callback(data);
                          console.log(data);
                        })
    }

    public getAllUser(callback : any){
      this.httpClient.get(this.baseUri8)
                        .subscribe((data:any)=>{
                          callback(data);
                          console.log(data);
                        })
    }

    public addTemplate(template : any,callback:any){
      this.httpClient.post(this.baseUri9+"/api/template",template)
                     .subscribe((data : any)=>{
                        console.log(data)
                        callback(data)
                     })
    }

    

    public checkUserExistByUsername(User_Username: string, callback : any){
      this.httpClient.get(this.baseUri6+User_Username)
                     .subscribe((data:any)=>{
                      console.log("Username exists : "+(JSON.stringify(data)));
                      callback(null,false,data);
                    },(rg:any)=>{
                      console.log("Username data does not exist: "+(JSON.stringify(rg)));
                      callback(rg,true,null);
                    })
  }

  public getUserById(userid:number , callback :any){
    this.httpClient.get(this.baseUri8+'/'+userid)
    .subscribe((data:any)=>{
      console.log(data);
      callback(data)
    })
  }

  public getSectionById(sectionid:number , callback :any){
    this.httpClient.get(this.baseUri3+'/'+sectionid)
    .subscribe((data:any)=>{
      console.log(data);
      callback(data)
    })
  }

  public addFacility(facility: any, callback : any){
    this.httpClient.post(this.baseUri4,facility)
                    .subscribe(
                      (data: any) => {
                        // Success callback
                        callback(data);
                        alert("Successfully Submitted");
                      },
                      (error) => {
                        // Error callback
                        console.error('An error occurred:', error);
                        alert("Error Submitting form");
                        // You can handle the error here, for example, show a user-friendly message
                      });
  }

  public getFacilityById(facilityid:number , callback :any){
    this.httpClient.get(this.baseUri4+'/'+facilityid)
    .subscribe((data:any)=>{
      console.log(data);
      callback(data)
    })
  }

  public addSectionVisited(SectionVisited :any,callback:any){
    this.httpClient.post(this.baseUri10,SectionVisited)
    .subscribe((data:any) =>{
      console.log(data);
      callback(data)
    })
  }

  public addFacilityVisited(FacilityVisited :any,callback:any){
    this.httpClient.post(this.baseUri11,FacilityVisited)
    .subscribe((data:any) =>{
      console.log(data);
      callback(data)
    })
  }

  baseUri20: string = this.hostUrl;
  message: string = '';

  //  Complete company
  // public fetchAllCompany(callback: any) {
  //   this.httpClient.get(this.baseUri + '/company/').subscribe((data) => {
  //     callback(data);
  //   });
  // }

  public fetchAllVisitor(callback: any) {
    this.httpClient.get(this.baseUri20 + '/Visitor').subscribe((data) => {
      callback(data);
    });
  }

  public fetchAppointmentByVisitor(visitorId : any,callback : any){
      this.httpClient.get(this.hostUrl+"/Appointment/visitor/"+visitorId)
                     .subscribe((data : any)=>{
                         callback(data);
                     })
  }

  public fetchVisitorById(visitor_id : any,callback : any){
      this.httpClient.get(this.hostUrl+"/Visitor/"+visitor_id)
                     .subscribe((data : any)=>{
                        callback(data);
                     })
  }

  public fetchVisitorByPhone(phone : any,callback : any){
     this.httpClient.get(this.baseUri20+"/Visitor/phone/"+phone)
                    .subscribe((data : any)=>{
                        callback(data);
                    })
  }

  //DashboardCount
  public fetchAllVisitorCount(callback: any) {
    this.httpClient.get(this.baseUri20 + '/visitor/count').subscribe((data) => {
      callback(data);
    });
  }

  public fetchcheckinVisitorCount(callback: any) {
    this.httpClient.get(this.baseUri20 + '/visitor/checkincount')
                   .subscribe((data) => {
                      callback(data);
                    });
  }

  public fetchcheckoutVisitorCount(callback: any) {
    this.httpClient.get(this.baseUri20 + '/visitor/checkoutcount').subscribe((data) => {
      callback(data);
    });
  }

  public fetchYetToVisitVisitorCount(callback: any) {
    this.httpClient.get(this.baseUri20 + '/Appointmentyettovisitcount').subscribe((data) => {
      callback(data);
    });
  }

  public getImageFromServer(imageUrl: string) {
    // Replace 'your-java-server-url' with the actual URL of your Java server's endpoint
    return this.httpClient.get(this.baseUri9+'/ams/downloadImage/'+imageUrl, { params: { imageUrl }, responseType: 'arraybuffer' });
  }

  getImage(appointment_id : any): Observable<any> {
    const headers = new HttpHeaders(); // Add any required headers here

    return this.httpClient.get(this.baseUri9+"/qr/qrcode/"+appointment_id, { headers, responseType: 'blob' }).pipe(
      map((response: Blob) => {
        // Process the response if needed (e.g., convert to base64)
        // You can also extract headers from the response using response.headers
        return response;
      })
    );
  }

  uploadPdf(pdfBlob: Blob,visitor_id : any): Observable<any> {
    const formData = new FormData();
    formData.append('pdfFile', pdfBlob, 'pdf_filename.pdf');

    return this.httpClient.post<any>(this.baseUri9+'/ams/upload-pdf/'+visitor_id, formData);
  }

  downloadPdf(pdfUrl: string): Observable<Blob> {
    return this.httpClient.get(this.baseUri9+"/ams/downloadImage/"+pdfUrl, { responseType: 'blob' });
  }

  public addAppointmentType(appointmentType : any,callback : any){
      this.httpClient.post(this.baseUri9+"/appointmentType",appointmentType)
                      .subscribe(
                        (data: any) => {
                          // Success callback
                          callback(data);
                          alert("Successfully Submitted");
                        },
                        (error) => {
                          // Error callback
                          console.error('An error occurred:', error);
                          alert("Error submitting form");
                          // You can handle the error here, for example, show a user-friendly message
                        });

  }


  public getAllAppointmentType(callback : any){
    this.httpClient.get(this.baseUri9+"/appointmentType/")
                   .subscribe((data : any)=>{
                       callback(data);
                   })
 }

 public getAppointmentType(appointmentTypeId : any,callback : any){
     this.httpClient.get(this.baseUri9+"/appointmentType/"+appointmentTypeId)
                    .subscribe((data : any)=>{
                       callback(data);
                    })
 }

 public addLogin( login : any, callback : any ){
  this.httpClient.post(this.baseUri9+"/login",login)
                .subscribe((data:any)=>{
                    callback(data);
                }
                )
}


public logIn(login : any,callback : any){
  console.log(login);
  this.httpClient.post(this.baseUri9+"/authenticate",login)
                 .subscribe((data : any)=>{
                     console.log("Login.............");
                     callback(data);
                 })
}

public getUserByUserName(userName : any,callback : any){
   this.httpClient.get(this.baseUri9+"/user/"+userName)
                  .subscribe((data : any)=>{
                     console.log(data);
                     callback(data);
                  })
}


public getAppointmentCountInMonth(year : any,callback : any){
  this.httpClient.get(this.baseUri2+"/year/"+year)
                 .subscribe((data : any)=>{
                    callback(data);
                 })
}

public getAppointmentCountForYears(callback : any){
  this.httpClient.get(this.baseUri2+"/dataForSixYears")
                 .subscribe((data : any)=>{
                    callback(data);
                 })
}

public getYearlyAppointments(year : any,callback : any){
   this.httpClient.get(this.hostUrl+"/Appointment/yearlyAppointment/"+year)
                  .subscribe((data : any)=>{
                     callback(data);
                  })
}

public getMonthlyAppointments(year : any,month : any,callback : any){
   this.httpClient.get(this.hostUrl+"/Appointment/monthlyAppointments/"+year+"/"+month)
                  .subscribe((data : any)=>{
                      callback(data);
                  })
}

public getAppointmentsWithinRange(startDate : any,endDate : any,callback : any){
    this.httpClient.get(this.hostUrl+"/withinRange/"+JSON.stringify(startDate)+"/"+JSON.stringify(endDate))
                   .subscribe((data : any)=>{
                      callback(data);
                   })
}
  
private dataSubject = new BehaviorSubject<any>(0);
data$ = this.dataSubject.asObservable();

setData(newData: any) {
  this.dataSubject.next(newData);
}

private dataSubject1 = new BehaviorSubject<any>(" ");
da$ = this.dataSubject1.asObservable();

setData1(newData: any) {
  this.dataSubject1.next(newData);
}

getFile(filePath: string): Observable<Blob> {
  return this.httpClient.get(this.baseUri9+'/ams/downloadImage/'+filePath, { responseType: 'blob' });
}

  public addHost(host : any, callback : any){
    this.httpClient.post(this.baseUri9+"/host", host)
    .subscribe((data : any)=>{
      callback(data);
    }) 
  }

  public getHost(hostId : any,callback : any){
     this.httpClient.get(this.baseUri9+"/host/"+hostId)
                    .subscribe((data : any)=>{
                       callback(data);
                    })
  }

  public getAllHostEmployees(callback : any){
     this.httpClient.get(this.baseUri9+"/employee/hostEmployees")
                    .subscribe((data : any)=>{
                       callback(data);
                    })
  }

  public getAllAppointmentsByEmployeeId(employeeId : any,callback : any){
      this.httpClient.get(this.baseUri9+"/host/employee/"+employeeId)
                     .subscribe((data : any)=>{
                        callback(data);
                     })
  }

  public getAllNotApprovedAppointments(callback : any){
    this.httpClient.get(this.baseUri9+"/host/notapproved/appointment")
                   .subscribe((data : any)=>{
                      callback(data);
                   })
}

  public getAllApprovedAppointments(callback : any){
    this.httpClient.get(this.baseUri9+"/host/approved/appointment")
                  .subscribe((data : any)=>{
                      callback(data);
                  })
  }

  public getHostByAppointment(appointment_id : any,callback : any){
       this.httpClient.get(this.baseUri9+"/host/appointment/"+appointment_id)
                      .subscribe((data : any)=>{
                          callback(data);
                      })
  }

  public updateHost(host : any,callback : any){
        this.httpClient.put(this.baseUri9+"/host",host)
                        .subscribe(
                          (data: any) => {
                            // Success callback
                            callback(data);
                            //alert("Successfully Submitted");
                          },
                          (error) => {
                            // Error callback
                            console.error('An error occurred:', error);
                            //alert("Error Submitting form");
                            // You can handle the error here, for example, show a user-friendly message
                          });
  }

  public getAllHost(callback : any){
     this.httpClient.get(this.baseUri9+"/host/")
                    .subscribe((data : any)=>{
                        callback(data);
                    })
  }

  public checkInUpdate(appointment_id : any,appointment : any,callback : any){
    this.httpClient.put(this.baseUri9+"/AppointmentCheckIn/"+appointment_id,appointment)
                   .subscribe((data : any)=>{
                       console.log(data);
                       callback(data);
                   })
 }

 public checkOutUpdate(appointment_id : any,appointment : any,callback : any){
  this.httpClient.put(this.baseUri9+"/AppointmentCheckOut/"+appointment_id,appointment)
                    .subscribe((data : any)=>{
                        console.log(data);
                        callback(data);
                    })
 }

 public sectionCheckIn(sectionVisited_id : number,appointment_id : any,appointment : any,callback : any){
    this.httpClient.put(this.baseUri9+"/AppointmentSectionCheckIn/"+appointment_id+"/section/"+sectionVisited_id,appointment)
                   .subscribe((data : any)=>{
                      console.log(data);
                   })
 }

 public sectionCheckOut(sectionVisited_id : number,appointment_id : any,appointment : any,callback : any){
  this.httpClient.put(this.baseUri9+"/AppointmentSectionCheckOut/"+appointment_id+"/section/"+sectionVisited_id,appointment)
  .subscribe((data : any)=>{
     console.log(data);
  })
 }

 public facilityCheckIn(facilityVisited_id : number,appointment_id : any,appointment : any,callback : any){
    this.httpClient.put(this.baseUri9+"/AppointmentFacilityCheckIn/"+appointment_id+"/facility/"+facilityVisited_id,appointment)
                   .subscribe((data : any)=>{
                      console.log(data);
                   })
 }

 public facilityCheckOut(facilityVisited_id : number,appointment_id : any,appointment : any,callback : any){
    this.httpClient.put(this.baseUri9+"/AppointmentFacilityCheckOut/"+appointment_id+"/facility/"+facilityVisited_id,appointment)
                   .subscribe((data : any)=>{
                      console.log(data);
                   })
 }

 getLogs(): Observable<string[]> {
  return this.httpClient.get<string[]>(this.hostUrl+"/api/logs");
}

 
 getClientIP(): Observable<string> {
  // Specify the response type as 'text' to ensure it's treated as a string
  return this.httpClient.get('https://api.ipify.org?format=json', { responseType: 'text' });
}

    // navigateToDesiredPage(): void {
    //   // Specify the desired route
    //   const desiredRoute = '/**';

    //   // Navigate to the desired route
    //   this.router.navigate([desiredRoute]);
    // }


}
