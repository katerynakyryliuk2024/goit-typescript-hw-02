import Modal from "react-modal";
import { Photo } from "../App/App";

Modal.setAppElement("#root");

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    overflow: "hidden",
    backgroundColor: "black",
    padding: "15px",
    borderRadius: "10px",
  },
};

interface ImageModalProps {
  image: Photo;
  isOpen: () => boolean;
  onClose: () => void;
}

export default function ImageModal({
  isOpen,
  onClose,
  image,
}: ImageModalProps) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={modalStyles}>
      <button onClick={onClose} style={{ float: "right" }}>
        Close
      </button>
      {image && (
        <img
          src={image.urls.regular}
          alt={image.description}
          style={{ width: "100%" }}
        />
      )}
    </Modal>
  );
}
