import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { medium } from "../../utils/responsive";

const Container = styled.div`
  margin-top: 1rem;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  gap: 1rem;

  ${medium({
    gap: "1px",
  })}
`;

const Button = styled.button`
  padding: 5px 10px;
  font-family: inherit;
  border: none;
  font-weight: bold;
  outline: none;
  border-radius: 7px;
  border: 1px solid #572064;
  color: #572064;
  background-color: #fff;
  cursor: pointer;

  &:first-child,
  &:last-child {
    color: white;
    background-color: #572064;
  }
`;

const Paginaton = () => {
  const pages = [1, 2, 3, 4, 5, 6];

  return (
    <Container>
      <Button>
        <FontAwesomeIcon icon={faChevronLeft} />
      </Button>
      {pages.map((ele, id) => (
        <Button key={id}>{ele}</Button>
      ))}
      <Button>
        <FontAwesomeIcon icon={faChevronRight} />
      </Button>
    </Container>
  );
};

export default Paginaton;
