import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompanyEntityFormComponent } from './Components/CompanyEntity/companyEntityform post/CompanyEntity post form/companyentityform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { CompanyEntityComponent } from './Components/CompanyEntity/CompanyEntity All/CompanyEntity/companyentity.component';
import { HeaderComponent } from './Components/header/header.component';
import { HomeComponent } from './Components/home/home.component';
import { SidenavComponent } from './Components/sidenav/sidenav.component';
import { VmsHomeComponent } from './Components/vms-home/vms-home.component';
import { DepartmentfromComponent } from './Components/Department complete/departmentfrom/departmentfrom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgGridModule } from 'ag-grid-angular';
import { DepartmentallComponent } from './Components/Department complete/departmentall/departmentall.component';
import { EmployeeAllComponent } from './Components/Employee Complete/employee-all/employee-all.component';
import { MenuAllComponent } from './Components/Menu complete/menu-all/menu-all.component';
import { MenufromComponent } from './Components/Menu complete/menufrom/menufrom.component';
import { RolesfromComponent } from './Components/Role Complete/rolesfrom/rolesfrom.component';
import { SectionfromComponent } from './Components/Section  complete/sectionfrom/sectionfrom.component';
import { EmployesfromComponent } from './Components/Employee Complete/employesfrom/employesfrom.component';
import { RoleAllComponent } from './Components/Role Complete/role-all/role-all.component';
import { SectionAllComponent } from './Components/Section  complete/section-all/section-all.component';
import { OutpostComponent } from './Components/CompanyInFo (1)/CompanyInFo/outpost/outpost.component';
import { CompanyComponent } from './Components/CompanyInFo (1)/company/company.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { UserallComponent } from './Components/User complete/User All/userall.component';
import { UserformComponent } from './Components/User complete/User Form/userform.component';
import { AssetComponent } from './Components/asset/asset.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ImageuploadComponent } from './Components/imageupload/imageupload.component';
import { DesignationAllComponent } from './Components/Designation Complete/designation-all/designation-all.component';
import { DesignationFormComponent } from './Components/Designation Complete/designation-form/designation-form.component';
import { MyCellComponent } from './my-cell/my-cell.component';
import { MyCellEntityComponent } from './my-cell-entity/my-cell-entity.component';
import { MyCellDepartmentComponent } from './my-cell-department/my-cell-department.component';
import { MyCellEmployeeComponent } from './my-cell-employee/my-cell-employee.component';
import { MyCellMenuComponent } from './my-cell-menu/my-cell-menu.component';
import { MyCellRoleComponent } from './my-cell-role/my-cell-role.component';
import { MyCellDesignationComponent } from './my-cell-designation/my-cell-designation.component';
import { MyCellSectionComponent } from './my-cell-section/my-cell-section.component';
import { MyCellUserComponent } from './my-cell-user/my-cell-user.component';
import { MaterialModule } from './material/material.module';
import { TabComponent } from './Components/tab/tab.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { CardimageComponent } from './Components/cardimage/cardimage.component';
import { ChartModule } from 'angular2-chartjs';
import { FooterComponent } from './Components/footer/footer.component';
import { FormComponent } from './Components/form/form.component';
import { Form1Component } from './Components/form1/form1.component';
import { Form2Component } from './Components/form2/form2.component';
import { Form3Component } from './Components/form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { NgxPrintModule } from 'ngx-print';
import { Form5Component } from './form5/form5.component';
import { Form6Component } from './form6/form6.component';
import { Form7Component } from './form7/form7.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ContactComponent } from './Components/contact/contact.component';
import { Form8Component } from './form8/form8.component';
import { MyCellAppointmentComponent } from './my-cell-appointment/my-cell-appointment.component';
import { titlebarComponent } from './Components/titlebar/titlebarComponent';
import { LoginComponent } from './login/login.component';
import { ShopComponent } from './Components/shop/shop.component';
import { EntityreportComponent } from './Components/CompanyEntity/entityreport/entityreport.component';
import { CompanyreportComponent } from './Components/CompanyInFo (1)/companyreport/companyreport.component';
import { DepartmentreportComponent } from './Components/Department complete/departmentreport/departmentreport.component';
import { DesignationReportComponent } from './Components/Designation Complete/designation-report/designation-report.component';
import { EmployeereportComponent } from './Components/Employee Complete/employeereport/employeereport.component';
import { HyperlinkComponent } from './Components/hyperlink/hyperlink.component';
import { MenureportComponent } from './Components/Menu complete/menureport/menureport.component';
import { RoleReportComponent } from './Components/Role Complete/role-report/role-report.component';
import { SectionReportComponent } from './Components/Section  complete/section-report/section-report.component';
import { UserReportComponent } from './Components/User complete/user-report/user-report.component';
import { UpdatecompanyComponent } from './Components/CompanyInFo (1)/updatecompany/updatecompany.component';
import { NewformComponent } from './newform/newform.component';
import { Tab2Component } from './Components/tab2/tab2.component';
import { Template2Component } from './Components/template2/template2.component';
import { YetToVisitCountComponentComponent } from './Components/yet-to-visit-count-component/yet-to-visit-count-component.component';
import { AppointmentCountComponentComponent } from './Components/appointment-count-component/appointment-count-component.component';
import { CheckInCountComponentComponent } from './Components/check-in-count-component/check-in-count-component.component';
import { CheckOutCountComponentComponent } from './Components/check-out-count-component/check-out-count-component.component';
import { Home2Component } from './Components/home2/home2.component';
import { EditProfileComponent } from './Components/edit-profile/edit-profile.component';
import { AppointmentTypeComponent } from './Components/appointment-type/appointment-type.component';
import { AppointmentTypeAllComponent } from './Components/appointment-type-all/appointment-type-all.component';
import { MyCellappointmentTypeComponent } from './my-cellappointment-type/my-cellappointment-type.component';
import { Login2Component } from './Components/login2/login2.component';
import { HostComponent } from './Components/host/host.component';
import { FacilityComponent } from './Components/facility/facility.component';
import { AppointmentApprovalComponent } from './Components/appointment-approval/appointment-approval.component';
import { ConfirmationBoxComponent } from './confirmation-box/confirmation-box.component';
import { UnapprovedusersComponent } from './unapprovedusers/unapprovedusers.component';
import { TemplateComponent } from './Components/template/template.component';
import { WebcamModule } from 'ngx-webcam';
import { FacilityallComponent } from './Components/facilityall/facilityall.component';
import { MyCellFacilityComponent } from './my-cell-facility/my-cell-facility.component';
import { AppointmentsreportsComponent } from './appointmentsreports/appointmentsreports.component';
import { AlertmessageComponent } from './alertmessage/alertmessage.component';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ImagecellrendererComponent } from './imagecellrenderer/imagecellrenderer.component';
import { NewhomepageComponent } from './newhomepage/newhomepage.component';



function agGridWithComponents() {
  return {
    ngModule: AgGridModule,
    providers: [],
  };
}

@NgModule({
  declarations: [
    AppComponent,
    CompanyEntityFormComponent,
    CompanyEntityComponent,
    HeaderComponent,
    HomeComponent,
    SidenavComponent,
    VmsHomeComponent,
    DepartmentfromComponent,
    EmployesfromComponent,
    MenufromComponent,
    RolesfromComponent,
    SectionfromComponent,
    DepartmentallComponent,
    EmployeeAllComponent,
    MenuAllComponent,
    RoleAllComponent,
    SectionAllComponent,
    OutpostComponent,
    CompanyComponent,
    UserallComponent,
    UserformComponent,
    AssetComponent,
    ImageuploadComponent,
    DesignationAllComponent,
    DesignationFormComponent,
    MyCellComponent,
    MyCellEntityComponent,
    MyCellDepartmentComponent,
    MyCellEmployeeComponent,
    MyCellMenuComponent,
    MyCellRoleComponent,
    MyCellDesignationComponent,
    MyCellSectionComponent,
    MyCellUserComponent,
    TabComponent,
    DashboardComponent,
    ProfileComponent,
    CardimageComponent,
    FooterComponent,
    FormComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    Form5Component,
    Form6Component,
    Form7Component,
    ContactComponent,
    AppointmentComponent,
    Form8Component,
    ShopComponent,
    MyCellAppointmentComponent,
    LoginComponent,
    EntityreportComponent,
    CompanyreportComponent,
    DepartmentreportComponent,
    DesignationReportComponent,
    EmployeereportComponent,
    HyperlinkComponent,
    MenureportComponent,
    RoleReportComponent,
    SectionReportComponent,
    UserReportComponent,
    UpdatecompanyComponent,
    NewformComponent,
    Tab2Component,
    Template2Component,
    YetToVisitCountComponentComponent,
    AppointmentCountComponentComponent,
    CheckInCountComponentComponent,
    CheckOutCountComponentComponent,
    Home2Component,
    EditProfileComponent,
    AppointmentTypeComponent,
    AppointmentTypeAllComponent,
    MyCellappointmentTypeComponent,
    Login2Component,
    HostComponent,
    FacilityComponent,
    AppointmentApprovalComponent,
    ConfirmationBoxComponent,
    UnapprovedusersComponent,
    TemplateComponent,
    FacilityallComponent,
    MyCellFacilityComponent,
    AppointmentsreportsComponent,
    AlertmessageComponent,
    ForgotpasswordComponent,
    ImagecellrendererComponent,
    NewhomepageComponent,
  
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSlideToggleModule,
    MatTabsModule,
    NgxPrintModule,
    MaterialModule,
    ChartModule,
    WebcamModule,
    agGridWithComponents(),
  ],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy },],
  bootstrap: [AppComponent],
})
export class AppModule {}
