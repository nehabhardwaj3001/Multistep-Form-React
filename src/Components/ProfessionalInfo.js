import React from 'react'

function ProfessionalInfo({ formData, setFormData }) {
    return (
        <div className='professional-info-container'>
            <input type="text" placeholder='Academic Qualifications' value={formData.academicQualification}
                onChange={(e) => setFormData({ ...formData, academicQualification: e.target.value })}
            />
            <input type="text" placeholder='Work Experience' value={formData.workExperience}
                onChange={(e) => setFormData({ ...formData, workExperience: e.target.value })}
            />

        </div>
    );
}

export default ProfessionalInfo