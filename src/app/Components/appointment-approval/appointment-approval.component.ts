import { Component, Input } from '@angular/core';
import { MainService } from '../main.service';
import { Host } from 'src/app/commons/common.objects';

@Component({
  selector: 'app-appointment-approval',
  templateUrl: './appointment-approval.component.html',
  styleUrls: ['./appointment-approval.component.css']
})
export class AppointmentApprovalComponent {

  hosts : any[] = [];
  status : boolean = false;
  appointments : any[] = [];
  host : Host = {
    hostId: 0,
    receiverMailId: '',
    hostMailId: '',
    employee: {
      employeeId: 0,
      employeeName: '',
      employeeEmail: '',
      companyEntity: {
        entity_id: 0,
        entity_description: '',
        status: false
      },
      designation: {
        designationId: 0,
        designation: '',
        status: false
      },
      department: {
        department_id: 0,
        department_description: '',
        entity: {
          entity_id: 0,
          entity_description: '',
          status: false
        },
        status: false
      },
      section: {
        section_id: 0,
        section_description: '',
        department: {
          department_id: 0,
          department_description: '',
          entity: {
            entity_id: 0,
            entity_description: '',
            status: false
          },
          status: false
        },
        status: false
      },
      status: false
    },
    appointment: {
      appointment_id: 0,
      appointment_start: '',
      appointment_end: '',
      visitors: [],
      vehicles: [],
      facilityVisitedList: [],
      sectionVisitedList: [],
      appointment_type: {
        appointmentTypeId: 0,
        appointmentType: '',
        status: false
      },
      checkInTime: '',
      checkOutTime: '',
      companyName: '',
      place: '',
      companyPhone: ''
    },
    otp: 0,
    approved: false
  }
  
  constructor(private service : MainService) { 
    this.service.getAllHost((data : any)=>{
        console.log(data);
        this.hosts = data;
    })
  }

  
  public onHostSelectionChange(hostId : any){
    // console.log("Entity selected : "+entityId)
    console.log(hostId);
    this.service.getHost(hostId.value,(data : any)=>{
       console.log(data);
       console.log(data.employee.employeeId);
       this.service.getAllAppointmentsByEmployeeId(data.employee.employeeId,(data : any)=>{
           console.log(data);
           this.appointments = data;
       })
    })
  }

  showConfirmation: boolean = false;
  confirmationTitle: string = '';
  confirmationMessage: string = '';
  appointment_id : any = 0;

  @Input() message: string = '';

  confirmAction(appointment_id : any): void {
    this.showConfirmation = true;
    this.confirmationTitle = 'Confirmation';
    this.confirmationMessage = 'Are you sure you want to proceed?';
    this.appointment_id = appointment_id;
  }

  onConfirmation(confirmed: boolean): void {
    this.showConfirmation = false;
    if (confirmed) {
      // User clicked 'Yes', proceed with the action
      console.log('User clicked Yes');
      this.service.getHostByAppointment(this.appointment_id,(data : any)=>{
        this.host = data;
        this.host.approved = true;
        this.service.updateHost(this.host,(data : any)=>{
           console.log(data);
        }) 
     })
    } else {
      // User clicked 'No', stop the action
      console.log('User clicked No');
    }
  }

  public onApprove(appointment_id : any){


     
  }

}
