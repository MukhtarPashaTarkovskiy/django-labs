// Массив объектов (студенты)
var groupmates = [
    {name: "Иванов Иван Иванович", group: "912-2", age: 19, marks: [5, 4, 4, 5]},
    {name: "Петров Пётр Петрович", group: "912-2", age: 20, marks: [4, 3, 4, 5]},
    {name: "Сидорова Анна Сергеевна", group: "911-1", age: 18, marks: [5, 5, 5, 4]},
    {name: "Кузнецов Никита Андреевич", group: "911-1", age: 19, marks: [3, 4, 4, 3]}
];

// Добавление пробелов справа (для "табличного" вывода)
function rpad(str, length) {
    while (str.length < length)
        str += ' ';
    return str;
}

// Печать списка студентов в консоль
function printStudents(students) {
    console.log(
        rpad("Имя", 25),
        rpad("Группа", 10),
        rpad("Возраст", 8),
        rpad("Оценки", 20)
    );

    for (var i = 0; i < students.length; i++) {
        console.log(
            rpad(students[i].name, 25),
            rpad(students[i].group, 10),
            rpad(String(students[i].age), 8),
            rpad(students[i].marks.join(", "), 20)
        );
    }
}

// Вызов функции
printStudents(groupmates);

// Фильтрация по группе
function filterByGroup(students, group) {
    var result = [];
    for (var i = 0; i < students.length; i++) {
        if (students[i].group === group) {
            result.push(students[i]);
        }
    }
    return result;
}

// Фильтрация по группе
function filterByGroup(students, group) {
    var result = [];
    for (var i = 0; i < students.length; i++) {
        if (students[i].group === group) {
            result.push(students[i]);
        }
    }
    return result;
}

// Фильтрация по группе
function filterByGroup(students, group) {
    var result = [];
    for (var i = 0; i < students.length; i++) {
        if (students[i].group === group) {
            result.push(students[i]);
        }
    }
    return result;
}

// Печать только студентов группы 912-2
printStudents(filterByGroup(groupmates, "912-2"));