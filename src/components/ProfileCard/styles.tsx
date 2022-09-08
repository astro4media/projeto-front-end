import { Stack, StackProps, styled } from "@mui/material";

const Container = styled(Stack)<StackProps>(() => ({
  width: 300,
  "& h2": {
    width: 2,
  },
}));

export default Container;
