import { Component } from "react";

// function Message() {
//   const name = "Aman";
//   if (name) return <h1>Hello {name}</h1>;
//   return <h1>Hello World</h1>;
// }

interface Props {
  text: string;
}
// function Message({text}: Props) {
//    return <h1>{text}</h1>;
//   }
function Message(props: Props) {
  return <h2>{props.text}</h2>;
}
export default Message;
