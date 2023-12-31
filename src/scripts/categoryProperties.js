const categoryProperties = {
  info: ["class", "country", "cost", "year", "prototype"],
  body: [
    "hp",
    // "training",
    "armor_front",
    "armor_side",
    "armor_rear",
    "armor_top",
    "size",
    "stealth",
    "optics",
    // "air_detection",
    "speed",
    // "speed_road",
    // "amphibious",
    // "fuel",
    // "autonomy",
  ],
  howitzer: [
    "name",
    "ammo",
    "attr_fg",
    "attr_ptk",
    "attr_kass",
    "attr_korr",
    "attr_stc",
    "attr_dym",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "dispersion",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  mlrs: [
    "name",
    "ammo",
    "attr_fg",
    "attr_ptk",
    "attr_kass",
    "attr_nplm",
    "attr_korr",
    "attr_stc",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "dispersion",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  mortar: [
    "name",
    "ammo",
    "attr_fg",
    "attr_korr",
    "attr_stc",
    "attr_dym",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "dispersion",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  main_gun: [
    "name",
    "ammo",
    "attr_kin",
    "attr_ptk",
    "attr_stc",
    "attr_fg",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  atgm: [
    "name",
    "ammo",
    "attr_ptk",
    "attr_pa",
    "attr_upr",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  autocannon: [
    "name",
    "ammo",
    "attr_kin",
    "attr_ptk",
    "attr_stc",
    "attr_fg",
    // "attr_rls",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  autocannon2: [
    "name",
    "ammo",
    "attr_fg",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  grenade_launcher: [
    "name",
    "ammo",
    "attr_fg",
    "attr_stc",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  mmg: [
    "name",
    "ammo",
    "attr_kin",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  mmg2: [
    "name",
    "ammo",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  mmg3: [
    "name",
    "ammo",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  flamethrower: [
    "name",
    "ammo",
    "attr_nplm",
    "attr_stc",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  sam: [
    "name",
    "ammo",
    "attr_fg",
    "attr_upr",
    "attr_smn",
    "attr_rls",
    "attr_stc",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  assault_rifle: [
    "name",
    "ammo",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  lmg: [
    "name",
    "ammo",
    "attr_stc",
    "attr_bb",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  flamethrower_hand: [
    "name",
    "ammo",
    "attr_nplm",
    "attr_stc",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "dispersion",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  rocket_launcher: [
    "name",
    "ammo",
    "attr_nplm",
    "attr_stc",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  sniper_rifle: [
    "name",
    "ammo",
    "attr_stc",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  law: [
    "name",
    "ammo",
    "attr_ptk",
    "attr_stc",
    "attr_fg",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  rocket_pod: [
    "name",
    "ammo",
    "attr_fg",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  rocket_pod2: [
    "name",
    "ammo",
    "attr_fg",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  anti_radar: [
    "name",
    "ammo",
    "attr_ptk",
    "attr_smn",
    "attr_ppvo",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  agm: [
    "name",
    "ammo",
    "attr_ptk",
    "attr_pa",
    "attr_smn",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  bomb: [
    "name",
    "ammo",
    "attr_fg",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  cluster_bomb: [
    "name",
    "ammo",
    "attr_ptk",
    "attr_kass",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  napalm_bomb: [
    "name",
    "ammo",
    "attr_nplm",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  lgb: [
    "name",
    "ammo",
    "attr_fg",
    "attr_smn",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "dispersion",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  aam: [
    "name",
    "ammo",
    "attr_fg",
    "attr_pa",
    "attr_smn",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
  aam2: [
    "name",
    "ammo",
    "attr_fg",
    "attr_pa",
    "attr_smn",
    "range_ground",
    "range_helicopters",
    "range_airplanes",
    "accuracy",
    "stabilizer",
    "ap_power",
    "he_power",
    "suppression",
    "rate_of_fire",
  ],
};

export default categoryProperties;
