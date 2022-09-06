import { ReactNode, useState } from "react";
// import { MdHighlightOff } from "react-icons/md";
import DeleteIcon from "@mui/icons-material/Delete;
import { Link } from "react-router-dom";
import { Modal,Box } from "@mui/material";
import ModalStyle from "./styles"

interface IModalProps {
  open: true|false;
  children?:ReactNode;
  navigate: any;
  title?: String;
}



const ModalComponent = ({open, navigate, title, children}:IModalProps) => {
  
  
  return(<>
      <Modal open={open}>
        <ModalStyle>
        <Box className="boxModal">
          <Box className="topModal">
            <h2>{title}</h2>
            <Link to={navigate}>
              <button>X</button>
              <DeleteIcon></DeleteIcon>
            </Link>
          </Box>
          <Box className="contentModal">
            {children}
          </Box>
        </Box>
        </ModalStyle>
      </Modal>
  </>);
};

export default ModalComponent;
