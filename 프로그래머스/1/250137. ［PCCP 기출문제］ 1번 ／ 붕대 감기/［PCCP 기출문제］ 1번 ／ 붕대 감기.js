function solution(bandage, maxHealth, attacks) {
  const [t, x, y] = bandage;
  let time = 0;
  let curHealth = maxHealth;
  let combo = 0;
  let attackIndex = 0;

  for (let time = 1; time <= attacks[attacks.length - 1][0]; time++) {
    if (attacks[attackIndex][0] === time) {
      curHealth -= attacks[attackIndex][1];
      if (curHealth <= 0) return -1;
      combo = 0;
      attackIndex++;
    } else {
      combo++;
      curHealth += x;
      if (combo === t) {
        curHealth += y;
        combo = 0;
      }
      if (curHealth > maxHealth) curHealth = maxHealth;
    }
  }

  return curHealth;
}
