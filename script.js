
function dateAndTime(){
	const currentTime = new Date();
	
     const year = currentTime.getFullYear();
     const month = currentTime.getMonth();
     const day = currentTime.getDay();
 //     const hours = currentTime.getHours();
 //     const minutes = currentTime.getMinutes();
 //     const seconds = currentTime.getSeconds();

	// const amOrPm = hours >= 12 ? 'PM':'AM';
	// const adjustTime = hours%12 || 12;
	//  // "||" = logical operator if hours%12 gives 0 remainder then it will be consider 12 -->( || 12)
 //  document.getElementById("timer").textContent = `${day}/${month}/${year}, ${singleValue(hours)}:${singleValue(minutes)}:${singleValue(seconds)} ${amOrPm}`;


	// method-2
const time = currentTime.toLocaleTimeString();
  document.getElementById("timer").textContent = `${day}/${month}/${year}, ${time}`;
	

}


function singleValue(value){
	return value < 10 ? `0${value}`: value;
};
dateAndTime();
setInterval(dateAndTime, 1000);

