
// code for the stopwatch
let [seconds, minutes, hours] = [0,0,0];
        let displayTime = document.getElementById("displayTime");
        let timer = null;
        function stopwatch (){
            seconds++;
            if(seconds == 60){
                seconds = 0;
                minutes++;
                if(minutes == 60){
                minutes = 0;
                hours++;
                 }
            }

            // this will add 0's to the single digits 
            let h = hours < 10 ? "0" + hours : hours;
            let m = minutes < 10 ? "0" + minutes : minutes;
            let s = seconds < 10 ? "0" + seconds : seconds;

            displayTime.innerHTML = h + ":" + m + ":" + s;
        }

        // code to start stopwatch
        function watchStart(){
            if(timer !== null){
                clearInterval(timer);
            }
           timer = setInterval(stopwatch,1000);
        }

        // code to stop stopwatch
        function watchStop(){
            clearInterval(timer);

        }

        // code to reset stopwatch
        function watchReset(){
            clearInterval(timer);
            [seconds, minutes, hours] = [0,0,0];
            displayTime.innerHTML = "00:00:00";
        }
