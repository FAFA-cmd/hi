input.onButtonPressed(Button.A, function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
})
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
basic.forever(function () {
	
})
