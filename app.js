/**
 * Przed rozpoczęciem kilka słów o tym jak pracować z tym plikiem
 *
 * 1) zadania możesz uruchomić dzięki uruchomieniu pliku index.html w przeglądarce
 *    - możesz przeciągnąć plik index.html do okna przegladarki
 *    - możesz odapilić plik html za pomocą rozszerzenia live server
 * 2) Do rozwiązywania zadań możesz praktycznie wszystko (chyba że w zadaniu jest opisane co można a co nie) tzn.
 *    - tworzyć zmienne
 *    - tworzyć funkcje
 *    - korzystać z internenetu
 *    - etc.
 * 3) każde zadanie posiada przykładowe rozwiązanie w pliku który często nazywa się solution.js użyj go jeżeli:
 *    - nie wiesz jak ruszyć zadania
 *    - chcesz sprawdzić moją przykładową implementację
 * 4) jeżeli Twoje rozwiązanie różni się od zaproponowanego przezemnie nie musi to oznaczać że Twoje jest złe/gorsze
 *    problemy w programowaniu mają często wiele rozwiązań
 * 5) zadanie 0 jest przykładowym już rozwiązanym zadaniem - użyj go jako referencji do pozostałych zadań
 *
 * Powodzenia!
 */

/**
 * Zadanie 0 Odfiltrowanie elementów nie będących stringami
 *
 * Stwórz funkcje getStrings która na podstawie tablicy elements stworzy nową tablicę gdzie wartościami będą tylko elementy
 * o typie string
 *
 *
 * wymagania
 * - rozwiązanie powinno być zapisane w ciele (wewnątrz) funkcji getStrings
 * - użyj metody dostępnej na tablicach .filter
 */

const elements = [
  "123",
  123,
  "trelemorele",
  ["tablica w tablicy"],
  { pole: "obiekt w tablicy" },
  "zwykly string",
];

function getStrings() {
  return elements.filter((element) => {
    /**
     * Jeżeli typ elementu w danym obrocie pętli jest równy string zwróć true (boolean) tak żeby metoda flter
     * zwróciła element
     */
    if (typeof element === "string") {
      return true;
    }
    /**
     * Jeżeli typ elementu w danym obrocie pętli nie jest stringiem zwróć false czyli odrzuć element z nowej tablicy
     */
    return false;
  });
}

console.log(getStrings());

/**
 * sprytniejszym i krótszym podejściem i rozwiązaniem tego zadania jest następujący kod:
 *
 * function getStrings() {
 *      return elements.filter((element) => typeof element === "string");
 * }
 *
 */

const filteredElements = getStrings(); // w tablicy filteredElements powinny być tylko stringi czyli: ["123", "trelemorele", "zwykly string"]

/**
 * Zadanie 1 Obliczenie kwadratów liczb w tablicy
 *
 * Stwórz funkcje getSquaredNumbers która na podstawie tablicy liczb numbers stworzy nową tablicę gdzie wartościami będą kwadraty tych liczb
 * tzn każdy element z tablicy numbers powinien zostać pomnożony przez samego siebie
 *
 * np.
 * na podstawie danych:
 *
 * const numbers = [2,5,7];
 *
 * w zmiennej squaredNumbers po wywołaniu Twojej funkcji powinny znajdować się kwadraty liczb [2,5,7]
 *
 * const squaredNumbers = twojaFunckja();
 *
 * console.log(squaredNumbers); // [4, 25, 49]
 *
 * w console.log-u jest przykładowy rezaultat jaki powinna zwrócić funkcja na podstawie tablicy numbers
 *
 * wymagania
 * - rozwiązanie powinno być zapisane w ciele (wewnątrz) funkcji getSquaredNumbers
 * - użyj metody dostępnej na tablicach .map
 *
 */

const numbers = [2, 12, 6, 4, 7, 11];

/* MIEJSCE NA TWÓJ KOD 👇 */

function getSquaredNumbers() {
  const squaredNumbers = numbers.map((number, index, array) => {
    return number * number;

  });
  return squaredNumbers;
};


/**
 * Zadanie 2 Tablica z długościami stringów
 *
 * Stwórz funkcje getLenghtsOfPhrases która na podstawie tablicy stringów phrases stworzy nową tablicę z długościami stringów (jakkolwiek to brzmi 😅)
 *
 * np.
 * na podstawie danych
 *
 * const phrases = ["ok", "hello", "react"];
 *
 * w zmiennej dlugosciStringow po wywołaniu Twojej funkcji powinny znajdować się długości stringów [2,5,5]
 *
 * const dlugosciStringow = twojaFunckja();
 *
 * console.log(dlugosciStringow); // [2,5,5]
 *
 * w console.log-u jest przykładowy rezaultat jaki powinna zwrócić funkcja na podstawie tablicy phrases
 *
 * wymagania
 * - rozwiązanie powinno być zapisane w ciele (wewnątrz) funkcji getLenghtsOfPhrases
 * - użyj metody dostępnej na tablicach .map
 *
 */

const phrases = ["react", "trelemorele", "frontend", "angular", "js", ""];

/* MIEJSCE NA TWÓJ KOD 👇 */

function getLenghtsOfPhrases() {
  const phraseLength = phrases.map((phrase) => {
    return phrase.length;
  });
  return phraseLength;
};

/**
 * Zadanie 3 Tablica userów - nowe pole w obiekcie
 *
 * Stwórz funkcje verfiyUsers która na podstawie tablicy obiektów users stworzy nową tablicę
 * obiektów które w swojej strukturze będą zawierały dodatkowe pole "isAdult"
 *
 * nowe pole isAdult będzie ustawiane na podstawie wieku usera 
 * (age - inne istniejące pole w obiekcie user)
 *
 * przykładowy obiekt user:
 *
 * --------------------------------
 *
 * const user = {
 *      name: 'Jane',
 *      lastName: 'Doe',
 *      age: 12,
 * }
 *
 * --------------------------------
 *
 * żeby dodać nowe pole do tego obiektu należy odwołać się do tego obiektu 
 * i następnie do przyszłego pola po kropce (patrz poniżej)
 *
 * --------------------------------
 *
 * user.isAdult = true;
 *
 * --------------------------------
 *
 * dodaliśmy do obiektu user pole isAdult i przypisaliśmy wartość boolowską true
 *
 * to samo będziesz musiał/musiała zrobić ze wszystkimi obiektami w tablicy
 * na podstawie wieku usera (age) - możliwe że będą potrzebne if-y
 *
 * przykładowe dane wejściowe (tablica users) 
 * i wyjściowe (nowa tablica z userami którzy mają pole isAdult)
 *
 *
 * const users = [
 *  {
 *      name: 'John',
 *      age: 23,
 *  },
 *  {
 *      name: 'Jane',
 *      age: 16
 *  }
 * ];
 *
 * w zmiennej verifiedUsers po wywołaniu Twojej funkcji powinny znajdować się 
 * obiekty z polem isAdult oraz wartością boolowską ustawioną
 * na podstawie wieku (age)
 *
 * const verifiedUsers = twojaFunckja();
 *
 * console.log(verifiedUsers); // patrz poniżej
 *
 * [
 *  {
 *      name: 'John',
 *      age: 23,
 *      isAdult: true // bo John ma 23 lata (powyżej 18)
 *  },
 *  {
 *      name: 'Jane',
 *      age: 16,
 *      isAdult: false, // bo Jane ma 16 lat (poniżej 18)
 *  }
 * ];
 *
 * w console.log-u jest przykładowy rezaultat jaki powinna zwrócić funkcja na podstawie tablicy users
 *
 *
 * wymagania
 * - rozwiązanie powinno być zapisane w ciele (wewnątrz) funkcji verfiyUsers
 * - użyj metody dostępnej na tablicach .map
 */

const users = [
  { name: "John", age: 20 },
  { name: "Johny", age: 12 },
  { name: "Jerry", age: 22 },
  { name: "Jack", age: 17 },
  { name: "Jane", age: 66 },
];

/* MIEJSCE NA TWÓJ KOD 👇 */

// const verfiyUsers = () => {
//   return users.map((user) => {
//     if(user.age >=18) {
//       return {name: user.name, age: user.age, isAdult: true}
//     } else {
//       return {name: user.name, age: user.age, isAdult: false}
//     }
//   });
// };

// const verfiyUsers = () => {
//   return users.map((user) => {
//     if(user.age >=18) {
//       return {
//         ...user,
//         isAdult: true,
//       }
//     } else {
//       return {...user,
//          isAdult: false,
//         }
//     }
//   });
// };

const verfiyUsers = () => {
  return users.map((user) => {
    return {
      ...user,
      isAdult: user.age >= 18,
    }
  });
};

/**
 * Zadanie 4  Tablica pracowników - aktualizacja pola salary
 *
 * Stwórz funkcje processSalaries która na podstawie tablicy obiektów workers stworzy nową tablicę
 * obiektów ze zaktulizowanymi polami salary (worker.salary) na podstawie następujących wymagań
 *
 * jeżeli obiekt worker ma pole seniority = 'junior' pole salary powinno być powiększone o 50%
 * jeżeli obiekt worker ma pole seniority = 'regular' pole salary powinno być powiększone o 30%
 * jeżeli obiekt worker ma pole seniority = 'senior' pole salary powinno być powiększone o 15%
 *
 * przykładowe dane wejściowe (tablica z workerami do przeprocesowania)
 *
 * const workers = [
 *      {
 *          name: 'John',
 *          seniority: 'junior',
 *          salary: 4000
 *      },
 *      {
 *          name: 'Jane',
 *          seniority: 'senior',
 *          salary: 15000
 *      }
 * ]
 *
 * w zmiennej processedWorkers po wywołaniu Twojej funkcji powinny znajdować się obiekty z zaktualizowanym
 * polem salary na podstawie logiki opisanej wyżej
 *
 * const processedWorkers = twojaFunckja();
 *
 * console.log(processedWorkers); // patrz poniżej
 *
 * [
 *      {
 *          name: 'John',
 *          seniority: 'junior',
 *          salary: 6000 // ponieważ 4000 + 2000 (50% z 4000) = 6000
 *      },
 *      {
 *          name: 'Jane',
 *          seniority: 'senior',
 *          salary: 17250 // ponieważ 15000 + 2250 (15% z 15000) = 17250
 *      }
 * ]
 *
 * w console.log-u jest przykładowy rezaultat jaki powinna zwrócić funkcja na podstawie tablicy workers
 */

const workers = [
  {
    name: "John",
    seniority: "junior",
    salary: 4000,
  },
  {
    name: "Jack",
    seniority: "senior",
    salary: 15000,
  },
  {
    name: "Jane",
    seniority: "regular",
    salary: 10000,
  },
  {
    name: "Jerry",
    seniority: "senior",
    salary: 20000,
  },
];

function processSalaries() {
  return workers.map((worker) => {
    if (worker.seniority === 'junior') {
      return { name: worker.name, seniority: worker.seniority, salary: worker.salary * 1.5 };
    } else if (worker.seniority === 'regular') {
      return { name: worker.name, seniority: worker.seniority, salary: worker.salary * 1.3 };
    } else if (worker.seniority === 'senior') {
      return { name: worker.name, seniority: worker.seniority, salary: worker.salary * 1.15 };
    } else {
      return worker;
    }
  });
}


/**
 * Zadanie 5 Filtrowanie tablicy userów - wyciągnij userów którzy są pełnoletni (age >= 18)
 *
 * Stwórz funkcje getAdults która na podstawie tablicy obiektów users (z zadania 3 powyżej) 
 * stworzy nową tablicę obiektów które będą spełniały następujący warunek
 *
 * wiek usera (age) ma być większy bądź równy 18
 *
 * przykładowe dane wejściowe (tablica users)

 *
 * const users = [
 *  {
 *      name: 'John',
 *      age: 23,
 *  },
 *  {
 *      name: 'Jane',
 *      age: 16
 *  }
 * ];
 *
 *
 * w zmiennej adultUsers po wywołaniu Twojej funkcji powinni znajdować się 
 * userzy którzy mają pole age większe bądź równe 18
 *
 * const adultUsers = twojaFunckja();
 *
 * console.log(adultUsers); // patrz poniżej
 *
 * [
 *  {
 *      name: 'John',
 *      age: 23,
 *  }
 * ];
 *
 * wymagania
 * - rozwiązanie powinno być zapisane w ciele (wewnątrz) funkcji getAdults
 * - użyj metody dostępnej na tablicach .filter
 */


function getAdults() {
  const adultUsers = users.filter(user => user.age >= 18);
  return adultUsers;
}

// destrukturyzacja:

// function addTwoNumbers(numbers) {
//   return numbers.number1 + numbers.number2
// }

// const numbersKtorePrzekazeDoFunkcji = {
//   number1: 5,
//   number2: 10
// }

// addTwoNumbers(numbersKtorePrzekazeDoFunkcji)


function addTwoNumbers({number1, number2}) {
  return number1 + number2
}
function addTwoNumbers1(numbers) {
  const {number1, number2} = numbers
  return number1 + number2
}

const numbersKtorePrzekazeDoFunkcji = {
  number1: 5,
  number2: 10
}

addTwoNumbers(numbersKtorePrzekazeDoFunkcji)



/**
 * Zadanie 6 Filtrowanie tablicy workerów - wyciągnij workerów których seniority = 'junior'
 *
 * Stwórz funkcje getJuniors która na podstawie tablicy obiektów workers (z zadania 4 powyżej) stworzy nową tablicę
 * obiektów które będą spełniały następujący warunek
 *
 * seniority workera (seniority) ma być równe 'junior'
 *
 * przykładowe dane wejściowe (tablica workers)
 *
 *
 * const workers = [
 *      {
 *          name: 'John',
 *          seniority: 'junior',
 *          salary: 4000
 *      },
 *      {
 *          name: 'Jane',
 *          seniority: 'senior',
 *          salary: 15000
 *      }
 * ]
 *
 *
 * w zmiennej juniors po wywołaniu Twojej funkcji powinni znajdować się workerzy których pole seniority = 'junior'
 *
 * const juniors = twojaFunckja();
 *
 * console.log(juniors); // patrz poniżej
 *
 * [
 *      {
 *          name: 'John',
 *          seniority: 'junior',
 *          salary: 4000
 *      }
 * ]
 *
 * wymagania
 * - rozwiązanie powinno być zapisane w ciele (wewnątrz) funkcji getJuniors
 * - użyj metody dostępnej na tablicach .filter
 */

function getJuniors() {
  return workers.filter(worker => worker.seniority === "junior");

  console.log(workers);
}



/**
 * Zadanie 7 Liczba prawcowników danego typu
 *
 * Stwórz funkcje getAmountBasedOnType która na podstawie tablicy obiektów workers (z zadania 4 powyżej)
 * oraz parametru seniority (parametr funkcji) zwróci ILOŚĆ personelu danego typu
 *
 *
 * przykładowe dane wejściowe (tablica workers)
 *
 *
 * const workers = [
 *      {
 *          name: 'John',
 *          seniority: 'junior',
 *          salary: 4000
 *      },
 *      {
 *          name: 'Jane',
 *          seniority: 'junior',
 *          salary: 4500
 *      },
 *      {
 *          name: 'Jerry',
 *          seniority: 'senior',
 *          salary: 15000
 *      }
 * ]
 *
 *
 * w zmiennej juniors po wywołaniu Twojej funkcji powinni znajdować się workerzy 
 * których pole seniority = 'junior'
 *
 * const numberOfJuniors = getAmountBasedOnType('junior');
 *
 * console.log(numberOfJuniors); // ilość juniorów to 2
 *
 * const numberOfRegulars = getAmountBasedOnType('regular');
 *
 * console.log(numberOfRegulars); // ilość regularów to 0
 *
 * const numberOfSeniors = getAmountBasedOnType('senior');
 *
 * console.log(numberOfSeniors); // ilość seniorów to 1
 *
 *
 * wymagania
 * - rozwiązanie powinno być zapisane w ciele (wewnątrz) funkcji getAmountBasedOnType
 * - użyj metody dostępnej na tablicach .reduce
 */

/* MIEJSCE NA TWÓJ KOD 👇 */


function getAmountBasedOnType(seniority) {
  return workers.reduce((acc, worker) => {
    if (worker.seniority === seniority) {
      acc++;
    }
    return acc;
  }, 0)
}



/**
 * Zadanie 8 Suma wypłat dla pracowników określonego typu
 *
 * Stwórz funkcje getSumOfSallariesBasedOnType która na podstawie tablicy obiektów workers (z zadania 4 powyżej)
 * oraz parametru seniority (parametr funkcji) zwróci sumę wynagrodzeń personelu danego typu
 *
 *
 * przykładowe dane wejściowe (tablica workers)
 *
 *
 * const workers = [
 *      {
 *          name: 'John',
 *          seniority: 'junior',
 *          salary: 4000
 *      },
 *      {
 *          name: 'Jane',
 *          seniority: 'junior',
 *          salary: 4500
 *      },
 *      {
 *          name: 'Jerry',
 *          seniority: 'senior',
 *          salary: 15000
 *      }
 * ]
 *
 *
 * w zmiennej juniors po wywołaniu Twojej funkcji powinni znajdować się workerzy których pole seniority = 'junior'
 *
 * const juniorsSallary = getSumOfSallariesBasedOnType('junior');
 *
 * console.log(juniorsSallary); // 8500
 *
 * const regularsSallary = getSumOfSallariesBasedOnType('regular');
 *
 * console.log(regularsSallary); // 0
 *
 * const seniorsSallary = getSumOfSallariesBasedOnType('senior');
 *
 * console.log(seniorsSallary); // 15000
 *
 *
 * wymagania
 * - rozwiązanie powinno być zapisane w ciele (wewnątrz) funkcji getSumOfSallariesBasedOnType
 * - użyj metody dostępnej na tablicach .reduce
 */

/* MIEJSCE NA TWÓJ KOD 👇 */

function getSumOfSallariesBasedOnType(seniority) {
  return workers.reduce((total, worker) => {
    if (worker.seniority === seniority) {
      total += worker.salary;
    }
    return total;
  }, 0);
};

/**
 * Zadanie 9 Przypisanie pracownika do projektu
 *
 * Stwórz funkcje assignToProjects która na podstawie tablicy obiektów workers (z zadania 4 powyżej)
 * stworzy i zwróci nową tablicę pracowników z przypisanymi projektami na podstawie następującej logiki
 * projekt przypiszemy dodając nowe pole do obiektu worker project
 *
 * jeżeli seniority workera = 'junior'
 * wartością pola project powinno być "internal project"
 *
 * jeżeli seniority workera = 'regular'
 * wartością pola project powinno być "XYZ"
 *
 * jeżeli seniority workera = 'senior'
 * wartością pola project powinno być "ZYX"
 *
 *
 * przykładowe dane wejściowe (tablica workers)
 *
 *
 * const workers = [
 *      {
 *          name: 'John',
 *          seniority: 'junior',
 *          salary: 4000
 *      },
 *      {
 *          name: 'Jane',
 *          seniority: 'regular',
 *          salary: 4500
 *      },
 *      {
 *          name: 'Jerry',
 *          seniority: 'senior',
 *          salary: 15000
 *      }
 * ]
 *
 *
 * w zmiennej workersWithProjects po wywołaniu Twojej funkcji powinni znajdować się workerzy przypisani do projektów
 *
 * const workersWithProjects = assignToProjects();
 *
 * console.log(workersWithProjects); // rezultat poniżej
 *
 * [
 *      {
 *          name: 'John',
 *          seniority: 'junior',
 *          salary: 4000,
 *          project: 'internal project',
 *      },
 *      {
 *          name: 'Jane',
 *          seniority: 'regular',
 *          salary: 4500,
 *          project: 'XYZ',
 *      },
 *      {
 *          name: 'Jerry',
 *          seniority: 'senior',
 *          salary: 15000,
 *          project: 'ZYX',
 *      }
 * ]
 *
 * wymagania
 * - rozwiązanie powinno być zapisane w ciele (wewnątrz) funkcji assignToProjects
 * - użyj metody dostępnej na tablicach .map
 */

/* MIEJSCE NA TWÓJ KOD 👇 */

function assignToProjects() {
  return workers.map((worker) => {
    if (worker.seniority === 'junior') {
      return { ...worker, project: 'internal project' }
    } else if (worker.seniority === 'regular') {
      return { ...worker, project: 'XYZ' }
    } else if (worker.seniority === 'senior') {
      return { ...worker, project: 'ZYX' }
    } else {
      return worker;
    }
  })
}

/**
 * Zadanie 10 Dodawanie nowych liczb do tablicy
 *
 * Stwórz funkcję addNewNumber która na podstawie tablicy z liczbami z zadania 1 (numbers) 
 * stworzy i zwróci nową tablicę z porzednimi liczbami 
 * oraz nową liczbą przekazaną w parametrze funkcji
 *
 * np.
 *
 * const numbers = [1,5,2,3]; // dane wejściowe (dane na podstawie których masz stworzyć nową tablicę)
 *
 * const newNumbers = addNewNumber(6); // wywołanie Twojej funkcji z argumentem 6
 *
 * console.log(newNumbers); // [1,5,2,3,6] zmienna newNumbers posiada liczby z tablicy numbers oraz nową liczbę która pochodzi z parametru
 *
 * wymagania
 * - rozwiązanie powinno być zapisane w ciele (wewnątrz) funkcji addNewNumber
 * - użyj spread operatora do stworzenia nowej tablicy na podstawie starej + liczba z parametru
 *
 *
 * LINK DO DOKUMENTACJI SPREAD OPERATORA:
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */

/* MIEJSCE NA TWÓJ KOD 👇 */

const addNewNumber = (newNumber) => {
  return [...numbers, newNumber]
};

/**
 * Zadanie 11 Usuwanie liczb z tablicy
 *
 * Stwórz funkcję removeNumber która na podstawie tablicy z liczbami z zadania 1 (numbers) stworzy i zwróci nową tablicę
 * z wszystkimi liczbami oprócz liczby która jest przekazana jako argument funkcji
 *
 * TLDR: odfiltruj tablicę z przekazanej do funkcji liczby
 *
 * np.
 *
 * const numbers = [1,5,2,3]; // dane wejściowe (dane na podstawie których masz stworzyć nową tablicę)
 *
 * const newNumbers = removeNumber(5); // wywołanie Twojej funkcji z argumentem 5
 *
 * console.log(newNumbers); // [1,2,3] zmienna newNumbers posiada liczby poza liczbą przekazaną jako argument
 *
 * wymagania
 * - rozwiązanie powinno być zapisane w ciele (wewnątrz) funkcji removeNumber
 * - użyj metody dostępnej na tablicach .filter
 *
 */

/* MIEJSCE NA TWÓJ KOD 👇 */

const removeNumber = (numberToRemove) => {
  return numbers.filter((number) => {
    if (numberToRemove !== number) {
      return true;
    } else {
      return false;
    }
  })
};

/**
 * Zadanie 12 Dodawanie nowego zadania
 *
 * Stwórz funkcję addNewTodo która na podstawie tablicy z zadaniami (todos) stworzy i zwróci nową tablicę
 * z porzednimi zadaniami oraz nowym zadaniem przekazanym w parametrze (newTodo) funkcji
 *
 * ps. zadanie jest bardzo podobne do zadania z liczbami natomiast wzrósł stopień skomplikowania danych
 *
 * np. dane wejściowe które masz użyć do stworzenia nowej tablicy
 *
 * const todos = [
 *  {
 *    id: "1",
 *    name: "Pouczyć się GITa",
 *    status: "in progress",
 *    priority: "medium",
 *  },
 *  {
 *    id: "2",
 *    name: "Pouczyć się CSSa",
 *    status: "in progress",
 *    priority: "medium",
 *  }
 * ]
 *
 * const newTask = {
 *    id: todos.length, // id-kiem będzie ostatni index tablicy todos
 *    name: 'Odpocząć',
 *    status: 'todo',
 *    priority: 'high'
 * }
 *
 *
 * const newTodos = addNewTodo(newTask); // argumentem jest obiekt newTask
 *
 *
 * console.log(newTodos); // poniżej rezultat po wywołaniu Twojej funkcji która ma dodać nowy task i zwrócić nową tablice
 *
 * [
 *  {
 *    id: "1",
 *    name: "Pouczyć się GITa",
 *    status: "in progress",
 *    priority: "medium",
 *  },
 *  {
 *    id: "2",
 *    name: "Pouczyć się CSSa",
 *    status: "in progress",
 *    priority: "medium",
 *  },
 *  {
 *    id: todos.length, // id-kiem będzie ostatni index tablicy todos
 *    name: 'Odpocząć',
 *    status: 'todo',
 *    priority: 'high'
 *  }
 * ]
 *
 *
 * wymagania
 * - rozwiązanie powinno być zapisane w ciele (wewnątrz) funkcji addNewTodo
 * - użyj spread operatora do stworzenia nowej tablicy na podstawie starej + nowy
 *  obiekt (newTodo) z parametru
 *
 *
 * LINK DO DOKUMENTACJI SPREAD OPERATORA:
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
 */

const todos = [
  { id: "1", name: "Pouczyć się JSa", status: "in progress", priority: "high" },
  { id: "2", name: "Poczuyć się HTMLa", status: "todo", priority: "high" },
  { id: "3", name: "Pouczyć się CSSa", status: "done", priority: "medium" },
  {
    id: "5",
    name: "Pouczyć się GITa",
    status: "in progress",
    priority: "medium",
  },
  { id: "6", name: "Pouczyć się Reacta", status: "todo", priority: "high" },
  { id: "7", name: "Pouczyć się Reduxa", status: "todo", priority: "low" },
];

/* MIEJSCE NA TWÓJ KOD 👇 */

const addNewTodo = (newTodo) => {
  return [{...todos}, newTodo]
 };

/**
 * Zadanie 13 Usuwanie zadania
 *
 * Stwórz funkcję removeTodo która na podstawie tablicy z zadaniami z poprzedniego zadania (todos) stworzy i zwróci nową tablicę
 * z odfiltrowanym zadaniem którego id przekażemy w parametrze funckji
 *
 * funkcja powinna przyjmować id jako parametr króty użyjesz do usunięcia (odfiltrowania) zadania (zadanie też ma id)
 *
 *
 * np. dane wejściowe które masz użyć do stworzenia nowej tablicy
 *
 * const todos = [
 *  {
 *    id: "1",
 *    name: "Pouczyć się GITa",
 *    status: "in progress",
 *    priority: "medium",
 *  },
 *  {
 *    id: "2",
 *    name: "Pouczyć się CSSa",
 *    status: "in progress",
 *    priority: "medium",
 *  }
 * ]
 *
 * const newTodos = removeTodo('1'); // argumentem jest id pierwszego tasku z tablicy todos
 *
 * console.log(newTodos); // poniżej rezultat po wywołaniu Twojej funkcji która ma odfiltrować task i zwrócić nową tablice
 *
 * [
 *  {
 *    id: "2",
 *    name: "Pouczyć się CSSa",
 *    status: "in progress",
 *    priority: "medium",
 *  }
 * ]
 *
 *
 * wymagania
 * - rozwiązanie powinno być zapisane w ciele (wewnątrz) funkcji removeTodo
 * - użyj metody dostępnej na tablicach .filter
 *
 */

/* MIEJSCE NA TWÓJ KOD 👇 */

const removeTodo = (todoIdToDelete) => {
  return todos.filter(todo => todoIdToDelete !== todo.id)
};

/**
 * Zadanie 14 Tworzenie funkcji tworzącej HTMLa - tworzenie komponentu "prawie reactowego"
 *
 * Stwórz funkcje TableRow (pisane upperCasem intencjonalnie) która zwróci element html-owy
 * napisany w stringu (template strings) - elementem niech będzie 
 * tag jeden tr z trzema tagami td w środku
 *
 * przykład html pisanego w template stringu:
 *
 * const jakasZmienna = 123;
 *
 * const htmlInString = `
 *        <div>
 *              ${jakasZmienna}
 *        </div>
 *    `
 *
 * niech funckja/komponent TableRow przyjmuje w parametrze obiekt który się nazywa props - (w trakcie zajeć z reacta wyjaśni się dlaczego)
 * niech obiekt props będzie miał w sobie klucz todo którego wartością będzie kolejny obiekt todo (przeczytaj jeszcze raz jeżeli wydaje się to nie jasne)
 *
 * przykład takiego obiektu który nazywa się props i ma w sobie klucz todo i wartością jest obiekt JSowy reprezentujący todo:
 *
 * const props = {
 *    todo: {
 *      id: '1',
 *      name: 'Pouczyć się JSa',
 *      status: 'done',
 *      priority: 'high'
 *    }
 * }
 *
 *
 * funkcja/komponent którą stworzysz będzie miała taki parametr (zagnieżdzony obiekt todo w obiekcie props)
 *
 * główna struktura htmlowa (<tr></tr>) będzie napisana 
 * Twoim zadaniem będzie stworzenie w środku 3 dodatkowych elmentów 
 * td (<td></td>) z danymi w środku (np. <td>${dane}</td>)
 *
 * niech pierwszy td zawiera pole name z obiektu todo
 * niech drugi td zawiera pole status z obiektu todo
 * niech trzeci td zawiera pole priority z obiektu todo
 *
 * przykładowa funkcja/komponent BlogPost która przyjmuje obiekt props a w środku 
 * obiekt blog z dwoma polami title oraz content
 *
 * function BlogPost(props){
 *  const title = props.post.title;
 *  const content = props.post.content;
 *
 *   return `
 *      <section>
 *        <h2>${title}</h2>
 *        <p>${content}</p>
 *      </section>
 *   `
 * }
 *
 * przykład użycia takiej funkcji/komponentu
 *
 * const props = {
 *    post: {
 *      title: 'jak nauczyć się js-a?',
 *      content: 'proste... trzeba pisać duzo kodu :)'
 *     }
 *  }
 *
 * const htmlBlogPost = BlogPost(props);
 *
 * console.log(htmlBlogPost); // rezultalt poniżej
 *
 *  `
 *    <section>
 *       <h2>jak nauczyć się js-a?</h2>
 *       <p>proste... trzeba pisać duzo kodu :)</p>
 *    </section>
 *  `
 *
 *
 */

const TableRow = (props) => {
  const todo = props.todo;

  return `<tr>
    <td>${todo.name}</td>
    <td>${todo.status}</td>
    <td>${todo.priority}</td>
  </tr>
  `;
};

/**
 * Zadanie 15 Składanie komponentów w jeden większy komponent
 *
 * Stwórz funkcje Table (pisane upperCasem intencjonalnie) która zwróci element html-owy
 * napisany w stringu (template strings)
 *  - element jaki ma zwracać to tabelka htmlowa składająca się z następujących tagów:
 *
 * - table
 * - tbody
 * - tr
 * - td
 *
 * UWAGA do stworzenia elementów tr oraz td użyj funkcji/komponentu TableRow który 
 * zwraca takie tagi htmlowe. Pamiętaj że funkcja/komponent TableRow 
 * przyjmuje parametr props - jako parametru będziesz musiał/musiała użyć
 * elementu z tablicy todos
 *
 * tzn.
 *
 * przeiteruj się po tablicy todos (todos.map()) i wywołaj funkcje/komponent 
 * TableRow dla każdego todosa
 *
 * ALE UWAŻAJ nie będziesz mógł/mogła bezpośrednio przekazać iterowanego elementu 
 * jako argument musisz go otoczyć w nawiazy klamrowe żeby stworzyć obiekt props
 *
 * patrz na przykład dla blog postów które wykorzystują funkcje/komponent BlogPost:
 *
 * function BlogPost(props){
 *  const title = props.post.title;
 *  const content = props.post.content;
 *
 *   return `
 *      <section>
 *        <h2>${title}</h2>
 *        <p>${content}</p>
 *      </section>
 *   `
 * }
 *
 * // DANE na podstawie których będą tworzone sekcje za pomocą funkcji/komponentu BlogPost
 *
 * const posts = [
 *    {title: 'Title 1', content: 'jakis wpis na blogu'},
 *    {title: 'Title 2', content: 'jakis drugi wpis na blogu'},
 * ]
 *
 *
 * function Blog(){
 *
 * const htmlPosts = posts.map(post=> {
 *
 *    const props = {post: post}; // jezeli klucz i wartość używają tego samego słowa można użyć wersji skróconej czyli samo { post }
 *
 *    return BlogPost(props);
 * });
 *
 * // UWAGA pamiętaj o metodzie join patrz wykorzystanie htmlPosts poniżej
 *
 * return `<div>
 *            <h1>Witaj no moim blogu</h1>
 *            <p>Poniżej znajdziej moje wpisy:</p>
 *            <div>
 *              ${htmlPosts.join('')}
 *            </div>
 *         </div>
 * `
 * }
 *
 *
 *
 * powyższy przykład niech Ci posłuży do wykonania zadania - w praktyce masz przetworzyć 
 * ten przykład zgodnie z treścią zadania:
 *
 * 1) przeiteruj się po todosach żeby stworzyć strukture HTMLową
 * 2) użyj funkcji/komponentu TableRow
 * 3) owrapuj/otocz strukturę TR-ek (<tr></tr>) które stworzyłeś/aś wymaganymi do stworzenia tabelki tagami
 * 4) pamiętaj o zjoinowaniu TR-ek jeżeli używałeś .map
 * 5) niech funkcja/komponent Table zwraca tę strukturę
 */

function Table() {

    const rows =  todos.map((todo) => {
      const props = { todo }
      return TableRow(props)
    })

  return `<table>
    <tbody>
      ${rows.join("")}
    </tbody>
  </table>
  `;
}
