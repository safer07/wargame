---
info:
  name: F-16A FIGHTING FALCON
  image: /img/aircraft/multirole/usa/5_f-16a_fighting_falcon.png
  class: Многоцелевой
  country: США
  cost: 100
  year: 1978

body:
  hp: 10
  armor_front: 0
  armor_side: 0
  armor_rear: 0
  armor_top: 0
  ecm: 20
  stealth: Плохо
  air_detection: Хорошо
  speed: 1000
  turn_radius: 350
  fuel: 5000
  tot: 150

autocannon:
  name: M61A1 Vulcan
  attr_fg: true
  ammo: 564
  range_ground: 2100
  range_helicopters: 1575
  range_airplanes: 2800
  accuracy: 40
  stabilizer: 40
  he_power: 1
  suppression: 92
  rate_of_fire: 4028

cluster_bomb:
  name: Mk 20 Rockeye II
  attr_ptk: true
  attr_kass: true
  ammo: 4
  range_ground: 3500
  accuracy: 25
  ap_power: 6
  suppression: 300
  rate_of_fire: 42

aam:
  name: AIM-9J
  attr_fg: true
  attr_smn: true
  ammo: 4
  range_helicopters: 2100
  range_airplanes: 3500
  accuracy: 40
  stabilizer: 40
  he_power: 4
  suppression: 160
  rate_of_fire: 30
---