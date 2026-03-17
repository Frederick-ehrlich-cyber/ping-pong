def on_received_number(receivedNumber):
    global ballBeiMir, spielLaeuft
    if receivedNumber == 1:
        ballBeiMir = True
        spielLaeuft = True
        basic.set_led_color(0x00ff00)
        basic.show_icon(IconNames.HEART)
radio.on_received_number(on_received_number)

def on_button_ab():
    global spielLaeuft, ballBeiMir
    if spielLaeuft == False:
        spielLaeuft = True
        ballBeiMir = False
        radio.send_number(1)
        basic.show_icon(IconNames.ARROW_EAST)
        basic.pause(800)
        basic.clear_screen()
input.on_button_event(Button.AB, input.button_event_click(), on_button_ab)

spielLaeuft = False
ballBeiMir = False
radio.set_group(1)
ballBeiMir = False
spielLaeuft = False

def on_forever():
    pass
basic.forever(on_forever)
