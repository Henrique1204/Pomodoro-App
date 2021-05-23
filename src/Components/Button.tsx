import React from 'react';

interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button = (props: Props): JSX.Element => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.text}
    </button>
  );
};

export default Button;
