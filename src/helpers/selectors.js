export function getAppointmentsForDay(state, day) {
  //... returns an array of appointments for that day
  let dayCheck=[];
  let app =[];
  for(let d of state.days) {
      if(d.name === day) {
        dayCheck = d.appointments;
      }
  }
  if (dayCheck.length === 0) {
    return [];
  } else {
    for (let dc of dayCheck) {
      app.push(state.appointments[dc]);
    }
  }
  return app;
}

export function getInterview(state, interview) {
// return a new object containing the interview data 
// when we pass it an object that contains the interviewer. 
// Otherwise, the function should return null.
  let inter = {};
  if (interview === null) {
    return null;
  } else {
    inter.student = interview.student;
    inter.interviewer = state.interviewers[interview.interviewer];
  }
  return inter;
}

export function getInterviewersForDay(state, day) {
  let dayCheck=[];
  let arrayInterviewer =[];
  for(let d of state.days) {
      if(d.name === day) {
        dayCheck = d.interviewers;
        break;
      }
  }
  if (!dayCheck) {
    return [];
  }
  if (dayCheck.length === 0) {
    return [];
  } else {
    for (let dc of dayCheck) {
      arrayInterviewer.push(state.interviewers[dc]);
    }
  }
  return arrayInterviewer;
}