from random import randint
Correct = randint(0, 100)
Winner = True
Minimum = 0
Maximum = 100
print("Guess the number under 100")
while Winner:
    UserN = int(input("Number : "))
    if UserN == Correct:
        print("You are the winner!")
        Winner = False
    if UserN > Correct:
        print("Down!")
        if UserN <= Maximum:
            Maximum = UserN -1
        PCN = randint(Minimum, Maximum)
        print("PC chosed", PCN)
        if PCN == Correct:
            print("You are the loser")
            Winner = False
        elif PCN > Correct:
            print("Down!")
            Maximum = PCN -1
        else:
            print("Up!")
            Minimum = PCN +1
    if UserN < Correct:
        print("Up!")
        if UserN >= Minimum:
            Minimum = UserN +1
        PCN = randint(Minimum, Maximum)
        print("PC chosed", PCN)
        if PCN == Correct:
            print("You are the loser")
            Winner = False
        elif PCN > Correct:
            print("Down!")
            Maximum = PCN -1
        else:
            print("Up!")
            Minimum = PCN +1

#문제점 : 이미 정답이 더 높은 숫자임을 알고도 유저가 실수하여 낮은 숫자를 골랐을 때 PC도 같이 낮은 실수를 한다 
#(유저의 숫자가 현재 미니멈보다 크거나 맥시멈보다 작아야만 미니멈과 맥시멈을 최신화함으로 해결)
#문제점 : 컴퓨터는 첫 정답으로 절대 1이나 100을 고르지 않는다. (컴퓨터가 고르는 숫자가 아닌 미니멈 맥시멈을 결정하는 숫자에 +1, -1을 하여 해결)
#문제점 : while 조건으로 Winner 변수가 참이어야만 반복을 해야하는데, 이상하게도 Winner 변수를 거짓으로 수정해도 반복된다 (변수의 대소문자 통일로 해결)