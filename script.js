a = document.querySelectorAll("#fbtn")
b = document.querySelectorAll("#slb")




setInterval(function () {

    if (a[0].checked == true) {
        b[0].innerHTML = "On"
    }
    else {
        b[0].innerHTML = "Off"
    }


    if (a[1].checked == true) {
        b[1].innerHTML = "On"
    }
    else {
        b[1].innerHTML = "Off"
    }


    if (a[2].checked == true) {
        b[2].innerHTML = "On"
    }
    else {
        b[2].innerHTML = "Off"
    }



    if (a[3].checked == true) {
        b[3].innerHTML = "On"
    }
    else {
        b[3].innerHTML = "Off"
    }



    if (a[4].checked == true) {
        b[4].innerHTML = "On"
    }
    else {
        b[4].innerHTML = "Off"
    }



    if (a[5].checked == true) {
        b[5].innerHTML = "On"
    }
    else {
        b[5].innerHTML = "Off"
    }
}, 10)