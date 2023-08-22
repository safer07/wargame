//
//
// Выделение цветом значений в таблице
//
//

cells.forEach((cell) => {
  const category = cell.closest("ul").classList[0];
  const property = cell.dataset.property;
  const value = cell.dataset.value;

  function color(color) {
    cell.classList.add(`${color}`);
  }

  switch (property) {
    case "hp":
      if (value >= 2 && value <= 4) color("orange");
      if (value >= 5 && value <= 8) color("green");
      if (value >= 10) color("blue");
      break;
    case "training":
      if (value == 1) color("red");
      if (value == 2) color("orange");
      if (value == 3) color("green");
      if (value == 4) color("blue");
      break;
    case "armor_front":
      if (value < 9) color("red");
      if (value >= 9 && value < 15) color("orange");
      if (value >= 15 && value < 21) color("green");
      if (value >= 21) color("blue");
      break;
    case "armor_side":
      if (value < 9) color("red");
      if (value >= 9 && value < 15) color("orange");
      if (value >= 15 && value < 21) color("green");
      if (value >= 21) color("blue");
      break;
    case "armor_rear":
      if (value < 9) color("red");
      if (value >= 9 && value < 15) color("orange");
      if (value >= 15 && value < 21) color("green");
      if (value >= 21) color("blue");
      break;
    case "armor_top":
      if (value < 9) color("red");
      if (value >= 9 && value < 15) color("orange");
      if (value >= 15 && value < 21) color("green");
      if (value >= 21) color("blue");
      break;
    case "size":
      if (value >= 4) color("red");
      if (value == 3) color("orange");
      if (value == 2) color("green");
      if (value == 1) color("blue");
      break;
    case "ecm":
      if (value <= 10) color("red");
      if (value == 20) color("orange");
      if (value >= 30 && value <= 40) color("green");
      if (value >= 50) color("blue");
      break;
    case "stealth":
      if (value == 1) color("red");
      if (value == 2) color("orange");
      if (value >= 3 && value <= 4) color("green");
      if (value == 5) color("blue");
      break;
    case "optics":
      if (value < 3) color("red");
      if (value == 3) color("orange");
      if (value >= 4 && value < 6) color("green");
      if (value == 6) color("blue");
      break;
    case "air_detection":
      if (value <= 2) color("green");
      if (value == 3) color("blue");
      break;
    case "speed":
      if (value < 50) color("red");
      if (value >= 50 && value < 60) color("orange");
      if (value >= 60 && value < 70) color("green");
      if (value >= 70) color("blue");
      break;
    case "speed_road":
      if (value >= 110) color("blue");
      break;
    case "amphibious":
      if (value < 50 && value.length) color("red");
      if (value >= 50 && value < 60) color("orange");
      break;
    case "turn_radius":
      if (value >= 400 && value <= 500) color("orange");
      if (value >= 200 && value <= 350) color("green");
      if (value <= 150) color("blue");
      break;
    // case "fuel":
    //   if (value <= 600) color("blue");
    //   if (value > 600 && value <= 1500) color("green");
    //   break;
    case "supply":
      if (value >= 500 && value <= 800) color("orange");
      if (value >= 1100 && value <= 3700) color("green");
      if (value == 6000) color("blue");
      break;
    // case "autonomy":
    //   if (value < 500) color("orange");
    //   if (value >= 500 && value < 700) color("green");
    //   if (value >= 700) color("blue");
    //   break;
    case "tot":
      if (value == 75) color("green");
      if (value >= 90) color("blue");
      break;
  }

  if (category === "howitzer") {
    switch (property) {
      case "range_ground":
        if (value == 14000) color("red");
        if (value >= 15050 && value <= 23800) color("orange");
        if (value >= 24850 && value <= 29050) color("green");
        if (value >= 37450) color("blue");
        break;
    }
    switch (property) {
      case "dispersion":
        if (value == 9100) color("red");
        if (value >= 6370 && value <= 7280) color("orange");
        if (value >= 3640 && value <= 4550) color("green");
        break;
    }
    switch (property) {
      case "he_power":
        if (value == 6) color("green");
        if (value >= 7) color("blue");
        break;
    }
    switch (property) {
      case "suppression":
        if (value == 281) color("green");
        if (value >= 350) color("blue");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value <= 5) color("red");
        break;
    }
  }

  if (category === "mlrs") {
    switch (property) {
      case "range_ground":
        if (value <= 17500) color("red");
        if (value == 35000) color("orange");
        if (value == 52500) color("green");
        if (value == 105000) color("blue");
        break;
    }
    switch (property) {
      case "dispersion":
        if (value >= 3640 && value <= 4550) color("green");
        if (value == 910) color("blue");
        break;
    }
    switch (property) {
      case "ap_power":
        if (value == 8) color("red");
        if (value == 20) color("green");
        break;
    }
    switch (property) {
      case "he_power":
        if (value == 7) color("orange");
        if (value >= 10 && value <= 11) color("green");
        break;
    }
    switch (property) {
      case "suppression":
        if (value == 285) color("red");
        if (value >= 442 && value <= 680) color("orange");
        if (value == 1420) color("blue");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value <= 3) color("red");
        if (value >= 4 && value <= 7) color("orange");
        if (value == 9) color("green");
        break;
    }
  }

  if (category === "mortar") {
    switch (property) {
      case "range_ground":
        if (value >= 4900 && value <= 6300) color("green");
        if (value == 7700) color("blue");
        break;
    }
    switch (property) {
      case "dispersion":
        if (value >= 2730 && value <= 3185) color("blue");
        break;
    }
    switch (property) {
      case "he_power":
        if (value >= 3 && value <= 4) color("green");
        if (value == 5) color("blue");
        break;
    }
    switch (property) {
      case "suppression":
        if (value >= 187 && value <= 239) color("green");
        if (value == 265) color("blue");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value <= 9) color("red");
        if (value >= 12 && value <= 18) color("orange");
        if (value == 20) color("green");
        break;
    }
  }

  if (category === "main_gun") {
    switch (property) {
      case "range_ground":
        if (value == 1050) color("orange");
        if (value == 1575) color("green");
        if (value >= 1750) color("blue");
        break;
    }
    switch (property) {
      case "accuracy":
        if (value <= 20) color("red");
        if (value >= 25 && value <= 35) color("orange");
        if (value >= 40 && value <= 45) color("green");
        if (value >= 50) color("blue");
        break;
    }
    switch (property) {
      case "stabilizer":
        if (value <= 25) color("red");
        if (value >= 30 && value <= 45) color("orange");
        if (value >= 50 && value <= 65) color("green");
        break;
    }
    switch (property) {
      case "ap_power":
        if (value >= 9 && value <= 14) color("orange");
        if (value >= 15 && value <= 20) color("green");
        if (value >= 23) color("blue");
        break;
    }
    switch (property) {
      case "he_power":
        if (value <= 2) color("red");
        if (value == 3) color("orange");
        if (value >= 4 && value <= 5) color("green");
        if (value == 8) color("blue");
        break;
    }
    switch (property) {
      case "suppression":
        if (value <= 104) color("red");
        if (value >= 115 && value <= 179) color("orange");
        if (value == 380) color("blue");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value <= 5) color("red");
        if (value >= 6 && value <= 9) color("orange");
        if (value >= 10 && value <= 13) color("green");
        if (value == 20) color("blue");
        break;
    }
  }

  if (category === "atgm") {
    switch (property) {
      case "range_ground":
        if (value >= 1575 && value <= 1925) color("green");
        if (value >= 2450) color("blue");
        break;
    }
    switch (property) {
      case "accuracy":
        if (value == 30) color("orange");
        if (value >= 35 && value <= 45) color("green");
        if (value >= 50) color("blue");
        break;
    }
    switch (property) {
      case "stabilizer":
        if (value <= 20) color("red");
        if (value >= 30 && value <= 45) color("orange");
        if (value == 50) color("green");
        break;
    }
    switch (property) {
      case "ap_power":
        // для танков if (value >= 9 && value <= 14) color("orange");
        if (value >= 10 && value <= 15) color("orange");
        if (value >= 16 && value <= 21) color("green");
        if (value >= 22) color("blue");
        break;
    }
    switch (property) {
      case "suppression":
        if (value == 150) color("blue");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value >= 3 && value <= 60) color("green");
        break;
    }
  }

  if (category === "autocannon" || category === "autocannon2") {
    switch (property) {
      case "range_ground":
        if (value >= 1050 && value <= 1925) color("green");
        break;
    }
    switch (property) {
      case "range_helicopters":
        if (value == 1225) color("orange");
        if (value == 1575) color("green");
        if (value >= 2450) color("blue");
        break;
    }
    switch (property) {
      case "range_airplanes":
        if (value >= 1400 && value <= 1750) color("green");
        if (value >= 2275) color("blue");
        break;
    }
    switch (property) {
      case "accuracy":
        if (value <= 15) color("red");
        if (value >= 20 && value <= 25) color("orange");
        if (value >= 30 && value <= 40) color("green");
        if (value >= 45) color("blue");
        break;
    }
    switch (property) {
      case "stabilizer":
        if (value <= 25) color("red");
        if (value >= 30 && value <= 40) color("orange");
        if (value == 50) color("green");
        break;
    }
    switch (property) {
      case "ap_power":
        if (value <= 3) color("red");
        break;
    }
    switch (property) {
      case "he_power":
        if (value == 4) color("orange");
        if (value == 6) color("green");
        if (value >= 7) color("blue");
        break;
    }
    switch (property) {
      case "suppression":
        if (value <= 40) color("red");
        // if (value >= 200 && value <= 240) color("green");
        // if (value >= 280) color("blue");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value <= 749) color("red");
        if (value >= 818) color("blue");
        break;
    }
  }

  if (category === "grenade_launcher") {
    switch (property) {
      case "range_ground":
        if (value <= 455) color("red");
        if (value >= 1225) color("blue");
        break;
    }
    switch (property) {
      case "accuracy":
        if (value <= 15) color("red");
        if (value >= 60) color("blue");
        break;
    }
    switch (property) {
      case "stabilizer":
        if (value <= 10) color("red");
        break;
    }
    switch (property) {
      case "he_power":
        if (value == 1) color("green");
        if (value == 2) color("blue");
        break;
    }
    switch (property) {
      case "suppression":
        if (value >= 70) color("blue");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value == 72) color("orange");
        if (value >= 120) color("blue");
        break;
    }
  }

  if (category === "mmg" || category === "mmg2" || category === "mmg3") {
    switch (property) {
      case "range_ground":
        if (value == 875) color("orange");
        if (value == 1050) color("green");
        break;
    }
    switch (property) {
      case "range_helicopters":
        if (value == 525) color("orange");
        if (value == 875) color("green");
        break;
    }
    switch (property) {
      case "accuracy":
        if (value <= 10) color("red");
        if (value == 15) color("orange");
        if (value == 20) color("green");
        break;
    }
    switch (property) {
      case "stabilizer":
        if (value <= 10) color("red");
        break;
    }
    switch (property) {
      case "he_power":
        if (value == 0.5) color("green");
        if (value >= 0.75) color("blue");
        break;
    }
    switch (property) {
      case "suppression":
        if (value >= 36 && value <= 40) color("orange");
        if (value == 55) color("green");
        if (value == 90) color("blue");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value <= 652) color("red");
        if (value >= 1034 && value <= 1052) color("orange");
        if (value == 1518) color("green");
        if (value == 2758) color("blue");
        break;
    }
  }

  if (category === "flamethrower") {
    switch (property) {
      case "range_ground":
        if (value == 1050) color("blue");
        break;
    }
    switch (property) {
      case "accuracy":
        if (value == 30) color("blue");
        break;
    }
    switch (property) {
      case "he_power":
        if (value == 2) color("blue");
        break;
    }
    switch (property) {
      case "suppression":
        if (value == 100) color("blue");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value == 52) color("blue");
        break;
    }
  }

  if (category === "flamethrower_hand") {
    switch (property) {
      case "range_ground":
        if (value == 350) color("orange");
        break;
    }
    switch (property) {
      case "dispersion":
        if (value == 0) color("blue");
        break;
    }
    switch (property) {
      case "he_power":
        if (value == 0.75) color("orange");
        break;
    }
    switch (property) {
      case "suppression":
        if (value == 45) color("orange");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value == 53) color("blue");
        break;
    }
  }

  if (category === "rocket_launcher") {
    switch (property) {
      case "range_ground":
        if (value == 525) color("red");
        break;
    }
    switch (property) {
      case "accuracy":
        if (value >= 40) color("blue");
        break;
    }
    switch (property) {
      case "he_power":
        if (value >= 4) color("blue");
        break;
    }
    switch (property) {
      case "suppression":
        if (value == 150) color("green");
        if (value == 225) color("blue");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value == 10) color("green");
        if (value == 17) color("blue");
        break;
    }
  }

  if (category === "sam") {
    switch (property) {
      case "range_helicopters":
        if (value >= 2100 && value <= 2275) color("green");
        if (value >= 2450) color("blue");
        break;
    }
    switch (property) {
      case "range_airplanes":
        if (value >= 1820 && value <= 2625) color("orange");
        if (value >= 2800 && value <= 3850) color("green");
        if (value >= 4200) color("blue");
        break;
    }
    switch (property) {
      case "accuracy":
        if (value >= 35 && value < 50) color("green");
        if (value >= 50) color("blue");
        break;
    }
    switch (property) {
      case "stabilizer":
        if (value >= 40 && value <= 45) color("orange");
        if (value >= 50 && value <= 60) color("green");
        if (value >= 70) color("blue");
        break;
    }
    switch (property) {
      case "he_power":
        if (value >= 3 && value <= 4) color("orange");
        if (value >= 5 && value <= 6) color("green");
        if (value >= 7) color("blue");
        break;
    }
    switch (property) {
      case "suppression":
        if (value >= 120 && value <= 160) color("orange");
        if (value >= 200 && value <= 240) color("green");
        if (value >= 280) color("blue");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value >= 2 && value <= 10) color("green");
        break;
    }
  }

  if (category === "assault_rifle") {
    switch (property) {
      case "range_ground":
        if (value >= 455 && value <= 525) color("blue");
        break;
    }
    switch (property) {
      case "range_helicopters":
        if (value >= 455 && value <= 525) color("blue");
        break;
    }
    switch (property) {
      case "accuracy":
        if (value == 30) color("orange");
        if (value >= 40 && value <= 45) color("green");
        if (value == 60) color("blue");
        break;
    }
    switch (property) {
      case "stabilizer":
        if (value <= 23) color("red");
        if (value >= 30 && value <= 40) color("orange");
        break;
    }
    switch (property) {
      case "he_power":
        if (value == 1) color("blue");
        break;
    }
    switch (property) {
      case "suppression":
        if (value >= 30) color("blue");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value >= 160 && value <= 248) color("orange");
        if (value == 355) color("green");
        if (value >= 396) color("blue");
        break;
    }
  }

  if (category === "lmg") {
    switch (property) {
      case "range_ground":
        if (value >= 770 && value <= 875) color("blue");
        break;
    }
    switch (property) {
      case "range_helicopters":
        if (value == 595) color("blue");
        break;
    }
    switch (property) {
      case "accuracy":
        if (value >= 20 && value <= 30) color("green");
        if (value >= 40) color("blue");
        break;
    }
    switch (property) {
      case "stabilizer":
        if (value <= 25) color("red");
        if (value == 30) color("orange");
        break;
    }
    switch (property) {
      case "he_power":
        if (value == 0.5) color("blue");
        break;
    }
    switch (property) {
      case "suppression":
        if (value >= 40 && value <= 55) color("blue");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value >= 428) color("blue");
        break;
    }
  }

  if (category === "sniper_rifle") {
    switch (property) {
      case "range_ground":
        if (value == 1050) color("green");
        break;
    }
    switch (property) {
      case "range_helicopters":
        if (value == 595) color("blue");
        break;
    }
    switch (property) {
      case "accuracy":
        if (value == 95) color("blue");
        break;
    }
    switch (property) {
      case "he_power":
        if (value == 1) color("blue");
        break;
    }
    switch (property) {
      case "suppression":
        if (value == 55) color("green");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value >= 15) color("blue");
        break;
    }
  }

  if (category === "law") {
    switch (property) {
      case "range_ground":
        if (value == 525) color("orange");
        if (value >= 700 && value <= 875) color("green");
        break;
    }
    switch (property) {
      case "accuracy":
        if (value == 30) color("orange");
        if (value == 40) color("green");
        if (value >= 50) color("blue");
        break;
    }
    switch (property) {
      case "ap_power":
        if (value >= 13 && value <= 15) color("orange");
        if (value >= 17 && value <= 21) color("green");
        if (value == 24) color("blue");
        break;
    }
    switch (property) {
      case "he_power":
        if (value == 2) color("blue");
        break;
    }
    switch (property) {
      case "suppression":
        if (value == 232) color("orange");
        if (value >= 264 && value <= 332) color("green");
        if (value >= 336) color("blue");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value == 10) color("green");
        if (value >= 15) color("blue");
        break;
    }
  }

  if (category === "anti_radar") {
    switch (property) {
      case "range_ground":
        if (value == 3500) color("green");
        if (value >= 4200) color("blue");
        break;
    }
    switch (property) {
      case "accuracy":
        if (value >= 50) color("blue");
        break;
    }
    switch (property) {
      case "stabilizer":
        if (value >= 50 && value <= 65) color("green");
        break;
    }
    switch (property) {
      case "ap_power":
        if (value >= 16 && value <= 20) color("green");
        if (value >= 24) color("blue");
        break;
    }
    switch (property) {
      case "suppression":
        if (value == 150) color("red");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value >= 20 && value <= 60) color("green");
        break;
    }
  }

  if (category === "rocket_pod" || category === "rocket_pod2") {
    switch (property) {
      case "range_ground":
        if (value >= 2100) color("blue");
        break;
    }
    switch (property) {
      case "accuracy":
        if (value <= 10) color("red");
        if (value == 15) color("orange");
        if (value == 20) color("green");
        if (value >= 30) color("blue");
        break;
    }
    switch (property) {
      case "stabilizer":
        if (value <= 20) color("red");
        if (value == 30) color("orange");
        break;
    }
    switch (property) {
      case "he_power":
        if (value <= 3) color("red");
        if (value == 4) color("orange");
        if (value >= 11) color("blue");
        break;
    }
    switch (property) {
      case "suppression":
        if (value <= 161) color("red");
        if (value == 184) color("orange");
        if (value >= 281 && value <= 293) color("green");
        if (value >= 552) color("blue");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value <= 67) color("red");
        if (value >= 132 && value <= 149) color("orange");
        if (value >= 266) color("blue");
        break;
    }
  }

  if (category === "agm") {
    switch (property) {
      case "range_ground":
        if (value >= 2975) color("blue");
        break;
    }
    switch (property) {
      case "accuracy":
        if (value == 40) color("green");
        if (value >= 50) color("blue");
        break;
    }
    switch (property) {
      case "stabilizer":
        if (value == 40) color("orange");
        if (value >= 50 && value <= 60) color("green");
        break;
    }
    switch (property) {
      case "ap_power":
        if (value >= 26) color("blue");
        break;
    }
    switch (property) {
      case "suppression":
        if (value == 150) color("orange");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value >= 30 && value <= 60) color("green");
        break;
    }
  }

  if (category === "bomb") {
    switch (property) {
      case "range_ground":
        if (value >= 3500) color("blue");
        break;
    }
    switch (property) {
      case "accuracy":
        if (value == 5) color("red");
        if (value == 10) color("orange");
        if (value >= 15 && value <= 20) color("green");
        if (value >= 25) color("blue");
        break;
    }
    switch (property) {
      case "he_power":
        if (value >= 10 && value <= 12) color("orange");
        if (value >= 15 && value <= 20) color("green");
        break;
    }
    switch (property) {
      case "suppression":
        if (value >= 600) color("blue");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value <= 42) color("red");
        if (value >= 100 && value <= 110) color("green");
        if (value >= 166) color("blue");
        break;
    }
  }

  if (category === "cluster_bomb") {
    switch (property) {
      case "range_ground":
        if (value >= 3500) color("blue");
        break;
    }
    switch (property) {
      case "accuracy":
        if (value == 10) color("orange");
        if (value >= 15 && value <= 20) color("green");
        if (value >= 25) color("blue");
        break;
    }
    switch (property) {
      case "ap_power":
        if (value <= 6) color("red");
        break;
    }
    switch (property) {
      case "suppression":
        if (value >= 300) color("blue");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value <= 23) color("red");
        if (value == 42) color("orange");
        if (value == 60) color("green");
        if (value >= 75) color("blue");
        break;
    }
  }

  if (category === "napalm_bomb") {
    switch (property) {
      case "range_ground":
        if (value >= 3500) color("blue");
        break;
    }
    switch (property) {
      case "accuracy":
        if (value >= 10) color("blue");
        break;
    }
    switch (property) {
      case "suppression":
        if (value >= 150) color("blue");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value == 23) color("orange");
        if (value == 42) color("green");
        if (value >= 75) color("blue");
        break;
    }
  }

  if (category === "lgb") {
    switch (property) {
      case "range_ground":
        if (value >= 3500) color("blue");
        break;
    }
    switch (property) {
      case "dispersion":
        if (value == 0) color("blue");
        break;
    }
    switch (property) {
      case "he_power":
        if (value >= 20) color("blue");
        break;
    }
    switch (property) {
      case "suppression":
        if (value >= 600) color("blue");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value == 60) color("green");
        break;
    }
  }
  
  if (category === "aam" || category === "aam2") {
    switch (property) {
      case "range_helicopters":
        if (value >= 2100) color("blue");
        break;
    }
    switch (property) {
      case "range_airplanes":
        if (value <= 3500) color("red");
        if (value >= 3850 && value <= 5600) color("orange");
        if (value >= 7000 && value <= 8400) color("green");
        if (value >= 11200) color("blue");
        break;
    }
    switch (property) {
      case "accuracy":
        if (value == 30) color("orange");
        if (value >= 35 && value <= 40) color("green");
        if (value >= 50) color("blue");
        break;
    }
    switch (property) {
      case "stabilizer":
        if (value >= 30 && value <= 40) color("orange");
        if (value >= 50 && value <= 60) color("green");
        break;
    }
    switch (property) {
      case "he_power":
        if (value == 3) color("orange");
        if (value >= 4 && value <= 5) color("green");
        if (value >= 6) color("blue");
        break;
    }
    switch (property) {
      case "suppression":
        if (value == 120) color("orange");
        if (value >= 160 && value <= 200) color("green");
        if (value >= 240) color("blue");
        break;
    }
    switch (property) {
      case "rate_of_fire":
        if (value >= 15 && value <= 60) color("green");
        break;
    }
  }
});
