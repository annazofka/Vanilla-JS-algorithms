/**
 * UWAGA, żeby zadania zostały zweryfikowane poprawnie proszę o nie zmienianie niczego w tym pliku
 */
describe("Zadanie 0: Odfiltrowanie elementów nie będących stringami", function () {
  it("getStrings", function () {
    assert.deepEqual(getStrings(), solution_getStrings());
  });
});

describe("Zadanie 1: Obliczenie kwadratów liczb w tablicy", function () {
  it("getSquaredNumbers", function () {
    assert.deepEqual(getSquaredNumbers(), solution_getSquaredNumbers());
  });
});

describe("Zadanie 2:  Tablica z długościami stringów", function () {
  it("getLenghtsOfPhrases", function () {
    assert.deepEqual(getLenghtsOfPhrases(), solution_getLenghtsOfPhrases());
  });
});

describe("Zadanie 3 Tablica userów - nowe pole w obiekcie", function () {
  it("verfiyUsers", function () {
    assert.deepEqual(verfiyUsers(), solution_verfiyUsers());
  });
});

describe("Zadanie 4  Tablica pracowników - aktualizacja pola salary", function () {
  it("processSalaries", function () {
    assert.deepEqual(processSalaries(), solution_processSalaries());
  });
});

describe("Zadanie 5 Filtrowanie tablicy userów - wyciągnij userów którzy są pełnoletni (age >= 18)", function () {
  it("getAdults", function () {
    assert.deepEqual(getAdults(), solution_getAdults());
  });
});

describe("Zadanie 6 Filtrowanie tablicy workerów - wyciągnij workerów których seniority = 'junior'", function () {
  it("getJuniors", function () {
    assert.deepEqual(getJuniors(), solution_getJuniors());
  });
});
