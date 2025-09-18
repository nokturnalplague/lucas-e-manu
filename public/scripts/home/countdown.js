export function countdown() {
  var counter = document.getElementById('counter')

  var date = new Date('Nov 29, 2025 15:00:00').getTime()
  var now = new Date().getTime()
  var timeLeft = date - now

  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

  var daysFormat = days <= 9 ? '0' + days : days
  var hoursFormat = hours <= 9 ? '0' + hours : hours
  var minutesFormat = minutes <= 9 ? '0' + minutes : minutes
  var secondsFormat = seconds <= 9 ? '0' + seconds : seconds

  counter.innerHTML = daysFormat + ':' + hoursFormat + ':' + minutesFormat + ':' + secondsFormat

  if (timeLeft < 0) {
    clearInterval(x)
    counter.innerHTML = '00:00:00:00'
  }

  var x = setInterval(countdown, 1000)
}

