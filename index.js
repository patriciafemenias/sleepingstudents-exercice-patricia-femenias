const studentA = {
  name: "Ramiro",
  surname: "Elisei",
  lastNightSleepingHours: 7,
  grade: 9,
  introduceYourself() {
    return `Me llamo ${this.name} ${this.surname} y esta noche he dormido ${this.lastNightSleepingHours} horas`;
  },
};

console.log(studentA.introduceYourself());
