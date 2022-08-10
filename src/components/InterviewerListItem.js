import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {
  let interviewers = classNames('interviewers__item', {
    'interviewers__item--selected': props.selected
 });
  return (
    <li 
      className={interviewers}
      onClick={() => props.setInterviewer(props.id)}
    >
      <img
        className="interviewers__item-image"
        src= {props.avatar} 
        alt={props.name} 
      />
      {props.selected && props.name}
    </li>
  )
}