export interface tableInfo {
    name: string,
    experename: string,
    patientId: number,
    dateTime: string,
    time: Date,
    status: {
        number: number
    }
}
export interface reInfo {
    fristName: string,
    lastName: string,
    telephone: number,
    email: string,
    password: string | number,
    rePassword: string | number,
}

