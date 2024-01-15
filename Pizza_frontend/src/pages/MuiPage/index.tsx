import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

function Header() {
  return (
    <header>
      <h1>welcome</h1>
    </header>
  );
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>html</li>
        <li>css</li>
      </ol>
    </nav>
  );
}

function Article() {
  const [open, setOpen] = useState(false);

  return (
    <article>
      <h2>Welcome</h2>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat
      voluptatum nostrum veniam? Saepe itaque nemo nobis officia molestias
      tenetur omnis sint enim expedita neque esse dignissimos, totam ut ipsum
      molestiae. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      <br />
      <ButtonGroup>
        <Button
          variant="outlined"
          onClick={() => {
            setOpen(true);
          }}
        >
          Create
        </Button>
        <Button variant="outlined">Update</Button>
      </ButtonGroup>
      <Button variant="outlined">Delete</Button>
      <Dialog open={open}>
        <DialogTitle>Create</DialogTitle>
        <DialogContent>
          <DialogContentText>Hello Create!!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="outlined">Create</Button>
          <Button
            variant="outlined"
            onClick={() => {
              setOpen(false);
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </article>
  );
}

function Mui() {
  return (
    <>
      {/* <Container fixed> */}
      <Header></Header>
      <Grid container>
        <Grid item xs={2}>
          <Nav></Nav>
        </Grid>
        <Grid item xs={10}>
          <Article></Article>
        </Grid>
      </Grid>
      {/* </Container> */}
    </>
  );
}

export default Mui;
