import React, { FC, ReactElement, useState } from 'react';
import '../Styles/app.scss';

// interface InputProp {
// }

// interface InputState {
//   isShowed: boolean,
//   type: string,
//   classNam: string
// }

//React func component

const AppF : React.FC<{isShowed: boolean, type: string, className: string}> = () : ReactElement => {

  const [isShowed, setShowed] = useState(true);

  return (
    <div>
      <label htmlFor='anya'>Введите пароль: </label>
       <br />
       <br />
      <input id="anya" type={`${isShowed ? 'text' : 'password'}`} className="password"/>
      <button className={`${isShowed ? 'buttonShow' : 'buttonNotShow'}`} onClick={() => {setShowed(!isShowed);}}></button>
    </div>
  );
}
export default AppF;

// React class component

// export default class App extends React.Component<InputProp, InputState>{
//   state: InputState = {
//     isShowed: false,
//     type: "text",
//     classNam: "buttonNotShow"
//   }

//   handleClick() {
//     this.setState(prevState => ({
//       isShowed: !prevState.isShowed,
//       type: this.state.isShowed ? "text" : "password",
//       classNam: this.state.isShowed ? "buttonShow" : "buttonNotShow"
//     }));
//   }
//  render() {
//     return (
//       <div>
//         <label htmlFor='anya'>Введите пароль: </label>
//          <br />
//          <br />
//         <input id="anya" type={this.state.type} className="password"/>
//         <button className={this.state.classNam} onClick={() => this.handleClick()}></button>
//       </div>
//     );
//  }
// }
