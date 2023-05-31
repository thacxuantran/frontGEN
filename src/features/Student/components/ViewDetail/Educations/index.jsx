import React from 'react';
import './styles.scss'
import SelectDot from '../SelectDot';
import Divider from '@material-ui/core/Divider';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import SchoolIcon from '@material-ui/icons/School';
import DialogEducations from '../DialogEducations';

const formatDate = (str) => {
    let date = new Date(str);
    return ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + date.getFullYear()
}
const Educations = ({ item, onDeleteEducation, onUpdateEducation, index }) => {
    const [openEduDiaLog, setOpenEduDiaLog] = React.useState(false);
    const handleClickOpenEduDiaLog = () => {
        setOpenEduDiaLog(true);
    };

    const handleCloseEduDiaLog = () => {
        setOpenEduDiaLog(false);
    };

    const handleDeleteEducation = (id) => {
        onDeleteEducation(id)
    }
    return (
        <div className="educations-content__item">
            <SchoolIcon style={{ color: '#0DAB42', fontSize: 28, marginRight: 15 }} />
            <div>
                <p className="educations-content__item__title">{item.education.school}</p>
                <p>{formatDate(item.education.from_Date)} - {formatDate(item.education.to_Date)}</p>
                <p>Major: {item.education.major}</p>
                <p>{item.education.achievements ? 'Achievement: ' + item.education.achievements : null} </p>
            </div>
            <SelectDot onUpdate={handleClickOpenEduDiaLog} onDelete={handleDeleteEducation} id={item.education.education_ID} />
            <DialogEducations index={index} item={item.education} onSubmitEducation={onUpdateEducation} open={openEduDiaLog} handleClickOpen={handleClickOpenEduDiaLog} handleClose={handleCloseEduDiaLog} />
        </div>
    );
}

export default Educations;