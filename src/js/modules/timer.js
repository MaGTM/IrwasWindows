const DAY = 86400000,
    HOUR = 3600000,
    MINUTE = 60000,
    SECOND = 1000

export const timer = (year, month, day, hours = 0) => {
    let date = new Date(year, (month-1), day, hours)
    let timeLast = (date) => {
        let dif = date - Date.now()
        let mainTime = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }

        if (dif > DAY) {
            mainTime.days = Math.floor(dif / DAY)
            dif -= mainTime.days * DAY
        }
        if (DAY > dif) {
            mainTime.hours = Math.floor(dif / HOUR)
            dif -= mainTime.hours * HOUR
        }
        if (HOUR > dif) {
            mainTime.minutes = Math.floor(dif / MINUTE)
            dif -= mainTime.minutes * MINUTE
        }
        if (MINUTE > dif) {
            mainTime.seconds = Math.floor(dif / SECOND)
            dif -= mainTime.seconds * SECOND
        }

        for(let key in mainTime) {
            if(mainTime[key] < 10) {
                mainTime[key] = '0' + mainTime[key]
            }
        }
        return mainTime
    }

    let setTimer = (timeObject, daySelector, hourSelector, minuteSelector, secondSelector) => {
        document.querySelector(daySelector).innerHTML = timeObject.days
        document.querySelector(hourSelector).innerHTML = timeObject.hours
        document.querySelector(minuteSelector).innerHTML = timeObject.minutes
        document.querySelector(secondSelector).innerHTML = timeObject.seconds
    }

    setInterval(() => {
        setTimer(timeLast(date), '#days', '#hours', '#minutes', '#seconds')
    }, 1000)

    setTimer(timeLast(date), '#days', '#hours', '#minutes', '#seconds')
}