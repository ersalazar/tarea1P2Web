//@ts-nocheck
import { useContext } from "react"
import { EmployeeContext } from "./Context.ts"
import './Style.css'


function PersonalInfo() {

    const {name, birthday, photo, email} = useContext(EmployeeContext)

    return (
        <div className="personalInfo">
            <h2>{name}</h2>
            <br />
            <img src={photo} alt="" />
            <br />
            <p>
                Date of Birth: 
                <br/>
                {birthday}
            </p>
            <p>
                Email: 
                <br/>
                {email}
            </p>

        </div>
    )

}

export default PersonalInfo