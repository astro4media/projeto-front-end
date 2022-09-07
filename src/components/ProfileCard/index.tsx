import { Avatar, Box, Divider, Stack, StackProps } from "@mui/material";
import { useAuth } from "../../contexts/AuthContext";
import { ReactComponent as DefaultAvatar } from "../../assets/images/defaultAvatar.svg";
import styled from "styled-components";

const Container = styled(Stack)<StackProps>(() => ({
  "& h2": {
    width: "max-content",
  },
  "& p": {
    width: "100%",
  },
}));

const ProfileCard = () => {
  const { user } = useAuth();
  const { avatar, bio, name } = user;

  return (
    <Container
      alignItems={["center", "flex-start"]}
      spacing={{ xs: 1, sm: 2 }}
      direction={["column", "row"]}
      divider={<Divider orientation="vertical" flexItem />}
      sx={{ width: "100%", px: 20 }}
    >
      <Avatar
        src={avatar}
        sx={{ width: [120, 150], height: [120, 150], bgcolor: "#343434" }}
      >
        <DefaultAvatar />
      </Avatar>
      <Stack sx={{ width: "100%" }} alignItems={["center", "flex-start"]}>
        <h2>{name}</h2>
        <p>{bio}</p>
      </Stack>
    </Container>
  );
};

export default ProfileCard;
