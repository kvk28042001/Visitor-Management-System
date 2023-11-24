export interface Visitor{
    visitor_id : number;
    visitor_name : string;
    visitor_address : string;
    visitor_email : string;
    visitor_phone1: string;
    visitor_phone2: string;
    visitor_photo: string;
    visitor_aadhar: string;
}

export interface Entity{
    entity_id : number;
    entity_description : string;
    status:boolean;
}

export interface Department{
    department_id : number;
    department_description : string;
    entity : Entity;
    status:false;
}

export interface Section{
    section_id : number;
    section_description : string;
    department :Department;
    status:false;

}

export interface ImageModel{
    id : number,
    name : string,
    type : string
}


export interface Facility{
    facility_id : number;
    facility_description : string;
    facilityCheckIn : string;
    facilityCheckOut : string
}

export interface MenuGroup{
    menu_id : number;
    menuName : string;
    menuGroup : string;
    status:false;
}

export interface Role{
    role_id : number;
    role_description : string;
    menuGroup : MenuGroup
    status:false;
}

export interface User{
    user_id : number;
    user_Username : string;
    user_email : string;
    user_phone1 : string;
    user_phone2 : string;
    user_password : string;
    role : Role;
    section : Section;
    status:false;
}

export interface Contact{
    contactId : number,
    name : string,
    email : string,
    phone : string
}

export interface SectionVisited{
    sectionVisited_id :number;
    section : Section;
    sectionCheckIn : string;
    sectionCheckOut : string;
}

export interface FacilityVisited{
    facilityVisited_id : number;
    facility : Facility;
    facilityCheckIn : string;
    facilityCheckOut : string;
}


export interface Appointment{
    appointment_id : number;
    appointment_start : string;
    appointment_end : string;
    visitor : Visitor;
    vehicle: Vehicle;
    item:Item[];
    approver : User;
    facilityVisitedList : FacilityVisited[];
    sectionVisitedList : SectionVisited[];
    appointment_type : string;
    checkInTime : string;
    checkOutTime : string;
}

export interface Vehicle{
    vehicleId : number;
    vehicleNumber : string;
    vehicleType : string;
    driverLicense : string;
    driverName : string;
    driverPhoto : string,
    vehicleCopy : string
    
}

export interface Item{
    item_id : number;
    item_Name : string;
    item_Description : string;
}

export interface Template{
    // id : number;
    appointment : Appointment;
    sectionVisitedList : Section,
    item : Item
}

export interface Company{
    companyId : number,
    name : string,
    logoPath : string,
    address : string,
    address1 : string,
    address2 : string,
    phoneNo : string,
    phoneNo1 : string,
    email : string,
    website : string
}
export interface  CompanyEntity{
    entityId : number,
    entityName : string,
    status : boolean,
}

export interface EmailDetails{
    mailNo : number,
    sender : string,
    recipient : string,
    msgBody : string,
	subject : string,
	attachment : string;
}

export interface Employee{
    employeeId : number,
    employeeName : string,
    employeeEmail : string;
    companyEntity : Entity,
    designation : Designation,
    department : Department,
    section : Section,
    status:false;
}

export interface Designation{
    designationId : number,
    designation : string,
    status:false;
}

export interface Appointment1{
    appointment_id : number;
    appointment_start : string;
    appointment_end : string;
    visitors : Visitor1[];
    vehicles : Vehicle[];
    facilityVisitedList : FacilityVisited[];
    sectionVisitedList : SectionVisited[];
    appointment_type : AppointmentType;
    checkInTime : string;
    checkOutTime : string;
    companyName : string,
    place : string,
    companyPhone : string
}

export interface Visitor1{
    visitor_id : number;
    visitor_name : string;
    visitor_address : string;
    visitor_email : string;
    visitor_phone1: string;
    visitor_phone2: string;
    visitor_photo: string;
    visitor_aadhar: string;
    items : Item1[]
}

export interface Item1{
    item_id : number,
    item_Name : string,
    item_Description : string,
    item_count : number
}

export interface AppointmentType{
    appointmentTypeId : number;
    appointmentType : string;
    status : boolean;
}
export interface login{
    email: string,
    password: string
}

export interface Login{
    loginId : number,
    clientIP : string,
    user : User
}

export interface Host{
    hostId : number;
    receiverMailId: string;
    hostMailId: string;
    employee: Employee;
    appointment : Appointment1;
    otp: number;
    approved: boolean;

}