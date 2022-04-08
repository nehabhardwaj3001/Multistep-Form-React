import React, { useState } from 'react';
import SignUpInfo from './SignUpInfo';
import PersonalInfo from './PersonalInfo';
import ProfessionalInfo from './ProfessionalInfo';


function Form() {
// const {reset} = useForm();
    const [page, setPage] = useState(0);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        firstName: "",
        lastName: "",
        age: "",
        academicQualifications: "",
        workExperience: "",
    });

    const formTitles = ['Sign Up', 'Personal Details', 'Professional Details'];

    const PageDisplay = () => {
        if (page === 0) {
            return <SignUpInfo formData={formData} setFormData={setFormData} />;
        } else if (page === 1) {
            return <PersonalInfo formData={formData} setFormData={setFormData} />;
        } else {
            return <ProfessionalInfo formData={formData} setFormData={setFormData} />;
        };
    };


    return (
        <div className='form'>
          <h6> Progress Bar </h6>

            <div className='progressbar'>
                <div style = {{ width: page === 0 ? '33.33%' : page === 1 ? '66.66%' : '100%' }} >
                    
                </div>
            </div>
            <div className='form-container'>
                <div className='header'>
                    <h1>{formTitles[page]}</h1>
                </div>
                <div className='body'> {PageDisplay()} </div>
                <div className='footer'>
                    <button
                        disabled={page === 0}
                        onClick={() => { setPage(page - 1); }}>
                        Previous</button>
                    <button onClick={() => { 
                        if(page === formTitles.length -1) {
                            alert("Submit the Form?")
                         }else{
                        setPage(page + 1); }}}>
                    
                      {page === formTitles.length-1 ? "SUBMIT" : "Next"}
                        
                    </button>
                </div></div>
        </div>

    );
}

export default Form;
