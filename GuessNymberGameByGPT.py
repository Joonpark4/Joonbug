import random

def number_guessing_game():
    print("Number guessing game! You vs. AI")
    number = random.randint(1, 100)
    guess = None
    attempts = 0
    
    while guess != number:
        user_guess = int(input("Enter your guess: "))
        ai_guess = random.randint(1, 100)
        print(f"AI guessed {ai_guess}")
        
        if user_guess == number:
            print(f"You win! The number was {number}. You took {attempts} attempts.")
            break
        
        elif ai_guess == number:
            print(f"AI wins! The number was {number}. AI took {attempts} attempts.")
            break
        
        elif user_guess < number:
            print("Your guess is lower.")
        elif user_guess > number:
            print("Your guess is higher.")
        
        elif ai_guess < number:
            print("AI's guess is lower.")
        elif ai_guess > number:
            print("AI's guess is higher.")
        
        attempts += 1

number_guessing_game()