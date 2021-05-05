input.onButtonPressed(Button.A, function () {
    if (Question_number == 1) {
        basic.showString("Good. I am feeling great!")
    }
})
input.onButtonPressed(Button.B, function () {
    if (Question_number == 1) {
        basic.showString("I'm sorry to hear that.")
        basic.showString("Oh, and by the way, I hate your shoes.")
        basic.showString("Just kidding. I didn't want to be predictable, so I said that I hate them. Really, I think those shoes are quite nice.")
    }
})
let Question_number = 0
Question_number = 0
basic.showString("Hello!")
basic.showString("I'm an AI. You can press A or B to talk to me.")
basic.showString("How are you? A is good, B is not so good.")
Question_number += 1
basic.pause(5000)
basic.pause(5000)
basic.showIcon(IconNames.Heart)
basic.pause(5000)
basic.pause(5000)
