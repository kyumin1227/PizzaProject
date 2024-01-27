import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useState } from "react";

const UserPage = () => {
  const userInfo = useSelector((state) => {
    return state.user;
  });

  const [amendUserId, setAmendUserId] = useState(userInfo.id);
  const [amendUserFirstName, setAmendUserFirstName] = useState(
    userInfo.firstName
  );
  const [amendUserLastName, setAmendUserLastName] = useState(userInfo.lastName);
  const [amendUserNickName, setAmendUserNickName] = useState(userInfo.nickName);
  const [amendUserEmail, setAmendUserEmail] = useState(userInfo.email);
  const [amendUserIntroduction, setAmendUserIntroduction] = useState(
    userInfo.introduction
  );

  return (
    <>
      <Typography variant="h3">User Page</Typography>
      <Box sx={{ mx: "5%" }}>
        <TextField
          id="userId"
          label="Id"
          variant="outlined"
          fullWidth
          sx={{ my: 1 }}
          value={amendUserId}
          onChange={(e) => {
            setAmendUserId(e.currentTarget.value);
          }}
        />
        <TextField
          id="userFirstName"
          label="FirstName"
          variant="outlined"
          value={amendUserFirstName}
          sx={{ my: 1, width: "100%", maxWidth: "48%" }}
          onChange={(e) => {
            setAmendUserFirstName(e.currentTarget.value);
          }}
        />
        <TextField
          id="userLastName"
          label="LastName"
          variant="outlined"
          value={amendUserLastName}
          sx={{ ml: "4%", my: 1, width: "100%", maxWidth: "48%" }}
          onChange={(e) => {
            setAmendUserLastName(e.currentTarget.value);
          }}
        />
        <TextField
          id="userNickName"
          label="NickName"
          variant="outlined"
          fullWidth
          sx={{ my: 1 }}
          value={amendUserNickName}
          onChange={(e) => {
            setAmendUserNickName(e.currentTarget.value);
          }}
        />
        <TextField
          id="userEmail"
          label="Email"
          variant="outlined"
          fullWidth
          sx={{ my: 1 }}
          value={amendUserEmail}
          onChange={(e) => {
            setAmendUserEmail(e.currentTarget.value);
          }}
        />
        <Divider sx={{ mb: 1, mt: 1 }} />
        <TextField
          id="userIntroduction"
          label="Introduction"
          multiline
          rows={4}
          fullWidth
          sx={{ my: 1 }}
          value={amendUserIntroduction}
          onChange={(e) => {
            setAmendUserIntroduction(e.currentTarget.value);
          }}
        />
        <Box display="flex" justifyContent="flex-end" sx={{ mt: 1 }}>
          <Button variant="contained">Amend</Button>
        </Box>
      </Box>
    </>
  );
};

export default UserPage;
