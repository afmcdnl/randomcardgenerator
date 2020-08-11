let randomCard = 0
let randomSuit = 0
let cardValue: string[] = []
let cardSuit: string[] = []
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    randomCard = randint(0, 12)
    randomSuit = randint(0, 3)
    cardValue = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
    cardSuit = ["Hearts", "Diamonds", "Spades", "Clubs"]
    basic.showIcon(IconNames.Yes)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("" + (cardValue[randomCard]))
    basic.clearScreen()
    basic.showString("" + (cardSuit[randomSuit]))
})
