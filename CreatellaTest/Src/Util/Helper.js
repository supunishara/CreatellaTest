export default class Helper {


    currencyFormat(num) {
        return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
      }

    timeFormat(prevTime){
        //breaking down the incoming Time Stamp to parts
        const [day, month, date, year, time] = prevTime.split(' ');
  
        //format the breaked time
        let timeStart = new Date(`${date}/${month}/${year}/${time}`);
  
        //get current time
        let today = new Date();
  
        //calculate the difference
        let timeDiff = today - timeStart;
        let timeDiffDays = timeDiff/ 60 / 60 / 1000/24;

        //check whether the timeDiffHours is older than a one week or not
        if(timeDiffDays < 7 ){
          return "" +  Math.round(timeDiffDays) + " days ago"
        }else{
        return prevTime;
        }
    }


}