import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Container, Grid, makeStyles } from "@material-ui/core";
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import AllPagePDF from '../AllPagePDF'


export default function DialogResumeOverview({ pdf, overviewDefault, open, handleClickOpen, handleClose, onSubmitOverview }) {
    const useStyles = makeStyles((theme) => ({

        dialog: {
            '& .MuiDialogContent-root:first-child': {
                "padding": "0 !important",
            },
            '& .react-pdf__Page__canvas': {
                "width": '800px !important',
                "height": "1200px !important"
            },
            '& .MuiDialog-paperWidthXs': {
                width: "auto",
                maxWidth: "unset !important",
            },
            '& .MuiDialogActions-root': {
                justifyContent: 'center',
            },
            '& .paper__form': {
                marginTop: 'auto !important'
            }

        }
    }));
    const [overview, setOverview] = React.useState(overviewDefault);

    const classes = useStyles();

    const handleSubmited = (event) => {
        event.preventDefault();
        onSubmitOverview({ overview: overview });
        handleClose();
    };
    const handleChange = (event) => {
        setOverview(event.target.value)
    }
    return (
        <div >
            <Dialog className={classes.dialog} maxWidth="xs" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <form
                    className="paper__form"
                    onSubmit={handleSubmited}
                >
                    <DialogContent>
                        <AllPagePDF pdf={pdf} />
                    </DialogContent>
                </form>
            </Dialog>
        </div >
    );
}
