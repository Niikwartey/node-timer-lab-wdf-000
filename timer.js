function time(secs) {
  let timeInput = secs || process.argv.pop()
  seconds = parseInt(timeInput)
  let timeUnit = timeInput.split(seconds).pop();

  if (timeUnit == "min") {
    seconds *= 60;
  }

  setTimeout(function() {
    seconds--
    if(seconds >= 0) {
      console.log(`Left: ${seconds}s`)
      time(`${seconds}s`)
    }else {
      process.exit(0)
    }
  }, 1000)
}

time()
// process.exit(1)