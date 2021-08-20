import React from "react";

export default function Input(props) {
 const { type = "text", placeholder, name } = props;
 return <input className="ui-textfield" type={type} name={name} placeholder={placeholder} />;
}
