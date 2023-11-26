import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

interface DialogWrapperProps {
    title: String,
    text: String, 
    confirmText: String, 
    cancelText: String,
    handleClickConform: any,
    handleClickCancel: any,
    open: boolean
}

export default function CommonDialog(props: DialogWrapperProps) {
  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.handleClickCancel}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClickConform}>{props.confirmText}</Button>
          <Button onClick={props.handleClickCancel} autoFocus>
            {props.cancelText}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}