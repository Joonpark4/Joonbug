import random

def number_guessing_game():
    print("Number guessing game! You vs. AI")
    number = random.randint(1, 100)
    attempts = 0
    
    user_min = 1
    user_max = 100
    
    ai_min = 1
    ai_max = 100
    
    while True:
        user_guess = int(input("Enter your guess: "))
        
        if user_guess == number:
            print(f"You win! The number was {number}. You took {attempts} attempts.")
            break
        
        elif user_guess < number:
            print("Your guess is lower.")
            user_min = user_guess + 1
        elif user_guess > number:
            print("Your guess is higher.")
            user_max = user_guess - 1
        
        ai_guess = random.randint(ai_min, ai_max)
        print(f"AI guessed {ai_guess}")
        
        if ai_guess == number:
            print(f"AI wins! The number was {number}. AI took {attempts} attempts.")
            break
        
        elif ai_guess < number:
            print("AI's guess is lower.")
            ai_min = ai_guess + 1
        elif ai_guess > number:
            print("AI's guess is higher.")
            ai_max = ai_guess - 1
        
        attempts += 1

number_guessing_game()
