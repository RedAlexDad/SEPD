const { json } = require("express/lib/response");

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

    // Fetch - работа между backend и frontend 
    fetch('http://127.0.0.1:5000/api/requests', {
        // Оформление запроса - POST
        method: 'POST',
        // Голова запроса - header, здесь по умолчанию стоят
        // Если потребуется расшифровка токена, тогда добавим еще новое тело header
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        // Тело запроса - body по формату JSON.stringify(form)
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

// const post = null;
const [post, setPost] = useState([]);

function get_request() {
    fetch('http://127.0.0.1:5000/api/requests', {
        method: 'GET'
    })
    .then((response) => {
        response.json().then((jsonResponse) => {
            // console.log(jsonResponse)
            const form = {...jsonResponse};
            console.log("form: ", form);
            // let html;
                // html = form.family;
            // console.log("hmtl:  ", html);

            var map = new Map([
                ['name', 'Apple']
                ['place', 'California'],
                ['age', 25]
            ]);
            var obj = Object.fromEntries(map);
            var jsonString = JSON.stringify(obj);
            document.getElementById('output').innerHTML += jsonString;

            console.log("MAP", map);
            
            // console.log("...form: ", {...form});
            // test_get(form);  
        })
        // response.json().then(i => i.forEach(i => console.log(i.name)))
    })
    .catch((err) => {
        console.log(`Error: ${err}`)
    });
}

function edit_value() {
    let aud = document.getElementById("auditorium");
    aud.value = "ГЗ";

    let dis = document.getElementById("displine");
    dis.value = "219";
}

// function get_form() {
//     return form;
// }

function test_get(form) {
    // let fps = [1, 5, 6, 76, 23, 54];
    // let ofgt = [{"_id":"6276a030dcd46542cd229ff2","family":"Dad","name":"Vlad","fatherland":"Vladimirovich","group":"ИУ5Ц-41Б","id_request":1,"number_request":111,"building":"TEST","auditorium":"123","discipline":"12:41","schedule":"TEST","DataTime":"15.04.2022","__v":0,"status_request":"Отклонено","surdo_family":"№1","surdo_fatherland":"ТЕСТ","surdo_name":"АДМИНИСТРАТОР"}, {"_id":"6276a031dcd46542cd229ff4","family":"Dad","name":"Vlad","fatherland":"Vladimirovich","group":"ИУ5Ц-41Б","id_request":1,"number_request":111,"building":"TEST","auditorium":"123","discipline":"12:41","schedule":"TEST","DataTime":"15.04.2022","__v":0,"status_request":"Принято","surdo_family":"Сурдовин","surdo_fatherland":"Сурдовович","surdo_name":"Сурдо"}]
    let test = form.map(post => {
        // console.log("post: ", post);
        return post;
    });
    console.log(test);
}

// function print_after_get_fetch() {
//     return(
//         form.map((p) => {
//             return (
//                 <div class="">
//                     <div class="row">
//                         <div key={p._id}>
//                             <div class="card">
//                                 <ul class="list-group list-group-flush">
//                                     <li class="list-group-item">
//                                         <div class="table">
//                                             <thead>
//                                                 <tr>
//                                                     <th scope="col">
//                                                         <h1>Номер запроса №{p._id}</h1>
//                                                     </th>
//                                                 </tr>
//                                             </thead>
//                                             <div class="mb-3_tasks">
//                                                 <tbody>
//                                                     <tr>
//                                                         <th scope="row">ФИО: </th>
//                                                         {/* <td> Фамилия: {USER}</td> */}
//                                                         <td> Фамилия: {p.family}</td>
//                                                         <td> Имя: {p.name}</td>
//                                                         <td> Отчество: {p.fatherland} </td>
//                                                         <td> Группа: {p.group}</td>
//                                                     </tr>
//                                                 </tbody>
//                                             </div>
//                                         </div>
//                                     </li>
//                                 </ul>

//                                 <ul class="list-group list-group-flush">
//                                     <li class="list-group-item">
//                                         <div class="table">
//                                             <div class="mb-3_tasks">
//                                                 <tbody>
//                                                     <tr>
//                                                         <th scope="row">Данные: </th>
//                                                         <td> Здание: {p.building}</td>
//                                                         <td> Аудитория: {p.auditorium} </td>
//                                                         <td> Дисциплина: {p.discipline} </td>
//                                                         <td> Расписание: {p.schedule} </td>
//                                                         <td> Дата: {p.DataTime} </td>
//                                                     </tr>
//                                                 </tbody>
//                                             </div>
//                                         </div>
//                                     </li>

//                                     <li class="list-group-item">
//                                         <div class="table">
//                                             <div class="mb-3_tasks">
//                                                 <tbody>
//                                                     <tr>
//                                                         <th scope="row">Статус заявления: {p.status_request}</th>
//                                                         <td> Сурдопереводчик: {p.surdo_family} {p.surdo_name} {p.surdo_fatherland}</td>
//                                                     </tr>
//                                                 </tbody>
//                                             </div>
//                                         </div>
//                                     </li>

//                                     <li class="list-group-item">
//                                         <center>
//                                             <button class="btn btn-success"
//                                                 onClick={() => accept_request(p)}>
//                                                 Принять
//                                             </button>
//                                             {" "}
//                                             <button class="btn btn-warning"
//                                                 onClick={() => no_accept_request(p)}>
//                                                 Отклонить
//                                             </button>
//                                             {" "}
//                                         </center>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             );
//         })
//     )
// }

