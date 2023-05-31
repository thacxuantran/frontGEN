import React from 'react';
import './styles.scss'
import TopProfile from '../TopProfile';
import BottomResume from '../BottomResume';
const MainUploadCV = ({ loadingAvatar, onDeleteCV, onChangeImage, onUploadCV, onUpdateCertificate, onUpdateStatus, onUpdateEducation, onUpdateExperience, onDeleteCertificate, onDeleteEducation, onDeleteExperience, onSubmitLanguages, studentDetail, onSubmitPersonalInformation, onSubmitOverview, onSubmitExperience, onSubmitEducation, onSubmitCert, onSubmitSkills }) => {
    return (
        <div className='main-profile'>
            <TopProfile onUpdateStatus={onUpdateStatus} studentDetail={studentDetail} onChangeImage={onChangeImage} loadingAvatar={loadingAvatar} />
            <BottomResume onDeleteCV={onDeleteCV} onUploadCV={onUploadCV} onUpdateEducation={onUpdateEducation} onUpdateExperience={onUpdateExperience} onDeleteCertificate={onDeleteCertificate} onDeleteEducation={onDeleteEducation} onDeleteExperience={onDeleteExperience} onSubmitLanguages={onSubmitLanguages} onSubmitSkills={onSubmitSkills} onSubmitCert={onSubmitCert} onSubmitEducation={onSubmitEducation} onSubmitExperience={onSubmitExperience} onSubmitOverview={onSubmitOverview} onSubmitPersonalInformation={onSubmitPersonalInformation} studentDetail={studentDetail} />
        </div>
    );
}

export default MainUploadCV;