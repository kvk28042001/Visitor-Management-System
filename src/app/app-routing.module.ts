import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentfromComponent } from './Components/Department complete/departmentfrom/departmentfrom.component';
import { EmployesfromComponent } from './Components/Employee Complete/employesfrom/employesfrom.component';
import { MenufromComponent } from './Components/Menu complete/menufrom/menufrom.component';
import { RolesfromComponent } from './Components/Role Complete/rolesfrom/rolesfrom.component';
import { SectionfromComponent } from './Components/Section  complete/sectionfrom/sectionfrom.component';
import { VmsHomeComponent } from './Components/vms-home/vms-home.component';
import { CompanyComponent } from './Components/CompanyInFo (1)/company/company.component';
import { OutpostComponent } from './Components/CompanyInFo (1)/CompanyInFo/outpost/outpost.component';
import { CompanyEntityComponent } from './Components/CompanyEntity/CompanyEntity All/CompanyEntity/companyentity.component';
import { DepartmentallComponent } from './Components/Department complete/departmentall/departmentall.component';
import { EmployeeAllComponent } from './Components/Employee Complete/employee-all/employee-all.component';
import { CompanyEntityFormComponent } from './Components/CompanyEntity/companyEntityform post/CompanyEntity post form/companyentityform.component';
import { RoleAllComponent } from './Components/Role Complete/role-all/role-all.component';
import { MenuAllComponent } from './Components/Menu complete/menu-all/menu-all.component';
import { SectionAllComponent } from './Components/Section  complete/section-all/section-all.component';
import { UserallComponent } from './Components/User complete/User All/userall.component';
import { UserformComponent } from './Components/User complete/User Form/userform.component';
import { DesignationAllComponent } from './Components/Designation Complete/designation-all/designation-all.component';
import { DesignationFormComponent } from './Components/Designation Complete/designation-form/designation-form.component';
import { TabComponent } from './Components/tab/tab.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { FormComponent } from './Components/form/form.component';
import { Form1Component } from './Components/form1/form1.component';
import { Form2Component } from './Components/form2/form2.component';
import { Form3Component } from './Components/form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { Form5Component } from './form5/form5.component';
import { Form6Component } from './form6/form6.component';
import { Form7Component } from './form7/form7.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ContactComponent } from './Components/contact/contact.component';
import { Form8Component } from './form8/form8.component';
import { titlebarComponent } from './Components/titlebar/titlebarComponent';
import { LoginComponent } from './login/login.component';
import { HyperlinkComponent } from './Components/hyperlink/hyperlink.component';
import { EntityreportComponent } from './Components/CompanyEntity/entityreport/entityreport.component';
import { CompanyreportComponent } from './Components/CompanyInFo (1)/companyreport/companyreport.component';
import { DepartmentreportComponent } from './Components/Department complete/departmentreport/departmentreport.component';
import { EmployeereportComponent } from './Components/Employee Complete/employeereport/employeereport.component';
import { MenureportComponent } from './Components/Menu complete/menureport/menureport.component';
import { RoleReportComponent } from './Components/Role Complete/role-report/role-report.component';
import { DesignationReportComponent } from './Components/Designation Complete/designation-report/designation-report.component';
import { SectionReportComponent } from './Components/Section  complete/section-report/section-report.component';
import { UserReportComponent } from './Components/User complete/user-report/user-report.component';
import { Template2Component } from './Components/template2/template2.component';
import { Tab2Component } from './Components/tab2/tab2.component';
import { HomeComponent } from './Components/home/home.component';
import { Component } from 'ag-grid-community';
import { Home2Component } from './Components/home2/home2.component';
import { HeaderComponent } from './Components/header/header.component';
import { HostComponent } from './Components/host/host.component';
import { AppointmentApprovalComponent } from './Components/appointment-approval/appointment-approval.component';
import { UnapprovedusersComponent } from './unapprovedusers/unapprovedusers.component';
import { FacilityComponent } from './Components/facility/facility.component';
import { AppointmentTypeAllComponent } from './Components/appointment-type-all/appointment-type-all.component';
import { AppointmentTypeComponent } from './Components/appointment-type/appointment-type.component';
import { TemplateComponent } from './Components/template/template.component';
import { FacilityallComponent } from './Components/facilityall/facilityall.component';
import { AppointmentsreportsComponent } from './appointmentsreports/appointmentsreports.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';



const routes: Routes = [
  {path:'home',component:VmsHomeComponent},
  {path:'companyForm',component:CompanyComponent},
  {path:'companyall',component:OutpostComponent},
  {path:'entityall',component:CompanyEntityComponent},
  {path:'entityform',component:CompanyEntityFormComponent},
  { path: 'departmentall', component:DepartmentallComponent},
  { path: 'departmentform', component:DepartmentfromComponent},
  { path: 'employeeall', component:EmployeeAllComponent},
  { path: 'employeeform', component:EmployesfromComponent},
  {path:'menuall',component:MenuAllComponent},
  {path:'menuform',component:MenufromComponent},
  {path:'roleall',component:RoleAllComponent},
  {path:'roleform',component:RolesfromComponent},
  {path:'designationall',component:DesignationAllComponent},
  {path:'designationform',component:DesignationFormComponent},
  {path:'sectionall',component:SectionAllComponent},
  {path:'sectionform',component:SectionfromComponent},
  {path:'userall',component:UserallComponent},
  {path:'userform',component:UserformComponent},
  {path:'tabform',component:Tab2Component},
  {path:'dashboard',component:DashboardComponent},
  {path:'form',component:FormComponent},
  {path:'form1',component:Form1Component},
  {path:'template',component:Template2Component},
  {path:'form2',component:Form2Component},
  {path:'form3',component:Form3Component},
  {path:'form4',component:Form4Component},
  {path:'form5',component:Form5Component},
  {path:'form6',component:Form6Component},
  {path:'form7',component:Form7Component},
  {path:'form8',component:Form8Component},
  {path:'hyperlink',component:HyperlinkComponent},
  {path:'entityreport',component:EntityreportComponent},
  {path:'companyreport',component:CompanyreportComponent},
  {path:'departmentreport',component:DepartmentreportComponent},
  {path:'employeereport',component:EmployeereportComponent},
  {path:'menu',component:MenureportComponent},
  {path:'role',component:RoleReportComponent},
  {path:'designation',component:DesignationReportComponent},
  {path:'section',component:SectionReportComponent},
  {path:'user',component:UserReportComponent},
  {path:'title',component:titlebarComponent},
  {path:'login',component:LoginComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'contact',component:ContactComponent},
  {path:'home3',component:HomeComponent},
  {path:'header',component:HeaderComponent},
  {path:'host',component:HostComponent},
  {path:'appointmentapproval',component:AppointmentApprovalComponent},
  {path:'approveuser',component:UnapprovedusersComponent},
  {path:'facility',component:FacilityComponent},
  {path:'appointmenttypeall',component:AppointmentTypeAllComponent},
  {path:'appointmenttype',component:AppointmentTypeComponent},
  {path:'visitorcard',component:TemplateComponent},
  {path:'facilityall', component : FacilityallComponent},
  {path:'appointmentreports',component:AppointmentsreportsComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'**',component:VmsHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
