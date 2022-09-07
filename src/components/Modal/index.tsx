import { ReactNode, useEffect } from "react";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Link, useLocation } from "react-router-dom";
import { Modal, Box } from "@mui/material";
import ModalStyle from "./styles";
import { motion, usePresence } from "framer-motion";


interface IModalProps {
  children?: ReactNode;
  navigate: any;
  title?: String;
}

const ModalComponent = ({ navigate, title, children }: IModalProps) => {
  const [isPresent, safeToRemove] = usePresence()

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 1000)
  }, [isPresent])

  return (
    <motion.div
    initial={{opacity: 0, x: 0, y: 500, scale: 0}}
    animate={{opacity: 1, x: 0, y: 0, scale: 1}}
    exit={{opacity: 1, x: 0, y: 0, scale: 0}}
    transition={{ delay: 1, duration: 1}}
    >
      <Modal
        open
        sx={{
          backdropFilter: "blur(3px)",
          backgroundColor: "#00001e24",
          zIndex: 1,
        }}
      >
        <ModalStyle
        as={motion.div}
        initial={{opacity: 0, x: 0, y: 600, scale: 0}}
        animate={{opacity: 1, x: 0, y: 350, scale: 1}}
        exit={{ x: 0, y: 600, scale: 0, opacity: 0}}
        transition={{ duration: 1}}
        >
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
    </motion.div>
  );
};

export default ModalComponent;
