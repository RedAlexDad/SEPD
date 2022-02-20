// Печать на всплывающем окне
/* function Complete() {
    let Elem = "Здание: " + block1.building.value +
        "\nАудитория: " + block2.auditorium.value +
        "\nДисциплина: " + block3.discipline.value +
        "\nРасписание пар: " + block4.schedule.value;
    alert(Elem);
} */

// Печать на вспылвающем окне после формирования 
function Complete() {
    // Формирование в одну переменную
    let f_building = block1.building.value;
    let f_auditorium = block2.auditorium.value;
    let f_discipline = block3.discipline.value;
    let f_schedule = block4.schedule.value;

    let Elem = "Здание: " + f_building +
        "\nАудитория: " + f_auditorium +
        "\nДисциплина: " + f_discipline +
        "\nРасписание пар: " + f_schedule;
    alert(Elem);
}