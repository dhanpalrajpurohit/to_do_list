import React from "react";
import { Dialog, DialogContent, DialogTitle, DialogActions } from "@mui/material";
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Icon from "@mui/material/Icon";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

import { useMaterialUIController } from "context";

function Bill({ title, description }) {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <MDBox
      component="li"
      display="flex"
      justifyContent="space-between"
      alignItems="flex-start"
      bgColor={darkMode ? "transparent" : "grey-100"}
      borderRadius="lg"
      p={3}
      mt={2}
    >
      <MDBox width="100%" display="flex" flexDirection="column">
        <MDBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
          mb={2}
        >
          <MDTypography variant="button" fontWeight="medium" textTransform="capitalize">
            {title}
          </MDTypography>

          <MDBox display="flex" alignItems="center" mt={{ xs: 2, sm: 0 }} ml={{ xs: -1.5, sm: 0 }}>
            <MDBox mr={1}>
              <MDButton variant="text" color="error">
                <Icon>delete</Icon>&nbsp;delete
              </MDButton>
            </MDBox>
            <MDButton variant="text" color={darkMode ? "white" : "dark"}>
              <Icon>edit</Icon>&nbsp;edit
            </MDButton>
            <MDButton variant="text" color={darkMode ? "white" : "dark"} onClick={handleClickOpen}>
              <Icon>sendIcon</Icon>&nbsp;share
            </MDButton>
          </MDBox>
        </MDBox>
        <MDBox mb={1} lineHeight={0}>
          <MDTypography variant="caption" color="text">
            <MDTypography variant="caption" fontWeight="medium">
              {description}
            </MDTypography>
          </MDTypography>
        </MDBox>
        <Dialog onClose={handleClose} open={open} minWidth="lg">
          <DialogTitle>
            <MDTypography variant="caption" fontWeight="medium" textTransform="capitalize">
              Add Note and Share on Social Media
            </MDTypography>
          </DialogTitle>
          <DialogContent>
            <MDBox mt={1}>
              <MDBox mb={2}>
                <MDInput type="text" label="Title" fullWidth />
              </MDBox>
              <MDBox>
                <MDInput type="text" label="Description" fullWidth multiline />
              </MDBox>
            </MDBox>
          </DialogContent>
          <DialogActions>
            <MDButton onClick={handleClose}>Cancel</MDButton>
            <MDButton onClick={handleClose}>Save</MDButton>
          </DialogActions>
        </Dialog>

        {/* <MDTypography variant="caption" color="text">
          VAT Number:&nbsp;&nbsp;&nbsp;
          <MDTypography variant="caption" fontWeight="medium">
            {vat}
          </MDTypography>
        </MDTypography> */}
      </MDBox>
    </MDBox>
  );
}

// Setting default values for the props of Bill
Bill.defaultProps = {
  title: "No Title",
  description: "My Life My Rule",
};

// Typechecking props for the Bill
Bill.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Bill;
