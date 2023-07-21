import React from 'react';
import './Button.css';

function Button(props) {
  //propsからvariant(値が未定義の場合はprimary),children,それ以外のプロパティの取り出し
  const { variant = 'primary', children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...rest}>
      {children}</button>
  )
}

export default Button
