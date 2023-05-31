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
import TagInput from "./DialogTagInput";
import { Container, Grid, makeStyles } from "@material-ui/core";


export default function DialogTagLanguages({ items, open, handleClickOpen, handleClose, onSubmitLanguages }) {
    const getNameLanguages = (items) => {
        let arr = [];
        items.forEach((item) => {
            arr.push(item.language.locale);
        })
        return arr;
    }
    const [tags, setTags] = React.useState(getNameLanguages(items));
    const useStyles = makeStyles((theme) => ({

        dialog: {
            '& .MuiDialog-paperWidthXs': {
                width: 700,
                maxWidth: "unset !important",
            },
            '& .MuiTypography-h6': {
                color: '#0DAB42;'
            }

        }
    }));

    const schema = Yup.object().shape({
        email: Yup.string().email(),
        password: Yup.string().required(),
    });

    const { handleSubmit, control, reset } = useForm({
        defaultValues: {
            tagJob: "",
        },
        resolver: yupResolver(schema),
    });
    const handleSubmited = (event) => {
        event.preventDefault();
        const languages = {
            Locales: tags
        };
        onSubmitLanguages(languages);
        handleClose();
    }
    const handleSetTags = (tags) => {
        setTags(tags);
    }
    const classes = useStyles();
    return (
        <div >
            <Dialog className={classes.dialog} maxWidth="xs" open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <form onSubmit={(handleSubmited)}>
                    <DialogTitle id="form-dialog-title">Languages</DialogTitle>
                    <DialogContent className={classes.dialogcontent}>
                        <div className="job_tags">
                            <TagInput onSetTags={handleSetTags} control={control} name="tagJob" names={tags} />
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button type="submit" color="primary">
                            Update
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div >
    );
}
