// Created by: Ahmed
// Created date: Oct 5, 2020
// 
// This program use Area and Perimeter.
// 
// 
game.splash("Let's calculate the area and perimeter of a trapezoid ")
let Basea = game.askForNumber("Enter the base(A) of trapezoid")
let BaseB = game.askForNumber("Enter the base(B) of trapezoid")
let SideC = game.askForNumber("Enter the side(C) of trapezoid")
let SideD = game.askForNumber("Enter the side(D) of trapezoid")
let Perimeter = Basea + BaseB + (SideC + SideD)
game.splash("The perimeter is ", convertToText(Perimeter))
game.splash("Let's calculate the area  of a trapezoid ")
Basea = game.askForNumber("Enter the base(A) of trapezoid")
BaseB = game.askForNumber("Enter the base(B) of trapezoid")
let Hight = game.askForNumber("Enter the hight of trapezoid")
let Area = (Basea + BaseB) * (Hight / 2)
game.splash("The area is ", convertToText(Area))
