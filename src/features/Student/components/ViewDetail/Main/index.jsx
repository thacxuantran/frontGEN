import React from 'react';
import './styles.scss'
import TopProfile from '../TopProfile';
import BottomProfile from '../BottomProfile';
const Main = ({ loadingAvatar, onChangeImage, onUpdateStatus, onUpdateCertificate, onUpdateEducation, onUpdateExperience, onDeleteCertificate, onDeleteEducation, onDeleteExperience, onSubmitLanguages, studentDetail, onSubmitPersonalInformation, onSubmitOverview, onSubmitExperience, onSubmitEducation, onSubmitCert, onSubmitSkills }) => {
    return (
        <div className='main-profile'>
            <TopProfile onChangeImage={onChangeImage} onUpdateStatus={onUpdateStatus} studentDetail={studentDetail} loadingAvatar={loadingAvatar} />
            <BottomProfile onUpdateCertificate={onUpdateCertificate} onUpdateEducation={onUpdateEducation} onUpdateExperience={onUpdateExperience} onDeleteCertificate={onDeleteCertificate} onDeleteEducation={onDeleteEducation} onDeleteExperience={onDeleteExperience} onSubmitLanguages={onSubmitLanguages} onSubmitSkills={onSubmitSkills} onSubmitCert={onSubmitCert} onSubmitEducation={onSubmitEducation} onSubmitExperience={onSubmitExperience} onSubmitOverview={onSubmitOverview} onSubmitPersonalInformation={onSubmitPersonalInformation} studentDetail={studentDetail} />
        </div>
    );
}

export default Main;