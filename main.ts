radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        ballBeiMir = true
        spielLaeuft = true
        basic.setLedColor(0x00ff00)
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    if (ballBeiMir == true) {
        spielLaeuft = true
        basic.setLedColor(0x000000)
        radio.sendNumber(1)
        basic.showIcon(IconNames.ArrowWest)
        basic.pause(500)
        basic.clearScreen()
    }
})
input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    if (spielLaeuft == false) {
        spielLaeuft = true
        ballBeiMir = false
        radio.sendNumber(1)
        basic.showIcon(IconNames.ArrowEast)
        basic.pause(800)
        basic.clearScreen()
    }
})
let spielLaeuft = false
let ballBeiMir = false
radio.setGroup(50)
ballBeiMir = false
spielLaeuft = false
basic.forever(function () {
	
})
