//@ts-nocheck
import { useEffect, useState } from "react";
import { Employee, EmployeeContext } from "./Context.ts";
import PersonalInfo from "./PersonalInfo.tsx";
import WorkInfo from "./WorkInfo.tsx";
import './Style.css'


function EmployeeId() {
    
    const[ employeeId, setEmployeeId ] = useState<Employee>({

        id: 12345,
        name: 'Petrolino Smith',
        job: 'Server boy',
        photo: `data:image/jpeg;base64,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`,
        birthday: '01/12/1679',
        email: 'pertroliny@workplace.com',
        department: 'IT',
        joinedDate: '05/03/2009',
    })

    useEffect(() => {
        setTimeout(() => setEmployeeId({...employeeId, job:'Senior emergency solver'}), 5000)
        }, [employeeId]);

    return (

        <div>
            <EmployeeContext.Provider value={employeeId}>
                <div className="employee">
                <PersonalInfo/>
                <WorkInfo/>
                </div>

            </EmployeeContext.Provider>
        </div>

        
    )
}

export default EmployeeId