import * as React from "react";
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
// import {ReactComponent as Check} from "./check.svg";
// import check from "./check.svg";

const StyledItem = styled.li`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
`;

const StyledColumn = styled.span`
  padding: 0 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  a {
    color: inherit;
  }

  width: ${(props) => props.width};
`;

const StyledButtonSmall = styled.button`
  background: transparent;
  border: 1px solid #171212;
  padding: 5px;
  cursor: pointer;
  transition: all 0.1s ease-in;

  &:hover {
    background: #171212;
    color: #ffffff;
  }
`;

const Item = ({item, onRemoveItem}) => (
  <StyledItem>
    <StyledColumn width='40%'>
      <a href={item.url}>{item.title}</a>
    </StyledColumn>
    <StyledColumn width='30%'>{item.author}</StyledColumn>
    <StyledColumn width='10%'>{item.num_comments}</StyledColumn>
    <StyledColumn width='10%'>{item.points}</StyledColumn>
    <StyledColumn width='10%'>
      <StyledButtonSmall type='button' onClick={() => onRemoveItem(item)}>
        <FontAwesomeIcon icon={faTrash} />
        {/* <Check height='18px' width='18px' /> */}
        {/* <img src={check} alt='check mark' height='18px' width='18px' /> */}
      </StyledButtonSmall>
    </StyledColumn>
  </StyledItem>
);

export default Item;
