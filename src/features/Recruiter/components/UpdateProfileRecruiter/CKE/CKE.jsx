import ClassicEditor from "ckeditor5-custom-build/build/ckeditor";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogActions from "@material-ui/core/DialogActions";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CloseIcon from "@material-ui/icons/Close";
import React, { useState } from "react";
import "./CKE.scss";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});
const useStyles = makeStyles((theme) => ({
  dialogCKE: {
    "& .MuiDialog-paperWidthSm ": {
      width: 1000,
      height: 700,
      background: "#FFFFFF",
      maxWidth: "unset !important",
      alignItems: "center",
    },
  },
}));
const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

function MyCustomUploadAdapterPlugin(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return new MyUploadAdapter(loader);
  };
}

class MyUploadAdapter {
  constructor(props) {
    // CKEditor 5's FileLoader instance.
    this.loader = props;
    // URL where to send files.
    this.url = "https://api.cloudinary.com/v1_1/genfptu/image/upload"; //`${ENV}/Services/SaveImage`;
  }

  // Starts the upload process.
  upload() {
    return this.loader.file.then(
      (file) =>
        new Promise((resolve, reject) => {
          this._initRequest();
          this._initListeners(resolve, reject, file);
          this._sendRequest(file);
        })
    );
  }

  // Aborts the upload process.
  abort() {
    if (this.xhr) {
      this.xhr.abort();
    }
  }

  // Example implementation using XMLHttpRequest.
  _initRequest() {
    const xhr = (this.xhr = new XMLHttpRequest());

    xhr.open("POST", this.url, true);
    xhr.responseType = "json";
    //xhr.setRequestHeader('Authorization', getToken())
  }

  // Initializes XMLHttpRequest listeners.
  _initListeners(resolve, reject, file) {
    const xhr = this.xhr;
    const loader = this.loader;
    const genericErrorText = `Couldn't upload file: ${file.name}.`;

    xhr.addEventListener("error", () => reject(genericErrorText));
    xhr.addEventListener("abort", () => reject());
    xhr.addEventListener("load", () => {
      const response = xhr.response;
      if (!response || response.error) {
        return reject(
          response && response.error ? response.error.message : genericErrorText
        );
      }
      resolve({
        default: response.url,
      });
    });
    if (xhr.upload) {
      xhr.upload.addEventListener("progress", (evt) => {
        if (evt.lengthComputable) {
          loader.uploadTotal = evt.total;
          loader.uploaded = evt.loaded;
        }
      });
    }
  }

  // Prepares the data and sends the request.
  _sendRequest(file) {
    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "genimg");
    data.append("tags", "browser_upload");

    this.xhr.send(data);
  }
}

export default function CustomizedDialogs({
  onSetUpdate,
  defaultRecruiter,
  onChangeOverall,
}) {
  // ClassicEditor
  //   .create(document.querySelector('#editor'), {
  //     plugins: [Image, ImageResize],
  //   })
  const handleChange = (e, editor) => {
    const data = editor.getData();
    setDefaultValue(data);
    console.log("CKE:", data);
  };

  const classes = useStyles();
  const [defautValue, setDefaultValue] = useState(defaultRecruiter.description);
  const handleSubmitChange = () => {
    if (onChangeOverall) {
      onChangeOverall({ overall: defautValue });
    }
    onSetUpdate(false);
  };
  const custom_config = {
    extraPlugins: [MyCustomUploadAdapterPlugin],
    toolbar: {
      items: [
        "heading",
        "|",
        "bold",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "|",
        "outdent",
        "indent",
        "imageUpload",
        "blockQuote",
        "insertTable",
        "mediaEmbed",
        "|",
        "ChemType",
        "todoList",
        "imageInsert",
        "horizontalLine",
        "fontFamily",
        "fontSize",
        "htmlEmbed",
        "alignment",
        "|",
        "undo",
        "redo",
      ],
    },
    table: {
      contentToolbar: ["tableColumn", "tableRow", "mergeTableCells"],
    },
    mediaEmbed: {
      previewsInData: true,
    },
    // image: {
    //   toolbar: [
    //     'imageStyle:full',
    //     'imageStyle:side',
    //     '|',
    //     'imageTextAlternative'
    //   ],
    //   styles: [
    //     'full',
    //     'side'
    //   ]
    // }
  };
  // {
  //   ckfinder: {
  //     uploadUrl:
  //       "https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json",
  //   },
  // }
  return (
    <div className="root-overall">
      {/* <DialogTitle id="customized-dialog-title" onClose={handleClose}>
        Update Overall.
      </DialogTitle> */}
      <div className="ckeditor ck-content">
        <CKEditor
          editor={ClassicEditor}
          data={defautValue}
          onChange={handleChange}
          className={classes.editors}
          config={custom_config}
        />
      </div>
      <div className="btn-wrapper">
        <button
          size="large"
          className="paper__form__container__btn"
          autoFocus
          onClick={handleSubmitChange}
          color="primary"
        >
          Update
        </button>
      </div>
    </div>
  );
}
