import { Box, makeStyles, Typography } from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PropTypes from "prop-types";
import React, { useState } from "react";
import DialogResumeOverview from '../../features/Student/components/ViewDetail/DialogResumeOverview'

ResumeItem.propTypes = {
    title: PropTypes.string,
    resume: PropTypes.array,
};

ResumeItem.defaultProps = {
    title: "",
    resume: [],
};

const useStyles = makeStyles((theme) => ({
    root: {
        // border: "1px solid rgba(0, 0, 0, 0.1)",
        boxShadow: "0px 4px 16px rgba(64, 64, 64, 0.1)",
        borderRadius: "40px",
        padding: "0 1rem",
        width: "95%",
        height: "230px",
        marginTop: theme.spacing(8),
    },
    title: {
        textAlign: "center",

        "& > p": {
            display: "inline-block",
            backgroundColor: "#0DAB42",
            width: "252px",
            height: "50px",
            borderRadius: "0 0 40px 40px",
            textAlign: "center",
            color: "#FFF",
            lineHeight: "50px",
            boxShadow: "0px 4px 16px rgba(64, 64, 64, 0.1)",
            fontWeight: "bolder",
        },
    },

    info: {
        marginTop: theme.spacing(4),
    },

    item: {
        display: "flex",
        justifyContent: "space-around",
        marginBottom: theme.spacing(3),

        "& > p": {
            fontSize: "80%",
        },
    },
    icon: {
        cursor: 'pointer;'
    }
}));

function ResumeItem({ item, resume }) {
    const [openOverview, setOpenOverview] = useState(false);

    const classes = useStyles();
    return (
        <Box className={classes.item} key={item.cv.cV_ID}>
            <Typography variant="body2">{item.cv.name}</Typography>
            <VisibilityIcon color="primary" className={classes.icon} onClick={() => setOpenOverview(true)} />
            <DialogResumeOverview
                pdf={item.cv.data}
                open={openOverview}
                handleClickOpen={() => setOpenOverview(true)}
                handleClose={() => setOpenOverview(false)}
            />
        </Box>
    );
}

export default ResumeItem;
