import React, { PropsWithChildren, ReactNode } from "react";

// interface Props {
//   message: string;
// }
// const Alert = (props: Props) => {
//   return (
//     <div className="alert alert-primary" role="alert">
//       <h3>{props.message}</h3>
//     </div>
//   );
// };
// export default Alert;

interface Props {
  children: ReactNode;
}
const Alert = (props: Props) => {
  return (
    <div className="alert alert-primary" role="alert">
      <h2>{props.children}</h2>
    </div>
  );
};
export default Alert;
