player = {
    'name' : 'nico',
    'age' : 12,
    'alive' : True,
    'fav_food' : ["🍕", "🍔"]
}
# print(player.get('age'))
# print(player.get('fav_food'))
# player.pop('age') #age 키를 삭제
# player['xp'] = 1500 #xp 키를 더하고 1500 값을 대입
# print(player)
player['fav_food'].append("🌭") #딕셔너리 내 리스트에 값 추가
print(player['fav_food'][1]) #딕셔너리 내 리스트 내 인덱스 출력