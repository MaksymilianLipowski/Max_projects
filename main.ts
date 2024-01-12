input.onButtonPressed(Button.A, function () {
    if (position >= 1) {
        led.unplot(position, 4)
        position += -1
        led.plot(position, 4)
    } else {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    if (position <= 3) {
        led.unplot(position, 4)
        position += 1
        led.plot(position, 4)
    } else {
        music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
let position = 0
let x = 0
let y = 0
let delay = 500
let colision = 0
position = 2
let score = 0
led.plot(position, 4)
basic.pause(100)
while (colision != 1) {
    x = randint(0, 4)
    for (let y = 0; y <= 4; y++) {
        if (led.point(x, y)) {
            music.play(music.tonePlayable(294, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            score += 1
        } else {
            led.plot(x, y)
            basic.pause(delay)
            led.unplot(x, y)
            if (y == 4) {
                colision = 1
            }
        }
    }
}
basic.showString("" + (score))
music.play(music.stringPlayable("A F E F D G E F ", 120), music.PlaybackMode.UntilDone)
