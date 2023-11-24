import { Component } from '@angular/core';
import { MainService } from '../main.service';

@Component({
  selector: 'app-hyperlink',
  templateUrl: './hyperlink.component.html',
  styleUrls: ['./hyperlink.component.css']
})
export class HyperlinkComponent {


  constructor(private service : MainService) { 
   
  }

 

  showCompanyReport = false;
  toggleCompanyReport() {
    this.showCompanyReport = !this.showCompanyReport;
    this.showDepartmentReport = false;
    this.showDesignationReport = false;
    this.showEntityReport = false;
    this.showMenuReport = false;
    this.showUserReport = false;
    this.showRoleReport = false;
    this.showEmployeeReport = false;
    this.showSectionReport = false;

  }


  showDepartmentReport = false;
  toggleDepartmentReport() {
    this.showDepartmentReport = !this.showDepartmentReport;
    this.showCompanyReport = false;
    this.showUserReport = false;
    this.showRoleReport = false;
    this.showEntityReport = false;
    this.showMenuReport = false;
    this.showDesignationReport = false;
    this.showEmployeeReport = false;
    this.showSectionReport = false;

  }


  showDesignationReport = false;
  toggleDesignationReport() {
    this.showDesignationReport = !this.showDesignationReport;
    this.showCompanyReport = false;
    this.showEntityReport = false;
    this.showRoleReport = false;
    this.showSectionReport = false;
    this.showDepartmentReport = false;
    this.showEmployeeReport = false;
    this.showMenuReport = false;
    this.showUserReport = false;
  }


  showEmployeeReport = false;
  toggleEmployeeReport() {
    this.showEmployeeReport = !this.showEmployeeReport;
    this.showMenuReport = false;
    this.showRoleReport = false;
    this.showCompanyReport = false;
    this.showDepartmentReport = false;
    this.showDesignationReport = false;
    this.showMenuReport = false;
    this.showEntityReport = false;
    this.showSectionReport = false;

  }




  showMenuReport = false;
  toggleMenuReport() {
    this.showMenuReport = !this.showMenuReport;
    this.showCompanyReport = false;
    this.showDepartmentReport = false;
    this.showDesignationReport = false;
    this.showEmployeeReport = false;
    this.showEntityReport = false;
    this.showUserReport = false;
    this.showRoleReport = false;
    this.showSectionReport = false;

  }




  showRoleReport = false;
  toggleRoleReport() {
    this.showRoleReport = !this.showRoleReport;
    this.showCompanyReport = false;
    this.showMenuReport = false;
    this.showEntityReport = false;
    this.showDepartmentReport = false;
    this.showDesignationReport = false;
    this.showEmployeeReport = false;
    this.showUserReport = false; 
    this.showSectionReport = false;

  }



  showEntityReport = false;
  toggleEntityReport() {
    this.showEntityReport = !this.showEntityReport;
    this.showCompanyReport = false;
    this.showDepartmentReport = false;
    this.showDesignationReport = false;
    this.showMenuReport = false;
    this.showUserReport = false;
    this.showRoleReport = false;
    this.showEmployeeReport = false;
    this.showSectionReport = false;

  }



  showUserReport = false;
  toggleUserReport() {
    this.showUserReport = !this.showUserReport;
    this.showCompanyReport = false;
    this.showDepartmentReport = false;
    this.showDesignationReport = false;
    this.showEmployeeReport = false;
    this.showEntityReport = false;
    this.showRoleReport = false;
    this.showMenuReport = false;
    this.showSectionReport = false;
  }

  showSectionReport = false;
  toggleSectionReport() {
    this.showSectionReport = !this.showSectionReport;
    this.showCompanyReport = false;
    this.showDepartmentReport = false;
    this.showDesignationReport = false;
    this.showEmployeeReport = false;
    this.showEntityReport = false;
    this.showRoleReport = false;
    this.showMenuReport = false;
    this.showUserReport = false;
  }









  selectedReport: string = ''; // Initially, no report is selected
  reports = [
    { label: 'Select a Report', value: '' },
    { label: 'Company Report', value: 'company' },
    { label: 'Department Report', value: 'department' },
    { label: 'Designation Report', value: 'designation' },
    { label: 'Employee Report', value: 'employee' },
    { label: 'Entity Report', value: 'entity' },
    { label: 'Menu Report', value: 'menu' },
    { label: 'Role Report', value: 'role'},
    { label: 'User Report', value: 'user' },
  ];


}
