import React from "react";
import { makeStyles } from "@material-ui/core";
import {
  Button,
  TextField,
  Select,
  Input,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const useStyle = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
  textField: {
    marginBottom: theme.spacing(2),
  },
}));

const tags = ["fun", "programming", "health", "science"];

const postSchema = yup.object().shape({
  title: yup.string().required(),
  subtitle: yup.string().required(),
  content: yup.string().min(20).required(),
  tag: yup.mixed().oneOf(tags),
});

export const AddPostForm = ({ open, handleClose }) => {
  const { register, handleSubmit, control, errors, reset } = useForm({
    resolver: yupResolver(postSchema),
  });
  const classes = useStyle();

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Yeni Yazı Oluştur.</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Yeni bir yazı eklemek için aşağıdaki formu doldurun.
        </DialogContentText>

        <div className={classes.root}>
          <form noValidate autoComplete="off">
            <TextField
              id="title"
              label="Başlık"
              name="title"
              variant="outlined"
              className={classes.textField}
              size="small"
            //   error={errors.title ? true : false}
              inputRef={register}
              fullWidth
            />

            <TextField
              id="subtitle"
              label="Alt Başlık"
              name="subtitle"
              variant="outlined"
              className={classes.textField}
              size="small"
              //  error={errors.subtitle ? true : false}
              inputRef={register}
              fullWidth
            />

            <Controller
              as={
                <Select
                  input={<Input />}
                  className={classes.textField}
                  fullWidth
                >
                  {tags.map((tag, index) => (
                    <MenuItem key={index} value={tag}>
                      {tag}
                    </MenuItem>
                  ))}
                </Select>
              }
              name="tag"
              control={control}
              //  error={errors.tag ? true : false}
              defaultValue={tags[0]}
            />

            <TextField
              id="content"
              label="İçerik"
              name="content"
              multiline
              rows={4}
              variant="outlined"
              className={classes.textField}
              size="small"
              //  error={errors.content ? true : false}
              inputRef={register}
              fullWidth
            />
          </form>
        </div>
      </DialogContent>
      <DialogActions>
        <Button color="inherit">Vazgeç</Button>
        <Button color="primary" variant="outlined" type="submit">
          Yayınla
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddPostForm;