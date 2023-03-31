/**
 * UWAGA, żeby zadania zostały zweryfikowane poprawnie proszę o nie zmienianie niczego w tym pliku
 */

/**
 * Zadanie 0
 */

function solution_getStrings() {
  return elements.filter((element) => typeof element === "string");
}

/**
 * Zadanie 1
 */

function solution_getSquaredNumbers() {
  return numbers.map((number) => number * number);
}

/**
 * Zadanie 2
 */

const solution_getLenghtsOfPhrases = () => {
  return phrases.map((phrase) => phrase.length);
};

/**
 * Zadanie 3
 */

const solution_verfiyUsers = () => {
  return users.map((user) => ({ ...user, isAdult: user.age >= 18 }));
};

/**
 * Zadanie 4 - zadanie może mieć jeszcze krótsze i prostrze rozwiązanie dla chętnym możliwość zrealizowania podczas zajęć
 */

function solution_processSalaries() {
  return workers.map((worker) => {
    if (worker.seniority === "junior") {
      return { ...worker, salary: worker.salary * 1.5 };
    } else if (worker.seniority === "regular") {
      return { ...worker, salary: worker.salary * 1.3 };
    }

    return { ...worker, salary: worker.salary * 1.15 };
  });
}

/**
 * Zadanie 5
 */

function solution_getAdults() {
  return users.filter((user) => {
    if (user.age >= 18) {
      return true;
    }

    return false;
  });
}

/**
 * Zadanie 6
 */

function solution_getJuniors() {
  return workers.filter((worker) => worker.seniority === "junior");
}
