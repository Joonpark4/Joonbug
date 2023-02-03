days_of_week = ["Mon", "Tue", "Wed", "Thur", "Fri", ["Sat", "Sun"]]
print(days_of_week[-1][0])
print(days_of_week)

print(days_of_week[-1].pop(-1))
print(days_of_week)

#어떻게 하면 리스트 내의 리스트에 있는 값을 하나만 가져올 수 있을까? 
#-> 연속 대괄호로 가져올 수 있다 [리스트 내 리스트를 호출][리스트 내 리스트 내 값을 호출]
#어떻게 하면 리스트 내의 리스트에 있는 값을 pop 할 수 있을까?
#-> 리스트 내 리스트를 먼저 호출해서 pop 한다. [리스트 내 리스트를 호출].pop(리스트 내 리스트 값을 pop 메소드로 호출)