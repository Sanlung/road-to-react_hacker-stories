// import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
// import {ReactComponent as Check} from "./check.svg";
// import check from "./check.svg";

// const StyledItem = styled.li`
//   display: flex;
//   align-items: center;
//   padding-bottom: 5px;
// `;

// const StyledColumn = styled.span`
//   padding: 0 5px;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;

//   a {
//     color: inherit;
//   }

//   width: ${(props) => props.width};
// `;

// const StyledButtonSmall = styled.button`
//   background: transparent;
//   border: 1px solid #171212;
//   padding: 5px;
//   cursor: pointer;
//   transition: all 0.1s ease-in;

//   &:hover {
//     background: #171212;
//     color: #ffffff;
//   }
// `;

type Story = {
  objectID: string;
  url: string;
  title: string;
  author: string;
  num_comments: number;
  points: number;
};

type ItemProps = {
  item: Story;
  onRemoveItem: (item: Story) => void;
};

const Item = ({item, onRemoveItem}: ItemProps) => (
  <li className='item'>
    <span style={{width: "40%"}}>
      <a href={item.url}>{item.title}</a>
    </span>
    <span style={{width: "30%"}}>{item.author}</span>
    <span style={{width: "10%"}}>{item.num_comments}</span>
    <span style={{width: "10%"}}>{item.points}</span>
    <span style={{width: "10%"}}>
      <button
        type='button'
        onClick={() => onRemoveItem(item)}
        className='button button_small'>
        <FontAwesomeIcon icon={faTrash} />
        {/* <Check height='18px' width='18px' /> */}
        {/* <img src={check} alt='check mark' height='18px' width='18px' /> */}
      </button>
    </span>
  </li>
);

export default Item;
export type {Story};
