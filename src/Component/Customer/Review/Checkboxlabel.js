import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxLabels() {
  return (
    <FormGroup>
      <FormControlLabel required control={<Checkbox />} label="I confirm this review is about my own genuine experience" />
    </FormGroup>
  );
}
