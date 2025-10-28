export interface IModuleDic {
    MONITORING_ROUTES: 'MONITORING_ROUTES';
    MONITORING_METERS: 'MONITORING_METERS';
    SUBCATEGORIES: 'SUBCATEGORIES';
    METER_DEVICES: 'METER_DEVICE';
    USERS_GROUPS: 'USERS_GROUPS';
    METER_MODELS: 'METER_MODELS';
    TYPE_STATUS: 'TYPE_STATUS';
    METER_MARKS: 'METER_MARKS';
    METER_UNITS: 'METER_UNITS';
    GPS_DEVICE: 'GPS_DEVICE';
    GPS_MODELS: 'GPS_MODELS';
    CATEGORIES: 'CATEGORIES';
    GPS_MARKS: 'GPS_MARKS';
    STATIONS: 'STATIONS';
    STATUS: 'STATUS';
    FLEETS: 'FLEETS';
    TRUCKS: 'TRUCKS';
    CITIES: 'CITIES';
    USERS: 'USERS';
}
export type TModules = 'MONITORING_ROUTES' | 'MONITORING_METERS' | 'SUBCATEGORIES' | 'METER_DEVICE' | 'USERS_GROUPS' | 'METER_MODELS' | 'TYPE_STATUS' | 'METER_MARKS' | 'METER_UNITS' | 'GPS_DEVICE' | 'GPS_MODELS' | 'CATEGORIES' | 'GPS_MARKS' | 'STATIONS' | 'STATUS' | 'FLEETS' | 'TRUCKS' | 'CITIES' | 'USERS';
export type TRole = 'OPERATOR' | 'SUPERVISOR' | 'COORDINATOR' | 'ADMINISTRATOR';
export declare enum ERoleLabel {
    OPERATOR = "Operador",
    SUPERVISOR = "Supervisor",
    COORDINATOR = "Coordinador",
    ADMINISTRATOR = "Administrador"
}
export type TCIType = 'V' | 'E' | 'P' | 'J' | 'G';
export interface ICI {
    type: TCIType;
    number: string;
    image: string;
}
export interface IUserGroup {
    id: number;
    title: string;
    description: string;
    moduleAccess: TModules[] | string[];
    isActive: boolean;
}
export interface IUser {
    id: number;
    names: string;
    username: string;
    surnames: string;
    email: string;
    photo: string;
    phone: string;
    ci: ICI;
    role: TRole;
    group: IUserGroup;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}
export interface IDataToCreateUser {
    names: string;
    surnames: string;
    username: string;
    ciType: string;
    ciNumber: string;
    phoneCode: string;
    phoneNumber: string;
    email: string;
    isActive: 'true' | 'false';
    role: TRole;
}
export interface IUserDetail extends IUser {
}
export interface IDataToEditUser extends IDataToCreateUser {
    group: IUserGroup;
}
export interface IDataToCreateUserGroup {
    title: string;
    description: string;
    isActive: boolean;
    users?: IUser[];
}
export interface IDataToEditUserGroup extends IDataToCreateUserGroup {
}
