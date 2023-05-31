import React from 'react';
import './styles.scss'
import SelectDot from '../SelectDot';
import Divider from '@material-ui/core/Divider';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import DialogExperiences from '../DialogExperiences';
const formatDate = (str) => {
    let date = new Date(str);
    return ((date.getDate() > 9) ? date.getDate() : ('0' + date.getDate())) + '/' + ((date.getMonth() > 8) ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1))) + '/' + date.getFullYear()
}
function _usfTruncate(str, size = 100, description_words = '...') {
    if (!str)
        return "";
    if (str.length && str.length <= size)
        return str;
    return str.slice(0, size) + description_words
}
const Experiences = ({ index, item, onDeleteExperience, onUpdateExperience }) => {
    const [openExDiaLog, setOpenExDiaLog] = React.useState(false);
    const handleClickOpenExDiaLog = () => {
        setOpenExDiaLog(true);
    };

    const handleCloseExDiaLog = () => {
        setOpenExDiaLog(false);
    };
    return (
        <div className="experiences-content__item">
            <SelectDot onUpdate={handleClickOpenExDiaLog} onDelete={onDeleteExperience} id={item.experience.experience_ID} />
            <LocationCityIcon style={{ color: '#0DAB42', fontSize: 28, marginRight: 15 }} />
            <div>
                <p className="experiences-content__item__title">{item.experience.position}</p>
                <p className="experiences-content__item__name">{item.experience.company}</p>
                <p>{formatDate(item.experience.from_Date)} - {formatDate(item.experience.to_Date)}</p>
                <p className="experiences-content__item__description">{_usfTruncate(item.experience.description, 500)}</p>
            </div>
            <DialogExperiences index={index} onSubmitExperience={onUpdateExperience} item={item.experience} open={openExDiaLog} handleClickOpen={handleClickOpenExDiaLog} handleClose={handleCloseExDiaLog} />
        </div>
    );
}

export default Experiences;