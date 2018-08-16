const moment = require("moment");
const momentRandom = require("moment-random");

const range = len => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newReport = () => {
  const randomUpdated = String(momentRandom().format("MM-DD-YYYY"));
  const randomPlaced = String(momentRandom().format("MM-DD-YYYY"));
  const randomChecked = String(momentRandom().format("MM-DD-YYYY"));
  const statusChance = Math.random();
  const aboutChance = Math.random();
  const doorChance = Math.random();
  const lengthChance = Math.random();
  const lotChance = Math.random();
  const contentChance = Math.random();
  const unitChance = Math.random();
  const locationChance = Math.random();
  const userChance = Math.random();
  const driverChance = Math.random();
  const reqStatusChance = Math.random();
  const storeChance = Math.random();
  return {
    updatedDate: randomUpdated,
    placedDate: randomPlaced,
    checkedDate: randomChecked,
    idleDays: Math.floor(Math.random() * 30),
    inspectionDays: Math.floor(Math.random() * 30),
    status:
      statusChance > 0.46
        ? "On Location"
        : statusChance > 0.33
          ? "Returned"
          : statusChance > 0.2
            ? "Maintenance"
            : "Unknown",
    about:
      aboutChance > 0.66
        ? "Has Logo Decal"
        : aboutChance > 0.33
          ? "Owned"
          : "Leased",
    door:
      doorChance > 0.66
        ? "Has Lift Gate"
        : doorChance > 0.33
          ? "Roll Door"
          : "Swing Door",
    length:
      lengthChance > 0.2
        ? "28"
        : lengthChance > 0.2
          ? "32"
          : lengthChance > 0.2
            ? "45"
            : lengthChance > 0.2
              ? "48"
              : "53",
    lot:
      lotChance > 0.2
        ? "8"
        : lotChance > 0.2
          ? "49"
          : lotChance > 0.2
            ? "1546"
            : lotChance > 0.2
              ? "2507"
              : "6541",
    content:
      contentChance > 0.2
        ? "ADC in Process"
        : contentChance > 0.2
          ? "Equipment/Bins/Gayords/Pallets"
          : contentChance > 0.2
            ? "Empty - Committed"
            : contentChance > 0.2
              ? "Not in service - Needing repairs"
              : "Stored Salvage",
    unit:
      unitChance > 0.2
        ? "CS-#7"
        : unitChance > 0.2
          ? "G004"
          : unitChance > 0.2
            ? "G100"
            : unitChance > 0.2
              ? "LPT 635054"
              : "G318",
    location: locationChance > 0.66 ? "Winston-Salem" : "Asheville",
    user:
      userChance > 0.2
        ? "Mary"
        : userChance > 0.2
          ? "Bob"
          : userChance > 0.2
            ? "Timothy"
            : userChance > 0.2
              ? "Reggie"
              : "Monique",
    driver:
      driverChance > 0.2
        ? "qshortridge"
        : driverChance > 0.2
          ? "phill"
          : driverChance > 0.2
            ? "dclark"
            : driverChance > 0.2
              ? "tstevens"
              : "eyarbrough",
    requeststatus:
      reqStatusChance > 0.46
        ? "Active"
        : reqStatusChance > 0.33
          ? "Viewed"
          : reqStatusChance > 0.2
            ? "Outstanding"
            : "Unknown",
    store:
      storeChance > 0.46
        ? "Active"
        : storeChance > 0.33
          ? "Viewed"
          : storeChance > 0.2
            ? "Outstanding"
            : "Unknown",
  };
};

export function makeData(len = 5553) {
  return range(len).map(d => {
    return {
      ...newReport(),
      children: range(10).map(newReport)
    };
  });
}
