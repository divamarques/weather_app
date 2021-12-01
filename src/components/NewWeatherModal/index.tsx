import closeImg from "../../assets/close.svg";
import Modal from "react-modal";
import { Container } from "./styles";

interface NewWeatherModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  item?: NewItemModaProps
}

interface NewItemModaProps {
  name: string;
  main: {
    temp:number;
    temp_min: number;
    temp_max: number;
  }

}

export function NewWeatherModal({isOpen, onRequestClose, item}: NewWeatherModalProps) {
  
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Close" />
      </button>

      <Container>
        <h2>{item?.name}</h2>
        <p>{item?.main.temp}°c</p>
        <span>max {item?.main.temp_max}°c / min {item?.main.temp_min}°c</span>
      </Container>
    </Modal>
  );
}
