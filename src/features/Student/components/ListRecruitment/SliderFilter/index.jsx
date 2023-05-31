import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { PHOTO_CATEGORY_OPTIONS } from '../../../../../constants/global';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core';
import OptionFilterSlider from '../../../../../components/form-control/OptionFilterSlider';


const useStyles = makeStyles((theme) => ({
    filter: {
        width: '18%',

        '& > div': {
            border: '1px solid #0DAB42',
            fontFamily: 'Samsung Sharp Sans Regular',
            borderRadius: '10px',
            fontSize: '14px',

            '&:hover': {
                border: '1px solid #0DAB42',
            },

            // '& > div:first-child': {

            // },
            '& > div:last-child': {
                '& > span': {
                    display: 'none',
                },
                '& > div': {},
            },
        },
    },
}));
function SliderFilter({ placeholder, typeFilter, onChange, value, minSalary, maxSalary }) {
    const classes = useStyles();
    const [typeOfJob, setTypeOfJob] = useState([]);
    console.log(typeFilter);

    const schema = Yup.object().shape({});

    const { handleSubmit, control, reset, formState } = useForm({
        defaultValues: {
            nameSearch: { value },
        },
        resolver: yupResolver(schema),
    });

    return (
        <>
            <OptionFilterSlider
                name='salarySlider'
                placeholder={placeholder}
                options={typeFilter}
                control={control}
                className={classes.filter}
                value={value}
                onChangeFilter={onChange}
                maxSalary={maxSalary}
                minSalary={minSalary}
            />
        </>
    );
}

SliderFilter.propTypes = {};

export default SliderFilter;
