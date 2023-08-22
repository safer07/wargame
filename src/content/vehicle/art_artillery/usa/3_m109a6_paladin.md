---
info:
  name: M109A6 PALADIN
  image: /img/vehicle/art_artillery/usa/3_m109a6_paladin.png
  class: САУ
  country: США
  cost: 120
  year: 1992
  prototype: true

body:
  hp: 10
  armor_front: 2
  armor_side: 2
  armor_rear: 1
  armor_top: 1
  size: Большой
  stealth: Плохо
  optics: Оч. плохо
  speed: 60
  speed_road: 110
  fuel: 1000
  autonomy: 350

howitzer:
  name: M284
  attr_fg: true
  attr_korr: true
  attr_stc: true
  attr_dym: true
  ammo: 35
  range_ground: 23800
  dispersion: 3640
  he_power: 7
  suppression: 357
  rate_of_fire: 4

main_gun:
  name: M284
  attr_kin: true
  attr_stc: true
  ammo: 4
  range_ground: 1925
  accuracy: 15
  ap_power: 16
  suppression: 179
  rate_of_fire: 6

mmg:
  name: M2 Browning
  ammo: 500
  range_ground: 1050
  range_helicopters: 875
  accuracy: 15
  stabilizer: 5
  he_power: 0.75
  suppression: 90
  rate_of_fire: 652
---
