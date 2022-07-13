var javaStuff = [{
        "title": "Work",
        "timeframes": {
            "daily": {
                "current": 5,
                "previous": 7
            },
            "weekly": {
                "current": 32,
                "previous": 36
            },
            "monthly": {
                "current": 103,
                "previous": 128
            }
        }
    },
    {
        "title": "Play",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 2
            },
            "weekly": {
                "current": 10,
                "previous": 8
            },
            "monthly": {
                "current": 23,
                "previous": 29
            }
        }
    },
    {
        "title": "Study",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 7
            },
            "monthly": {
                "current": 13,
                "previous": 19
            }
        }
    },
    {
        "title": "Exercise",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 1
            },
            "weekly": {
                "current": 4,
                "previous": 5
            },
            "monthly": {
                "current": 11,
                "previous": 18
            }
        }
    },
    {
        "title": "Social",
        "timeframes": {
            "daily": {
                "current": 1,
                "previous": 3
            },
            "weekly": {
                "current": 5,
                "previous": 10
            },
            "monthly": {
                "current": 21,
                "previous": 23
            }
        }
    },
    {
        "title": "Self Care",
        "timeframes": {
            "daily": {
                "current": 0,
                "previous": 1
            },
            "weekly": {
                "current": 2,
                "previous": 2
            },
            "monthly": {
                "current": 7,
                "previous": 11
            }
        }
    }
]
document.getElementById('dailyId').style.opacity = "100%";
var variable1 = document.getElementById('dailyWorkHours').innerHTML = javaStuff[0].timeframes.daily.current + "hrs";
var variable2 = document.getElementById('dailyLastWorkHours').innerHTML = "Last Week - " + javaStuff[0].timeframes.daily.previous + "hrs";

var variable3 = document.getElementById('dailyplayHours').innerHTML = javaStuff[1].timeframes.daily.current + "hrs";
var variable4 = document.getElementById('dailyLastplayHours').innerHTML = "Last Week - " + javaStuff[1].timeframes.daily.previous + "hrs";

var variable5 = document.getElementById('dailystudyHours').innerHTML = javaStuff[2].timeframes.daily.current + "hrs";
var variable6 = document.getElementById('dailyLaststudyHours').innerHTML = "Last Week - " + javaStuff[2].timeframes.daily.previous + "hrs";

var variable7 = document.getElementById('dailyexcerciseHours').innerHTML = javaStuff[3].timeframes.daily.current + "hrs";
var variable8 = document.getElementById('dailyLastexcerciseHours').innerHTML = "Last Week - " + javaStuff[3].timeframes.daily.previous + "hrs";

var variable9 = document.getElementById('dailysocialHours').innerHTML = javaStuff[4].timeframes.daily.current + "hrs";
var variable10 = document.getElementById('dailyLastsocialHours').innerHTML = "Last Week - " + javaStuff[4].timeframes.daily.previous + "hrs";

var variable11 = document.getElementById('dailyselfCareHours').innerHTML = javaStuff[5].timeframes.daily.current + "hrs";
var variable12 = document.getElementById('dailyLastselfCareHours').innerHTML = "Last Week - " + javaStuff[5].timeframes.daily.previous + "hrs";

function daily() {
    var variable1 = document.getElementById('dailyWorkHours').innerHTML = javaStuff[0].timeframes.daily.current + "hrs";
    var variable2 = document.getElementById('dailyLastWorkHours').innerHTML = "Last Week - " + javaStuff[0].timeframes.daily.previous + "hrs";

    var variable3 = document.getElementById('dailyplayHours').innerHTML = javaStuff[1].timeframes.daily.current + "hrs";
    var variable4 = document.getElementById('dailyLastplayHours').innerHTML = "Last Week - " + javaStuff[1].timeframes.daily.previous + "hrs";

    var variable5 = document.getElementById('dailystudyHours').innerHTML = javaStuff[2].timeframes.daily.current + "hrs";
    var variable6 = document.getElementById('dailyLaststudyHours').innerHTML = "Last Week - " + javaStuff[2].timeframes.daily.previous + "hrs";

    var variable7 = document.getElementById('dailyexcerciseHours').innerHTML = javaStuff[3].timeframes.daily.current + "hrs";
    var variable8 = document.getElementById('dailyLastexcerciseHours').innerHTML = "Last Week - " + javaStuff[3].timeframes.daily.previous + "hrs";

    var variable9 = document.getElementById('dailysocialHours').innerHTML = javaStuff[4].timeframes.daily.current + "hrs";
    var variable10 = document.getElementById('dailyLastsocialHours').innerHTML = "Last Week - " + javaStuff[4].timeframes.daily.previous + "hrs";

    var variable11 = document.getElementById('dailyselfCareHours').innerHTML = javaStuff[5].timeframes.daily.current + "hrs";
    var variable12 = document.getElementById('dailyLastselfCareHours').innerHTML = "Last Week - " + javaStuff[5].timeframes.daily.previous + "hrs";
    document.getElementById('container').innerHTML = `
<div class="grid1">
<div class="report">
    <img src="./images/image-jeremy.png" alt="images" class="jeremy">
    <p>Report for</p>
    <h2>Jeremy Robson</h2>
</div>
<div class="days">
    <div onclick="daily()" class="dailyClass" id="dailyId">Daily</div>
    <div onclick="weekly()" class="weeklyClass" id="weeklyId">Weekly</div>
    <div onclick="monthly()" class="monthlyClass" id="monthlyId">Monthly</div>
</div>
</div>
<div class="grid2">
<div class="icon">
</div>
<div class="hours">
    <div class="flex">
        <div class="flex1">Work</div>
        <div class="flex2">
            <div class="circles"></div>
            <div class="circles"></div>
            <div class="circles"></div>
        </div>
    </div>
    <div class="workHours">
        <h2 id="dailyWorkHours">${variable1}</h2>
        <p id="dailyLastWorkHours">${variable2}</p>
    </div>
</div>
</div>
<div class="grid3">
<div class="icon2">
</div>
<div class="hours2">
    <div class="flex">
        <div class="flex1">Play</div>
        <div class="flex2">
            <div class="circles"></div>
            <div class="circles"></div>
            <div class="circles"></div>
        </div>
    </div>
    <div class="playHours">
        <h2 id="dailyplayHours">${variable3}</h2>
        <p id="dailyLastplayHours">${variable4}</p>
    </div>
</div>
</div>
<div class="grid4">
<div class="icon3">
</div>
<div class="hours3">
    <div class="flex">
        <div class="flex1">Study</div>
        <div class="flex2">
            <div class="circles"></div>
            <div class="circles"></div>
            <div class="circles"></div>
        </div>
    </div>
    <div class="studyHours">
        <h2 id="dailystudyHours">${variable5}</h2>
        <p id="dailyLaststudyHours">${variable6}</p>
    </div>
</div>
</div>
<div class="grid5">
<div class="icon4">
</div>
<div class="hours4">
    <div class="flex">
        <div class="flex1">Excercise</div>
        <div class="flex2">
            <div class="circles"></div>
            <div class="circles"></div>
            <div class="circles"></div>
        </div>
    </div>
    <div class="excerciseHours">
        <h2 id="dailyexcerciseHours">${variable7}</h2>
        <p id="dailyLastexcerciseHours">${variable8}</p>
    </div>
</div>
</div>
<div class="grid6">
<div class="icon5">
</div>
<div class="hours5">
    <div class="flex">
        <div class="flex1">Social</div>
        <div class="flex2">
            <div class="circles"></div>
            <div class="circles"></div>
            <div class="circles"></div>
        </div>
    </div>
    <div class="socialHours">
        <h2 id="dailysocialHours">${variable9}</h2>
        <p id="dailyLastsocialHours">${variable10}</p>
    </div>
</div>
</div>
<div class="grid7">
<div class="icon6">
</div>
<div class="hours6">
    <div class="flex">
        <div class="flex1">Self Care</div>
        <div class="flex2">
            <div class="circles"></div>
            <div class="circles"></div>
            <div class="circles"></div>
        </div>
    </div>
    <div class="selfCareHours">
        <h2 id="dailyselfCareHours">${variable11}</h2>
        <p id="dailyLastselfCareHours">${variable12}</p>
    </div>
</div>
</div>
`

    document.getElementById('dailyId').style.opacity = "100%";
    document.getElementById('weeklyId').style.opacity = "50%";
    document.getElementById('monthlyId').style.opacity = "50%";

    // function myFunction(x) {
    //     if (x.matches) { // If media query matches
    //         document.getElementById('dailyLastWorkHours').style.marginLeft = "170px";
    //         document.getElementById('dailyLastplayHours').style.marginLeft = "170px";
    //         document.getElementById('dailyLaststudyHours').style.marginLeft = "170px";
    //         document.getElementById('dailyLastexcerciseHours').style.marginLeft = "170px";
    //         document.getElementById('dailyLastsocialHours').style.marginLeft = "170px";
    //         document.getElementById('dailyLastselfCareHours').style.marginLeft = "170px";
    //     } else {}
    // }

    // var x = window.matchMedia("(max-width: 768px)");
    // myFunction(x);
    // x.addListener(myFunction)

}



function weekly() {
    var variable1w = document.getElementById('dailyWorkHours').innerHTML = javaStuff[0].timeframes.weekly.current + "hrs";
    var variable2w = document.getElementById('dailyLastWorkHours').innerHTML = "Last Week - " + javaStuff[0].timeframes.weekly.previous + "hrs";

    var variable3w = document.getElementById('dailyplayHours').innerHTML = javaStuff[1].timeframes.weekly.current + "hrs";
    var variable4w = document.getElementById('dailyLastplayHours').innerHTML = "Last Week - " + javaStuff[1].timeframes.weekly.previous + "hrs";

    var variable5w = document.getElementById('dailystudyHours').innerHTML = javaStuff[2].timeframes.weekly.current + "hrs";
    var variable6w = document.getElementById('dailyLaststudyHours').innerHTML = "Last Week - " + javaStuff[2].timeframes.weekly.previous + "hrs";

    var variable7w = document.getElementById('dailyexcerciseHours').innerHTML = javaStuff[3].timeframes.weekly.current + "hrs";
    var variable8w = document.getElementById('dailyLastexcerciseHours').innerHTML = "Last Week - " + javaStuff[3].timeframes.weekly.previous + "hrs";

    var variable9w = document.getElementById('dailysocialHours').innerHTML = javaStuff[4].timeframes.weekly.current + "hrs";
    var variable10w = document.getElementById('dailyLastsocialHours').innerHTML = "Last Week - " + javaStuff[4].timeframes.weekly.previous + "hrs";

    var variable11w = document.getElementById('dailyselfCareHours').innerHTML = javaStuff[5].timeframes.weekly.current + "hrs";
    var variable12w = document.getElementById('dailyLastselfCareHours').innerHTML = "Last Week - " + javaStuff[5].timeframes.weekly.previous + "hrs";
    document.getElementById('container').innerHTML = `
<div class="grid1">
<div class="report">
    <img src="./images/image-jeremy.png" alt="images" class="jeremy">
    <p>Report for</p>
    <h2>Jeremy Robson</h2>
</div>
<div class="days">
    <div onclick="daily()" class="dailyClass" id="dailyId">Daily</div>
    <div onclick="weekly()" class="weeklyClass" id="weeklyId">Weekly</div>
    <div onclick="monthly()" class="monthlyClass" id="monthlyId">Monthly</div>
</div>
</div>
<div class="grid2">
<div class="icon">
</div>
<div class="hours">
    <div class="flex">
        <div class="flex1">Work</div>
        <div class="flex2">
            <div class="circles"></div>
            <div class="circles"></div>
            <div class="circles"></div>
        </div>
    </div>
    <div class="workHours">
        <h2 id="dailyWorkHours">${variable1w}</h2>
        <p id="dailyLastWorkHours">${variable2w}</p>
    </div>
</div>
</div>
<div class="grid3">
<div class="icon2">
</div>
<div class="hours2">
    <div class="flex">
        <div class="flex1">Play</div>
        <div class="flex2">
            <div class="circles"></div>
            <div class="circles"></div>
            <div class="circles"></div>
        </div>
    </div>
    <div class="playHours">
        <h2 id="dailyplayHours">${variable3w}</h2>
        <p id="dailyLastplayHours">${variable4w}</p>
    </div>
</div>
</div>
<div class="grid4">
<div class="icon3">
</div>
<div class="hours3">
    <div class="flex">
        <div class="flex1">Study</div>
        <div class="flex2">
            <div class="circles"></div>
            <div class="circles"></div>
            <div class="circles"></div>
        </div>
    </div>
    <div class="studyHours">
        <h2 id="dailystudyHours">${variable5w}</h2>
        <p id="dailyLaststudyHours">${variable6w}</p>
    </div>
</div>
</div>
<div class="grid5">
<div class="icon4">
</div>
<div class="hours4">
    <div class="flex">
        <div class="flex1">Excercise</div>
        <div class="flex2">
            <div class="circles"></div>
            <div class="circles"></div>
            <div class="circles"></div>
        </div>
    </div>
    <div class="excerciseHours">
        <h2 id="dailyexcerciseHours">${variable7w}</h2>
        <p id="dailyLastexcerciseHours">${variable8w}</p>
    </div>
</div>
</div>
<div class="grid6">
<div class="icon5">
</div>
<div class="hours5">
    <div class="flex">
        <div class="flex1">Social</div>
        <div class="flex2">
            <div class="circles"></div>
            <div class="circles"></div>
            <div class="circles"></div>
        </div>
    </div>
    <div class="socialHours">
        <h2 id="dailysocialHours">${variable9w}</h2>
        <p id="dailyLastsocialHours">${variable10w}</p>
    </div>
</div>
</div>
<div class="grid7">
<div class="icon6">
</div>
<div class="hours6">
    <div class="flex">
        <div class="flex1">Self Care</div>
        <div class="flex2">
            <div class="circles"></div>
            <div class="circles"></div>
            <div class="circles"></div>
        </div>
    </div>
    <div class="selfCareHours">
        <h2 id="dailyselfCareHours">${variable11w}</h2>
        <p id="dailyLastselfCareHours">${variable12w}</p>
    </div>
</div>
</div>
`

    document.getElementById('dailyId').style.opacity = "50%";
    document.getElementById('weeklyId').style.opacity = "100%";
    document.getElementById('monthlyId').style.opacity = "50%";

    // function myFunction(x) {
    //     if (x.matches) { // If media query matches
    //         document.getElementById('dailyLastWorkHours').style.marginLeft = "167px";
    //         document.getElementById('dailyLastplayHours').style.marginLeft = "170px";
    //         document.getElementById('dailyLaststudyHours').style.marginLeft = "170px";
    //         document.getElementById('dailyLastexcerciseHours').style.marginLeft = "170px";
    //         document.getElementById('dailyLastsocialHours').style.marginLeft = "167px";
    //         document.getElementById('dailyLastselfCareHours').style.marginLeft = "170px";
    //     } else {}
    // }

    // var x = window.matchMedia("(max-width: 768px)");
    // myFunction(x);
    // x.addListener(myFunction)
}



function monthly() {
    var variable1wm = document.getElementById('dailyWorkHours').innerHTML = javaStuff[0].timeframes.monthly.current + "hrs";
    var variable2wm = document.getElementById('dailyLastWorkHours').innerHTML = "Last Week - " + javaStuff[0].timeframes.monthly.previous + "hrs";

    var variable3wm = document.getElementById('dailyplayHours').innerHTML = javaStuff[1].timeframes.monthly.current + "hrs";
    var variable4wm = document.getElementById('dailyLastplayHours').innerHTML = "Last Week - " + javaStuff[1].timeframes.monthly.previous + "hrs";

    var variable5wm = document.getElementById('dailystudyHours').innerHTML = javaStuff[2].timeframes.monthly.current + "hrs";
    var variable6wm = document.getElementById('dailyLaststudyHours').innerHTML = "Last Week - " + javaStuff[2].timeframes.monthly.previous + "hrs";

    var variable7wm = document.getElementById('dailyexcerciseHours').innerHTML = javaStuff[3].timeframes.monthly.current + "hrs";
    var variable8wm = document.getElementById('dailyLastexcerciseHours').innerHTML = "Last Week - " + javaStuff[3].timeframes.monthly.previous + "hrs";

    var variable9wm = document.getElementById('dailysocialHours').innerHTML = javaStuff[4].timeframes.monthly.current + "hrs";
    var variable10wm = document.getElementById('dailyLastsocialHours').innerHTML = "Last Week - " + javaStuff[4].timeframes.monthly.previous + "hrs";

    var variable11wm = document.getElementById('dailyselfCareHours').innerHTML = javaStuff[5].timeframes.monthly.current + "hrs";
    var variable12wm = document.getElementById('dailyLastselfCareHours').innerHTML = "Last Week - " + javaStuff[5].timeframes.monthly.previous + "hrs";
    document.getElementById('container').innerHTML = `
<div class="grid1">
<div class="report">
    <img src="./images/image-jeremy.png" alt="images" class="jeremy">
    <p>Report for</p>
    <h2>Jeremy Robson</h2>
</div>
<div class="days">
    <div onclick="daily()" class="dailyClass" id="dailyId">Daily</div>
    <div onclick="weekly()" class="weeklyClass" id="weeklyId">Weekly</div>
    <div onclick="monthly()" class="monthlyClass" id="monthlyId">Monthly</div>
</div>
</div>
<div class="grid2">
<div class="icon">
</div>
<div class="hours">
    <div class="flex">
        <div class="flex1">Work</div>
        <div class="flex2">
            <div class="circles"></div>
            <div class="circles"></div>
            <div class="circles"></div>
        </div>
    </div>
    <div class="workHours">
        <h2 id="dailyWorkHours">${variable1wm}</h2>
        <p id="dailyLastWorkHours">${variable2wm}</p>
    </div>
</div>
</div>
<div class="grid3">
<div class="icon2">
</div>
<div class="hours2">
    <div class="flex">
        <div class="flex1">Play</div>
        <div class="flex2">
            <div class="circles"></div>
            <div class="circles"></div>
            <div class="circles"></div>
        </div>
    </div>
    <div class="playHours">
        <h2 id="dailyplayHours">${variable3wm}</h2>
        <p id="dailyLastplayHours">${variable4wm}</p>
    </div>
</div>
</div>
<div class="grid4">
<div class="icon3">
</div>
<div class="hours3">
    <div class="flex">
        <div class="flex1">Study</div>
        <div class="flex2">
            <div class="circles"></div>
            <div class="circles"></div>
            <div class="circles"></div>
        </div>
    </div>
    <div class="studyHours">
        <h2 id="dailystudyHours">${variable5wm}</h2>
        <p id="dailyLaststudyHours">${variable6wm}</p>
    </div>
</div>
</div>
<div class="grid5">
<div class="icon4">
</div>
<div class="hours4">
    <div class="flex">
        <div class="flex1">Excercise</div>
        <div class="flex2">
            <div class="circles"></div>
            <div class="circles"></div>
            <div class="circles"></div>
        </div>
    </div>
    <div class="excerciseHours">
        <h2 id="dailyexcerciseHours">${variable7wm}</h2>
        <p id="dailyLastexcerciseHours">${variable8wm}</p>
    </div>
</div>
</div>
<div class="grid6">
<div class="icon5">
</div>
<div class="hours5">
    <div class="flex">
        <div class="flex1">Social</div>
        <div class="flex2">
            <div class="circles"></div>
            <div class="circles"></div>
            <div class="circles"></div>
        </div>
    </div>
    <div class="socialHours">
        <h2 id="dailysocialHours">${variable9wm}</h2>
        <p id="dailyLastsocialHours">${variable10wm}</p>
    </div>
</div>
</div>
<div class="grid7">
<div class="icon6">
</div>
<div class="hours6">
    <div class="flex">
        <div class="flex1">Self Care</div>
        <div class="flex2">
            <div class="circles"></div>
            <div class="circles"></div>
            <div class="circles"></div>
        </div>
    </div>
    <div class="selfCareHours">
        <h2 id="dailyselfCareHours">${variable11wm}</h2>
        <p id="dailyLastselfCareHours">${variable12wm}</p>
    </div>
</div>
</div>
`

    document.getElementById('dailyId').style.opacity = "50%";
    document.getElementById('weeklyId').style.opacity = "50%";
    document.getElementById('monthlyId').style.opacity = "100%";


    // function myFunction(x) {
    //     if (x.matches) { // If media query matches
    //         document.getElementById('dailyLastWorkHours').style.marginLeft = "160px";
    //         document.getElementById('dailyLastplayHours').style.marginLeft = "160px";
    //         document.getElementById('dailyLaststudyHours').style.marginLeft = "160px";
    //         document.getElementById('dailyLastexcerciseHours').style.marginLeft = "160px";
    //         document.getElementById('dailyLastsocialHours').style.marginLeft = "160px";
    //         document.getElementById('dailyLastselfCareHours').style.marginLeft = "160px";
    //     } else {}
    // }

    // var x = window.matchMedia("(max-width: 768px)");
    // myFunction(x);
    // x.addListener(myFunction)

}