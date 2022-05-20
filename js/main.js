function clicker() {
    console.log("test click");
}

function print() {
    console.log("ЗДАНИЕ: ", buil.value)
    console.log("АУДИТОРИЯ: ", aud.value)
    console.log("ДИСЦИПЛИНА: ", dis.value)
    console.log("ДАТА: ", dat.value)
    console.log("РАСПИСАНИЕ: ", she.value)
}

function push_request() {
    print();

    let form = {
        building: buil.value,
        auditorium: aud.value,
        discipline: dis.value,
        schedule: she.value,
        DataTime: dat.value
    }
    console.log("form: ", form);

    fetch('http://127.0.0.1:5000/api/requests', {
        method: 'POST',
        headers: {      
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
    })
    .then((response) => {
        if (response.status === 200) {
            console.log("response.json: ", response.json());
            return response.json(); // отправляем данные на обработку в следующую секцию .then
        } else {
            // место для обработки ошибки, например неверного логина
        }
    })
    .then((data) => {
        console.log("fetch result:", data);
        // Раз мы создали новый запрос, то надо обновить общий список
        fillMyRequests();
    });
}

function edit_value() {
    let aud = document.getElementById("auditorium");
    aud.value = "ГЗ";

    let dis = document.getElementById("displine");
    dis.value = "219";
}