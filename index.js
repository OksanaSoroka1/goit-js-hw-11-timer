
const daysEl = document.querySelector('[data-value="days"]')
const hoursEl = document.querySelector('[data-value="hours"]')
const minutesEl = document.querySelector('[data-value="mins"]')
const secondsEl = document.querySelector('[data-value="secs"]')

class CountdownTimer {

    constructor( { selector, targetDate, ...markup}) {
        this.selector =  selector,
        this.targetDate = targetDate,
        this.markup = markup,
        this.intID = null,
        this.deltaTime = 0
    }
    
    start(){
        this.intID = setInterval(() => {
          let currentTime = Date.now()
          console.log('currentTime:', currentTime)
        
         console.log('targetDate',  this.targetDate)
         this.deltaTime = this.targetDate - currentTime;
         console.log('deltaTime:', this.deltaTime)

         const days = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)))
         
          const hours = this.pad(
            Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          )
          
          const mins = this.pad(
            Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)),
          )
          
          const seconds = this.pad(
            Math.floor((this.deltaTime % (1000 * 60)) / 1000),
          )

          this.insertValues(days, hours, mins, seconds)
          
        }, 1000);
    }
     
      stop() {
        console.log('intID:', this.intID)
        clearInterval(this.intID)
        this.clearMarkup()
      } 

      pad(value) {
        return String(value).padStart(2, '0')
      }
      insertValues(days, hours, mins, seconds) {
        const { daysEl, hoursEl, minutesEl, secondsEl} = this.markup
        daysEl.textContent = days
        hoursEl.textContent = hours
        minutesEl.textContent = mins
        secondsEl.textContent = seconds
      }
      clearMarkup() {
        const { daysEl, hoursEl, minutesEl, secondsEl } = this.markup
        daysEl.textContent = '00'
        hoursEl.textContent = '00'
        minutesEl.textContent = '00'
        secondsEl.textContent = '00'
      }
         
}
const newCountdownTimer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date(2022, 0, 1),
    
   daysEl, hoursEl, minutesEl, secondsEl 
   
  });
console.log(newCountdownTimer)
  newCountdownTimer.start();
  
  