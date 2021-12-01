import { Map } from "../Map";
import { CitiesTable } from "../CitiesTable";
import { Container } from "./styles";
import Modal from "react-modal";
import { usePosition } from "../../contexts/PositionContext";

Modal.setAppElement("#root");



 export function Dashboard() {
  const {isNewTableCities} = usePosition();

  return (
    <Container>
      <Map />
       <CitiesTable listedCities={isNewTableCities}
      />
    </Container>
  );
}
