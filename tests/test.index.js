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

describe("Zadanie 7 Liczba prawcowników danego typu", function () {
  it("getAmountBasedOnType", function () {
    assert.deepEqual(
      getAmountBasedOnType("junior"),
      solution_getAmountBasedOnType("junior")
    );
    assert.deepEqual(
      getAmountBasedOnType("regular"),
      solution_getAmountBasedOnType("regular")
    );
    assert.deepEqual(
      getAmountBasedOnType("senior"),
      solution_getAmountBasedOnType("senior")
    );
  });
});

describe("Zadanie 8 Suma wypłat dla pracowników określonego typu", function () {
  it("getSumOfSallariesBasedOnType", function () {
    assert.deepEqual(
      getSumOfSallariesBasedOnType("junior"),
      solution_getSumOfSallariesBasedOnType("junior")
    );
    assert.deepEqual(
      getSumOfSallariesBasedOnType("regular"),
      solution_getSumOfSallariesBasedOnType("regular")
    );
    assert.deepEqual(
      getSumOfSallariesBasedOnType("senior"),
      solution_getSumOfSallariesBasedOnType("senior")
    );
  });
});

describe("Zadanie 9 Przypisanie pracownika do projektu", function () {
  it("assignToProjects", function () {
    assert.deepEqual(assignToProjects(), solution_assignToProjects());
  });
});

describe("Zadanie 10 Dodawanie nowych liczb do tablicy", function () {
  it("addNewNumber", function () {
    assert.deepEqual(addNewNumber(5), solution_addNewNumber(5));
  });
});

describe("Zadanie 11 Usuwanie liczb z tablicy", function () {
  it("removeNumber", function () {
    assert.deepEqual(removeNumber(2), solution_removeNumber(2));
  });
});

describe("Zadanie 12 Dodawanie nowego zadania", function () {
  it("addNewTodo", function () {
    const obj = {
      id: "2",
      name: "test",
      status: "done",
      priority: "high",
    };

    const result = addNewTodo(obj);
    const expected = solution_addNewTodo(obj);

    assert.deepEqual(result[result.length], expected[expected.length]);
    assert.equal(
      result[result.length - 1].priority,
      expected[expected.length - 1].priority
    );
  });
});

describe("Zadanie 13 Przypisanie pracownika do projektu", function () {
  it("removeTodo", function () {
    assert.deepEqual(removeTodo("1"), solution_removeTodo("1"));
  });
});

describe('Zadanie 14 Tworzenie funkcji tworzącej HTMLa - tworzenie komponentu "prawie reactowego"', function () {
  it("removeTodo", function () {
    const props = {
      todo: {
        id: "1",
        name: "test",
        status: "todo",
        priority: "high",
      },
    };

    assert.deepEqual(
      TableRow(props).trim().replace(/\s+/g, ""),
      solution_TableRow(props).trim().replace(/\s+/g, "")
    );
  });
});

describe("Zadanie 15 Składanie komponentów w jeden większy komponent", function () {
  it("removeTodo", function () {
    assert.deepEqual(
      Table().trim().replace(/\s+/g, ""),
      solution_Table().trim().replace(/\s+/g, "")
    );
  });
});
