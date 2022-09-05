import { ReactNode, useState } from "react";
// import { MdHighlightOff } from "react-icons/md";
// import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Modal,Box } from "@mui/material";
import ModalStyle from "./styles"

interface IModalProps {
  // id: String;
  open: true|false;
  children?:ReactNode;
  onClose: () => void ;
}

// const style = {
//   position: 'absolute' as 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };



const ModalComponent = ({open, onClose, children}:IModalProps) => {
  
  
  return(<>
      <Modal open={open} onClose={onClose}>
        <ModalStyle>
        <Box className="boxModal">
          
          <Box className="topModal">
            <button onClick={()=> onClose()}>X</button>
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
