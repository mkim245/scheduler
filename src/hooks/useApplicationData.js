import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  const setDay = day => setState({ ...state, day });

  //finding spots and update
  function checkDay(day) {
    const weekDay = { Monday: 0, Tuesday: 1, Wednesday: 2, Thursday: 3, Friday: 4 }
    return weekDay[day]
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    const weekDay = checkDay(state.day)
    let dayObj = {
      ...state.days[weekDay],
      spots: state.days[weekDay]
    }

    if (!state.appointments[id].interview) { //for creating
      dayObj = {
        ...state.days[weekDay],
        spots: state.days[weekDay].spots-1
      }

    } else { //for editing
      dayObj = {
        ...state.days[weekDay],
        spots: state.days[weekDay].spots
      }
    }
   

    let days = state.days
    days[weekDay] = dayObj;

    return axios.put(`http://localhost:8001/api/appointments/${id}`, { interview })
      .then(() => {
        setState({
          ...state,
          appointments, days
        })
      })
    // .catch(err => console.error(err));  // removed as catch is used in index.js

  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    const weekDay = checkDay(state.day)
    let dayObj = {
      ...state.days[weekDay],
      spots: state.days[weekDay].spots+1
    }
    let days = state.days
    days[weekDay] = dayObj;

    return axios.delete(`http://localhost:8001/api/appointments/${id}`)
      .then(() => {
        setState({
          ...state,
          appointments, days
        })
      })
    // .catch(err => console.error(err)); //removed as catch is used in index.js
  }

  useEffect(() => {
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`),
      axios.get(`/api/interviewers`)
    ]).then((response) => {
      setState(prev => ({ ...prev, days: response[0].data, appointments: response[1].data, interviewers: response[2].data }));
    });
  }, []);

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  }

}
