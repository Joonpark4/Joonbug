def make_juice(fruit): 
    return f"{fruit} + juice" #이 함수는 fruit 변수 뒤에 "+ juice" 문자열을 더하는 함수이다

def add_ice(juice):
    return f"{juice} + ice" #이 함수는 juice 변수 뒤에 "+ ice" 문자열을 더하는 함수이다

def add_suger(iced_juice):
    return f"{iced_juice} + suger" #이 함수는 iced_juice 변수 뒤에 "+ suger" 문자열을 더하는 함수이다

juice = make_juice("apple") #이 주스변수는 함수 내 주스변수와는 다르게 독립적인 주스 변수
cold_juice = add_ice(juice) #위쪽 함수로 얻게 된 juice 변수 뒤에 ice 문자열을 추가해준다.
perfect_juice = add_suger(cold_juice)

print(perfect_juice)