//@ts-nocheck
import { useContext } from "react"
import { EmployeeContext } from "./Context.ts"


function PersonalInfo() {

    const {id, job, department, joinedDate} = useContext(EmployeeContext)

    return (
        <div>
            <p>
                EmployeeId: 
                <br/>
                {id}
            </p>
            <p>
               Job: 
                <br/>
                {job}
            </p>
            <p>
                Working here since: 
                <br/>
                {joinedDate}
            </p>
            <p>
                department: 
                <br/>
                {department}
            </p>

        </div>
    )

}

export default PersonalInfo