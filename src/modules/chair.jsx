import React, { useState } from "react";
import { LoaiGhe } from "../constants/booking";
import styled from "styled-components";

export default function Chair(props) {
  const [isSelected, setIsSelected] = useState(false);

  const populateClass = () => {
    let defaultClass = "ghe";

    if (props.item.loaiGhe === "Vip") {
      defaultClass += " gheVip";
    }

    if (isSelected) {
      defaultClass += " dangDat";
    }

    if (props.item.daDat) {
      defaultClass += " daDat";
    }

    return defaultClass;
  };

  return (
    <Button
      disabled={props.item.daDat}
      onClick={() => {
        setIsSelected(!isSelected);
        props.handleSelect(props.item);
      }}
      className={populateClass()}
    >
      {props.item.tenGhe}
    </Button>
  );
}
const Button = styled.button`
  .ghe {
    width: 35px;
    height: 35px;
    background: #ccc;
    margin-right: 3px;
    margin-bottom: 3px;

    &.gheVip {
      background-color: pink;
    }
    &.dangDat {
      background-color: yellow;
    }
    &.daDat {
      cursor: not-allowed;
      background-color: gray;
    }
  }
`;
