age = int(input("How old are you?"))
print("you are", age, "years old")
if age < 18:
    print("So you can't drink")
elif age >=18 and age <=19:
    print("Can I check your ID again?")
else:
    print("Go ahead!")