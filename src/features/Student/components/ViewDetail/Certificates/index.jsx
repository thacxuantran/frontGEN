import React from 'react';
import './styles.scss'
import SelectDot from '../SelectDot';
import Divider from '@material-ui/core/Divider';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import DialogCert from '../DialogCert';
function _usfTruncate(str, size = 100, description_words = '...') {
    if (!str)
        return "";
    if (str.length && str.length <= size)
        return str;
    return str.slice(0, size) + description_words
}
const Certificates = ({ item, onDeleteCertificate, onUpdateCertificate, index }) => {
    const [openCertDiaLog, setOpenCertDiaLog] = React.useState(false);
    const handleClickOpenCertDiaLog = () => {
        setOpenCertDiaLog(true);
    };

    const handleCloseCertDiaLog = () => {
        setOpenCertDiaLog(false);
    };
    return (

        <div className="certificates-content__item">
            <svg className="cert-icon" viewBox="0 0 63 63" fill="none" xmlns="https://www.w3.org/2000/svg">
                <path d="M39.375 47.25C43.7242 47.25 47.25 43.7242 47.25 39.375C47.25 35.0258 43.7242 31.5 39.375 31.5C35.0258 31.5 31.5 35.0258 31.5 39.375C31.5 43.7242 35.0258 47.25 39.375 47.25Z" stroke="#0DAB42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M34.125 45.9375V57.75L39.375 53.8125L44.625 57.75V45.9375" stroke="#0DAB42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M26.25 49.875H13.125C11.7326 49.875 10.3973 49.3219 9.41269 48.3373C8.42812 47.3527 7.875 46.0174 7.875 44.625V18.375C7.875 15.4875 10.2375 13.125 13.125 13.125H49.875C51.2674 13.125 52.6027 13.6781 53.5873 14.6627C54.5719 15.6473 55.125 16.9826 55.125 18.375V44.625C55.1241 45.5457 54.881 46.4499 54.4203 47.2469C53.9596 48.044 53.2973 48.7059 52.5 49.1663" stroke="#0DAB42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.75 23.625H47.25" stroke="#0DAB42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.75 31.5H23.625" stroke="#0DAB42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M15.75 39.375H21" stroke="#0DAB42" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <div className="certificates-content__item__wrapperitem">
                <a target="_blank" href={item.certificate.certificate_Image_Link} className="certificates-content__item__title">{item.certificate.certificate_Title}</a>
                <p className="certificates-content__item__brand">{item.certificate.issuing_Organization}</p>
                <p>{_usfTruncate(item.certificate.certificate_Description, 500)}</p>
            </div>
            <SelectDot onUpdate={handleClickOpenCertDiaLog} onDelete={onDeleteCertificate} id={item.certificate.certificate_ID} />
            <DialogCert index={index} item={item.certificate} onSubmitCert={onUpdateCertificate} open={openCertDiaLog} handleClickOpen={handleClickOpenCertDiaLog} handleClose={handleCloseCertDiaLog} />
        </div>
    );
}

export default Certificates;