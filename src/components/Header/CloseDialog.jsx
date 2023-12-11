import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/auth/authThunks";

const CloseDialog = ({ open, onClose }) => {
  const dispatch = useDispatch();
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to log out? Logging out will end your current
          session, and you'll need to sign in again to access your account.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Disagree</Button>
        <Button
          onClick={() => {
            dispatch(logOut());
            onClose();
          }}
          autoFocus
        >
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CloseDialog;
