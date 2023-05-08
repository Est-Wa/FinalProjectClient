import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from "react-router-dom";
import Alerts from "./alerts";

const style = {
    display: 'flex-warp',
  alignItems: 'center',
  flexDirection: 'column',
  flexWrap: 'wrap',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '40%',
  minWidth: '300px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function AlertsPopup() {
    const navigate = useNavigate();

    const [open, setOpen] = React.useState(true);
    const handleClose = () => {setOpen(false); navigate(-1);};

    return (
        <div>
            <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <IconButton aria-label="close" onClick={handleClose} style={{position:'absolute', left:'10%'}}>
                        <CloseIcon />
                    </IconButton>
                    <Typography id="modal-modal-title" variant="h6" component="h2" style={{margin:'20px'}}>
                        התראה
                    </Typography>
                    <Alerts ></Alerts>
                </Box>
            </Modal>
        </div>
    );
}
