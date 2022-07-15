basic.forever(function () {
    led.toggle(randint(0, 4), randint(0, 4))
    basic.pause(200)
})
