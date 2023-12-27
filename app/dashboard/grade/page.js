'use client'
import { useState } from "react";
import Dropdown from "@/components/Dropdown";

const Grade = () => {
    const options = [
        { label: 'JSS1', value: 'JSS1' },
        { label: 'JSS2', value: 'JSS2' },
        { label: 'JSS3', value: 'JSS3' },
    ]

    const [value, setValue] = useState("fruit")

    const handleChangeOption = (e) => {
        setValue(e.target.value);
    }

    return ( 
        <div className="grade-container">
            <Dropdown 
            label="Enter your school year"
            options = {options}
            value= {value}
            onChange = {handleChangeOption}
            />
            <form>
                
            </form>
        </div>
     );
}
 
export default Grade;