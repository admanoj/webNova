import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function App() {
  return (
    <Stack direction="row" spacing={2}>
      {/* Using the sx prop to set a custom background color */}
      <Avatar sx={{ bgcolor: "purple" }} src="/broken-image.jpg" />
    </Stack>
  );
}
