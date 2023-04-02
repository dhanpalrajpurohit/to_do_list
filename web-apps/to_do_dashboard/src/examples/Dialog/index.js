import React from 'react'
import { Dialog, DialogContent, DialogTitle, DialogActions, Divider } from "@mui/material";


function SampleDialog() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState("");

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };
    return (
        <Dialog onClose={handleClose} open={open} minWidth="lg">
          <DialogTitle>
            <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
              {/* Add Note and Share on Social Media */}
              {title}
            </MDTypography>
          </DialogTitle>
          <DialogContent>
            <Divider />
            {/* <MDBox mt={1}>
              <MDBox mb={2}>
                <MDInput type="text" label="Title" fullWidth />
              </MDBox>
              <MDBox>
                <MDInput type="text" label="Description" fullWidth multiline />
              </MDBox>
            </MDBox> */}
            {children}
          </DialogContent>
          <DialogActions>
            <MDButton onClick={handleClose} color="primary">Cancel</MDButton>
            <MDButton onClick={handleClose}>Save</MDButton>
          </DialogActions>
        </Dialog>
    );
}

export default Dialog
