import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate} from "react-router-dom";

const style = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4
};

export default function Profile() {
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
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        profile
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        למה הגעת לדף הזה?
                        תחזור מהרררררררר
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}
