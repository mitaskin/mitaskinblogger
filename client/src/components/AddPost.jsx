import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CheckIcon from "@mui/icons-material/Check";
import ToggleButton from "@mui/material/ToggleButton";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selected, setSelected] = useState(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Yeni Gönderi Oluştur
          </Typography>

          <TextField
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
            id="outlined-basic"
            label="Başlık"
            variant="outlined"
            margin="normal"
          />

          <TextField
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
            id="outlined-basic"
            label="Anahtar Kelimeler"
            variant="outlined"
            margin="normal"
          />

          <TextField
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
            id="filled-textarea"
            label="Metin"
            multiline
            variant="filled"
            margin="normal"
          />

          <Button
            color="primary"
            variant="contained"
            endIcon={<SendIcon />}
            margin="normal"
            sx={{
              width: 500,
              maxWidth: "100%",
            }}
          >
            Yeni Yazı Ekle
          </Button>

          <Button className="CloseButton" onClick={handleClose}>
            x
          </Button>
        </Box>
      </Modal>
    </div>
  );
}
