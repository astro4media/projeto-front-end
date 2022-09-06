import { ReactNode, useState } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Link } from "react-router-dom";
import { Modal, Box } from "@mui/material";
import ModalStyle from "./styles";

interface IModalProps {
  open: true | false;
  children?: ReactNode;
  navigate: any;
  title?: String;
}

const ModalComponent = ({ open, navigate, title, children }: IModalProps) => {
  return (
    <>
      <Modal
        open={open}
        sx={{
          backdropFilter: "blur(3px)",
          backgroundColor: "#00001e24",
          zIndex: 1,
        }}
      >
        <ModalStyle>
          <Box className="boxModal">
            {title ? (
              <Box className="topModalTitle">
                <h2 className="titleModal">{title}</h2>
                <Link to={navigate}>
                  <button className="buttonModal">
                    <HighlightOffIcon></HighlightOffIcon>
                  </button>
                </Link>
              </Box>
            ) : (
              <Box className="topModal">
                <Link to={navigate}>
                  <button className="buttonModal">
                    <HighlightOffIcon></HighlightOffIcon>
                  </button>
                </Link>
              </Box>
            )}
            <Box className="contentModal">{children}</Box>
          </Box>
        </ModalStyle>
      </Modal>
    </>
  );
};

export default ModalComponent;
