input.onButtonPressed(Button.A, function () {
    led.unplot(position, 4)
    position += -1
    led.plot(position, 4)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(position, 4)
    position += 1
    led.plot(position, 4)
})
let position = 0
position = 2
