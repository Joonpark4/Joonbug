player = {
    'name' : 'nico',
    'age' : 12,
    'alive' : True,
    'fav_food' : ["π", "π"]
}
# print(player.get('age'))
# print(player.get('fav_food'))
# player.pop('age') #age ν€λ₯Ό μ­μ 
# player['xp'] = 1500 #xp ν€λ₯Ό λνκ³  1500 κ°μ λμ
# print(player)
player['fav_food'].append("π­") #λμλλ¦¬ λ΄ λ¦¬μ€νΈμ κ° μΆκ°
print(player['fav_food'][1]) #λμλλ¦¬ λ΄ λ¦¬μ€νΈ λ΄ μΈλ±μ€ μΆλ ₯