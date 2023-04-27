input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    Número_aleatorio = randint(0, 5)
    if (Número_aleatorio == 2) {
        basic.showString("SI")
    } else if (Número_aleatorio == 1) {
        basic.showString("NO")
    } else if (Número_aleatorio == 3) {
        basic.showString("TAL VEZ")
    } else if (Número_aleatorio == 4) {
        basic.showString("NO SE")
    } else {
        basic.showString("ALOMEJOR")
    }
    basic.showNumber(8)
})
let Número_aleatorio = 0
basic.showString("haz una pregunta")
basic.showNumber(8)
