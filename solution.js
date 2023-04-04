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

/**
 * Zadanie 7
 */

function solution_getAmountBasedOnType(seniority) {
  return workers.reduce((sum, worker) => {
    if (worker.seniority === seniority) {
      sum += 1;
    }

    return sum;
  }, 0);
}

/**
 * Zadanie 8
 */

function solution_getSumOfSallariesBasedOnType(seniority) {
  return workers.reduce((sum, worker) => {
    if (worker.seniority === seniority) {
      sum += worker.salary;
    }

    return sum;
  }, 0);
}

/**
 * Zadanie 9
 */

function solution_assignToProjects() {
  return workers.map((worker) => {
    let project = "internal project";

    if (worker.seniority === "regular") {
      project = "XYZ";
    } else if (worker.seniority === "senior") {
      project = "ZYX";
    }

    return { ...worker, project };
  });
}

/**
 * Zadanie 10
 */

const solution_addNewNumber = (newNumber) => {
  return [...numbers, newNumber];
};

/**
 * Zadanie 11
 */

const solution_removeNumber = (numberToRemove) => {
  return numbers.filter((number) => number !== numberToRemove);
};

/**
 * Zadanie 12
 */

const solution_addNewTodo = (newTodo) => {
  return [...todos, newTodo];
};

/**
 * Zadanie 13
 */

const solution_removeTodo = (todoIdToDelete) => {
  return todos.filter((todo) => todo.id !== todoIdToDelete);
};

/**
 * Zadanie 14
 */

const solution_TableRow = (props) => {
  const { todo } = props;

  return `<tr>
    <td>${todo.name}</td>
    <td>${todo.status}</td>
    <td>${todo.priority}</td>
  </tr>
  `;
};

/**
 * Zadanie 15
 *
 */

function solution_Table() {
  const rows = todos.map((todo) => {
    const props = { todo };

    return TableRow(props);
  });

  return `<table>
    <tbody>
      ${rows.join("")}
    </tbody>
  </table>
  `;
}
