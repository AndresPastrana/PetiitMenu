import * as React from "react";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const ErrorMessage = ({ msg }) => {
  return (
    <div>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="error">{msg} — check it out!</Alert>
      </Stack>
    </div>
  );
};

export default ErrorMessage;
