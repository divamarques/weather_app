import logoImg from "../../assets/Logo.svg";
import { usePosition } from "../../contexts/PositionContext";
import { Container, Content } from "./styles";

export function Header() {
  const {getListCities} = usePosition();

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="Weather's up" />
        <h1>What's up with the weather today?</h1>
        <button type="button" onClick={getListCities}>
          Search
        </button>
      </Content>
    </Container>
  );
}
