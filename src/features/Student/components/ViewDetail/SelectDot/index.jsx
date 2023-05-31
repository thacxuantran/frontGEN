// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Popover from '@material-ui/core/Popover';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import './styles.scss'
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

// const useStyles = makeStyles((theme) => ({
//     typography: {
//         padding: theme.spacing(2),
//     },
// }));

// export default function SelectDot() {
//     const classes = useStyles();
//     const [anchorEl, setAnchorEl] = React.useState(null);

//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     const open = Boolean(anchorEl);
//     const id = open ? 'simple-popover' : undefined;

//     return (
//         <div className="icon-select">
//             <svg onClick={handleClick} width="26" height="6" viewBox="0 0 26 6" fill="none" xmlns="https://www.w3.org/2000/svg">
//                 <path d="M3.625 5.8125C2.87908 5.8125 2.16371 5.51618 1.63626 4.98874C1.10882 4.46129 0.8125 3.74592 0.8125 3C0.8125 2.25408 1.10882 1.53871 1.63626 1.01126C2.16371 0.483816 2.87908 0.1875 3.625 0.1875C4.37092 0.1875 5.08629 0.483816 5.61374 1.01126C6.14118 1.53871 6.4375 2.25408 6.4375 3C6.4375 3.74592 6.14118 4.46129 5.61374 4.98874C5.08629 5.51618 4.37092 5.8125 3.625 5.8125ZM13 5.8125C12.2541 5.8125 11.5387 5.51618 11.0113 4.98874C10.4838 4.46129 10.1875 3.74592 10.1875 3C10.1875 2.25408 10.4838 1.53871 11.0113 1.01126C11.5387 0.483816 12.2541 0.1875 13 0.1875C13.7459 0.1875 14.4613 0.483816 14.9887 1.01126C15.5162 1.53871 15.8125 2.25408 15.8125 3C15.8125 3.74592 15.5162 4.46129 14.9887 4.98874C14.4613 5.51618 13.7459 5.8125 13 5.8125ZM22.375 5.8125C21.6291 5.8125 20.9137 5.51618 20.3863 4.98874C19.8588 4.46129 19.5625 3.74592 19.5625 3C19.5625 2.25408 19.8588 1.53871 20.3863 1.01126C20.9137 0.483816 21.6291 0.1875 22.375 0.1875C23.1209 0.1875 23.8363 0.483816 24.3637 1.01126C24.8912 1.53871 25.1875 2.25408 25.1875 3C25.1875 3.74592 24.8912 4.46129 24.3637 4.98874C23.8363 5.51618 23.1209 5.8125 22.375 5.8125Z" fill="black" fill-opacity="0.5" />
//             </svg>
//             <Popover
//                 id={id}
//                 open={open}
//                 anchorEl={anchorEl}
//                 onClose={handleClose}
//                 anchorOrigin={{
//                     vertical: 'bottom',
//                     horizontal: 'center',
//                 }}
//                 transformOrigin={{
//                     vertical: 'top',
//                     horizontal: 'center',
//                 }}
//             >
//                 <Select
//                     labelId="demo-controlled-open-select-label"
//                     id="demo-controlled-open-select"
//                 // open={open}
//                 // onClose={handleClose}
//                 // onOpen={handleOpen}
//                 // value={age}
//                 // onChange={handleChange}
//                 >
//                     <MenuItem value="">
//                         <em>None</em>
//                     </MenuItem>
//                     <MenuItem value={10}>Ten</MenuItem>
//                     <MenuItem value={20}>Twenty</MenuItem>
//                     <MenuItem value={30}>Thirty</MenuItem>
//                 </Select>
//             </Popover>
//         </div>
//     );
// }
// import React from 'react';
// import Button from '@material-ui/core/Button';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
// import './styles.scss';

// export default function SimpleMenu() {
//     const [anchorEl, setAnchorEl] = React.useState(null);

//     const handleClick = (event) => {
//         setAnchorEl(event.currentTarget);
//     };

//     const handleClose = () => {
//         setAnchorEl(null);
//     };

//     return (
//         <div className="icon-select">
//             <svg onClick={handleClick} width="26" height="6" viewBox="0 0 26 6" fill="none" xmlns="https://www.w3.org/2000/svg">
//                 <path d="M3.625 5.8125C2.87908 5.8125 2.16371 5.51618 1.63626 4.98874C1.10882 4.46129 0.8125 3.74592 0.8125 3C0.8125 2.25408 1.10882 1.53871 1.63626 1.01126C2.16371 0.483816 2.87908 0.1875 3.625 0.1875C4.37092 0.1875 5.08629 0.483816 5.61374 1.01126C6.14118 1.53871 6.4375 2.25408 6.4375 3C6.4375 3.74592 6.14118 4.46129 5.61374 4.98874C5.08629 5.51618 4.37092 5.8125 3.625 5.8125ZM13 5.8125C12.2541 5.8125 11.5387 5.51618 11.0113 4.98874C10.4838 4.46129 10.1875 3.74592 10.1875 3C10.1875 2.25408 10.4838 1.53871 11.0113 1.01126C11.5387 0.483816 12.2541 0.1875 13 0.1875C13.7459 0.1875 14.4613 0.483816 14.9887 1.01126C15.5162 1.53871 15.8125 2.25408 15.8125 3C15.8125 3.74592 15.5162 4.46129 14.9887 4.98874C14.4613 5.51618 13.7459 5.8125 13 5.8125ZM22.375 5.8125C21.6291 5.8125 20.9137 5.51618 20.3863 4.98874C19.8588 4.46129 19.5625 3.74592 19.5625 3C19.5625 2.25408 19.8588 1.53871 20.3863 1.01126C20.9137 0.483816 21.6291 0.1875 22.375 0.1875C23.1209 0.1875 23.8363 0.483816 24.3637 1.01126C24.8912 1.53871 25.1875 2.25408 25.1875 3C25.1875 3.74592 24.8912 4.46129 24.3637 4.98874C23.8363 5.51618 23.1209 5.8125 22.375 5.8125Z" fill="black" fill-opacity="0.5" />
//             </svg>
//             {/* <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
//         Open Menu
//       </Button> */}
//             <Menu
//                 id="simple-menu"
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//             >
//                 <MenuItem onClick={handleClose}>Update</MenuItem>
//                 <MenuItem onClick={handleClose}>Delete</MenuItem>
//             </Menu>
//         </div>
//     );
// }
import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function SelectDot({ id, onUpdate, onDelete }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    const myValue = event.target.getAttribute("data-my-value");
    if (myValue == "update") {
      onUpdate();
    } else if (myValue == "delete") {
      onDelete(id);
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    console.log("key", event.key);
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root + " icon-select"}>
      <div>
        <svg
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          width="26"
          height="6"
          viewBox="0 0 26 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.625 5.8125C2.87908 5.8125 2.16371 5.51618 1.63626 4.98874C1.10882 4.46129 0.8125 3.74592 0.8125 3C0.8125 2.25408 1.10882 1.53871 1.63626 1.01126C2.16371 0.483816 2.87908 0.1875 3.625 0.1875C4.37092 0.1875 5.08629 0.483816 5.61374 1.01126C6.14118 1.53871 6.4375 2.25408 6.4375 3C6.4375 3.74592 6.14118 4.46129 5.61374 4.98874C5.08629 5.51618 4.37092 5.8125 3.625 5.8125ZM13 5.8125C12.2541 5.8125 11.5387 5.51618 11.0113 4.98874C10.4838 4.46129 10.1875 3.74592 10.1875 3C10.1875 2.25408 10.4838 1.53871 11.0113 1.01126C11.5387 0.483816 12.2541 0.1875 13 0.1875C13.7459 0.1875 14.4613 0.483816 14.9887 1.01126C15.5162 1.53871 15.8125 2.25408 15.8125 3C15.8125 3.74592 15.5162 4.46129 14.9887 4.98874C14.4613 5.51618 13.7459 5.8125 13 5.8125ZM22.375 5.8125C21.6291 5.8125 20.9137 5.51618 20.3863 4.98874C19.8588 4.46129 19.5625 3.74592 19.5625 3C19.5625 2.25408 19.8588 1.53871 20.3863 1.01126C20.9137 0.483816 21.6291 0.1875 22.375 0.1875C23.1209 0.1875 23.8363 0.483816 24.3637 1.01126C24.8912 1.53871 25.1875 2.25408 25.1875 3C25.1875 3.74592 24.8912 4.46129 24.3637 4.98874C23.8363 5.51618 23.1209 5.8125 22.375 5.8125Z"
            fill="black"
            fill-opacity="0.5"
          />
        </svg>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    <MenuItem data-my-value="update" onClick={handleClose}>
                      Edit
                    </MenuItem>
                    <MenuItem data-my-value="delete" onClick={handleClose}>
                      Delete
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
