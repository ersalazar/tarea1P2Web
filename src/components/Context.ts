import {createContext} from 'react'


export interface Employee {
    id: number,
    name: string,
    birthday: string,
    photo: string,
    job: string,
    email: string,
    department: string,
    joinedDate: string,
}

export const EmployeeContext = createContext<Employee>({
    id: 0,
    name: '',
    job: '',
    photo: ``,
    birthday: '',
    email: '',
    department: '',
    joinedDate:'',
})