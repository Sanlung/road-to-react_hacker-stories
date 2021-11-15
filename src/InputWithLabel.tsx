import React from "react";
// import styled from "styled-components";

// const StyledLabel = styled.label`
//   border-top: 1px solid #171212;
//   border-left: 1px solid #171212;
//   padding: 0 5px;
//   font-size: 24px;
// `;

// const StyledInput = styled.input`
//   border: none;
//   border-bottom: 1px solid #171212;
//   background-color: transparent;
//   font-size: 24px;
//   margin-right: 5px;
// `;

type InputWithLabelProps = {
  id: string;
  value: string;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isFocused: boolean;
  children: React.ReactNode;
};

const InputWithLabel = ({
  id,
  value,
  type = "text",
  onInputChange,
  isFocused,
  children,
}: InputWithLabelProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null!);

  React.useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <>
      <label className='label' htmlFor={id}>
        {children}
      </label>
      <input
        className='input'
        ref={inputRef}
        id={id}
        type={type}
        value={value}
        onChange={onInputChange}
      />
    </>
  );
};

export default InputWithLabel;
