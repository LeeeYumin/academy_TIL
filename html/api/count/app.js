const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  
  let today = new Date();
  let year = today.getFullYear();
  let month = today.getMonth();
  let day = today.getDate();
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  const endOfClass = new Date(year, month, day, hour, minute+1, second);
  
  const endYear = endOfClass.getFullYear();
  const endMonth = endOfClass.getMonth();
  const endHours = endOfClass.getHours();
  const endMinutes = endOfClass.getMinutes();
  const endSeconds = endOfClass.getSeconds();
  const endDay = endOfClass.getDay();
  const endDate = endOfClass.getDate();
  
  const giveaway = document.querySelector(".giveaway");
  giveaway.textContent = `Class ends on ${weekdays[endDay]}, ${endDate}
                          ${months[endMonth]} ${endYear} ${endHours}:${endMinutes} pm`;
  
  const eocTimestamp = endOfClass.getTime();
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  
  const timeBoardConatiner = document.querySelector(".deadline");
  const timeBoard = document.querySelectorAll(".deadline-format h4");
  
  function getRemaindingTime() {
    const now = new Date().getTime();
    const remain = endOfClass - now;
  
    if (remain < 0) {
      clearInterval(clock);
      return timeBoardConatiner.innerHTML = "<h4> Sorry, Class has ended!</h4>"
    }
  
    let days = Math.floor(remain / oneDay);
    let hours = Math.floor((remain % oneDay) / oneHour);
    let minutes = Math.floor((remain % oneHour) / oneMinute);
    let seconds = Math.floor((remain % oneMinute) / 1000);
  
    const values = [days, hours, minutes, seconds];
    // const values = {
    //   days,
    //   hours,
    //   minutes,
    //   seconds
    // }
    timeBoard.forEach((h4, idx) => h4.textContent = values[idx]);
  }
  
  let clock = setInterval(getRemaindingTime, 1000);
  getRemaindingTime();