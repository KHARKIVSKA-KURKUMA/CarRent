import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

const DeleteDialog = ({ open, onClose, onAgree, id }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Confirm Ad Deletion"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Are you sure you want to delete your advertisement? This action is
          irreversible and will permanently remove your ad from our platform.
          Please consider the following before proceeding:
          <ol>
            <li>Once deleted, your ad cannot be recovered.</li>
            <li>
              Any ongoing interactions or inquiries related to your ad will be
              lost.
            </li>
            <li>
              If your ad has a duration or expiration date, deleting it will end
              the promotion prematurely.
            </li>
          </ol>{" "}
          If you're certain about deleting your ad, click the 'Agree' button
          below. If you have any concerns or would like assistance, feel free to
          contact our support team. Thank you for using our platform.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Disagree</Button>
        <Button onClick={() => onAgree(id)}>Agree</Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteDialog;
