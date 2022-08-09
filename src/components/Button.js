import React from "react";

import "components/Button.scss";
import classNames from "classnames";

export default function Button(props) {
   let buttonClass = classNames('button', {
      'button--confirm': props.confirm,
      'button--danger': props.danger
   });

   // if (props.confirm) {
   //    buttonClass += ' button--confirm';
   // }
   // if (props.danger) {
   //    buttonClass += ' button--danger';
   // } line 7-10 is same as this if clause. https://web.compass.lighthouselabs.ca/days/w07d2/activities/1199

   return (
      <button 
         className={buttonClass}
         onClick={props.onClick}
         disabled={props.disabled}
      >
         {props.children}
      </button>
   );
}
