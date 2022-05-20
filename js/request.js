

// Действия к исполнению по загрузке страницы
window.onload = function () {
    let loginToken = window.localStorage.getItem('loginToken');
    //Проверяем, есть ли у нас токен пользователся, то есть залогинен ли он
    if (loginToken) {
        let loginType = window.localStorage.getItem('loginType');


        // Если наш пользователь - студент
        if (loginType === "STUD") {
            document.getElementById('newRequestSection').style.display = "block"; // отобразить элемент
            document.getElementById('myReqestSection').style.display = "block";
            document.getElementById('freeRequestSection').style.display = "none";   // скрыть элемент

            fillMyRequests();
        } else if (loginType === "EXEC") { // если наш пользователь - исполнитель
            document.getElementById('newRequestSection').style.display = "none"; // отобразить элемент
            document.getElementById('myReqestSection').style.display = "block";
            document.getElementById('freeRequestSection').style.display = "block";   // скрыть элемент

            fillMyRequests();
            fillFreeRequests();
        } else { // Это у нас не понятно кто. В идеале мы не должны сюда заходить, это ошибка

        }



    } else { // если нету, то убегаем обратно на страницу логина
        window.location.replace('/index.html')
    }
};


// Функция по добавлению нового запроса
document.getElementById('titleBtn').addEventListener('click', (e)=> {
    let titleVal = document.getElementById('titleInput').value;
    let requestMsg = {
        title: titleVal
    }

    console.log("titleVal:", titleVal, "requestMsg:", requestMsg);

    fetch('http://127.0.0.1/api/requests/', {
        method: 'POST',
        headers: {
            'Authorization': 'bearer '+window.localStorage.getItem('loginToken'),
            'Content-Type': 'application/json', // Большинству backend'ов нужно явно указать, что мы ему передаём json. Без такой пометки Django может не ответить, например
            'X-CSRFToken': document.cookie.split('csrftoken=')[1].split(';')[0] // Небольшая магия для тех, кто использует Django, чтобы обойти проблему CSRF
        },
        body: JSON.stringify(requestMsg)
    })
    .then((response) => {
        if (response.status === 200) {
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
})


const myStudentRequestTemplate = `
    <div class="my-request-block">
        <div class="request-title">"{request-title}"</div>
        <div class="request-student">{request-student}</div>
        <div class="request-status-block {request-status-class}"><span class="request-status-text-pending">Не принята</span><span class="request-status-text-accepted">Принята: {request-executor}</span></div>
    </div>
`

function fillMyRequests() {        
    fetch('http://127.0.0.1/api/requests/', {
        method: 'GET',
        headers: {
            'Authorization': 'bearer '+window.localStorage.getItem('loginToken'),
            'Content-Type': 'application/json', // Большинству backend'ов нужно явно указать, что мы ему передаём json. Без такой пометки Django может не ответить, например
            'X-CSRFToken': document.cookie.split('csrftoken=')[1].split(';')[0] // Небольшая магия для тех, кто использует Django, чтобы обойти проблему CSRF
        },
    })
    .then((response) => {
        if (response.status === 200) {
            return response.json(); // отправляем данные на обработку в следующую секцию .then
        } else {
            // место для обработки ошибки, например неверного логина
        }
    })
    .then((data) => {
        let html = '<h2>Мои заявки</h2>\n';
        data.requests.forEach(request => {
            html += myStudentRequestTemplate.replace(/{request-title}/, request.title)
                                            .replace(/{request-student}/, request.student_name)
                                            .replace(/{request-status-class}/, request.executor_id ? 'request-status-accepted' : '')
                                            .replace(/{request-executor}/, request.executor_name)
        });

        document.getElementById('myReqestSection').innerHTML = html;
    });
}

const freeRequestTemplate = `
    <div class="my-request-block">
        <div class="request-title">"{request-title}"</div>
        <div class="request-student">{request-student}</div>
        <div class="request-status-block"><button class="request-accept-btn" data-id="{request-id}" onclick="acceptFreeRequest(event)">Принять заявку</button></div>
    </div>
`
function fillFreeRequests() {        
    fetch('http://127.0.0.1/api/requests/?free=true', {
        method: 'GET',
        headers: {
            'Authorization': 'bearer '+window.localStorage.getItem('loginToken'),
            'Content-Type': 'application/json', // Большинству backend'ов нужно явно указать, что мы ему передаём json. Без такой пометки Django может не ответить, например
            'X-CSRFToken': document.cookie.split('csrftoken=')[1].split(';')[0] // Небольшая магия для тех, кто использует Django, чтобы обойти проблему CSRF
        },
    })
    .then((response) => {
        if (response.status === 200) {
            return response.json(); // отправляем данные на обработку в следующую секцию .then
        } else {
            // место для обработки ошибки, например неверного логина
        }
    })
    .then((data) => {
        let html = '<h2>Заявки, которые можно принять в работу</h2>\n';
        data.requests.forEach(request => {
            html += freeRequestTemplate.replace(/{request-title}/, request.title)
                                            .replace(/{request-student}/, request.student_name)
                                            .replace(/{request-id}/, request.request_id)
        });

        document.getElementById('freeRequestSection').innerHTML = html;
    });
}

function acceptFreeRequest(e) {
    console.log("Gonna accept:", e.target.dataset.id); 

    fetch('http://127.0.0.1/api/requests/?id='+e.target.dataset.id, {
        method: 'PATCH',
        headers: {
            'Authorization': 'bearer '+window.localStorage.getItem('loginToken'),
            'Content-Type': 'application/json', // Большинству backend'ов нужно явно указать, что мы ему передаём json. Без такой пометки Django может не ответить, например
            'X-CSRFToken': document.cookie.split('csrftoken=')[1].split(';')[0] // Небольшая магия для тех, кто использует Django, чтобы обойти проблему CSRF
        },
    })
    .then((response) => {
        if (response.status === 200) {
            return response.json(); // отправляем данные на обработку в следующую секцию .then
        } else {
            // место для обработки ошибки, например неверного логина
        }
    })
    .then((data) => {
        // После принятия заявки нужно обновить оба списка, чтобы были видны изменения
        fillMyRequests();
        fillFreeRequests();
    });
}


document.getElementById('loginBtn').addEventListener('click', (e)=> {
    let loginVal = document.getElementById('loginInput').value;
    let loginMsg = {
        login: loginVal
    }

    console.log("loginVal:", loginVal, "loginMsg:", loginMsg);

    fetch('http://127.0.0.1/api/users/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Большинству backend'ов нужно явно указать, что мы ему передаём json. Без такой пометки Django может не ответить, например
            'X-CSRFToken': document.cookie.split('csrftoken=')[1].split(';')[0] // Небольшая магия для тех, кто использует Django, чтобы обойти проблему CSRF
        },
        body: JSON.stringify(loginMsg)
    })
    .then((response) => {
        if (response.status === 200) {
            return response.json(); // отправляем данные на обработку в следующую секцию .then
        } else {
            // место для обработки ошибки, например неверного логина
        }
    })
    .then((data) => {
        console.log("fetch result:", data);

        window.localStorage.setItem('loginToken', data.token)

        let JWTPayloadB64 = data.token.split('.')[1];
        let JWTPayloadSTR = decodeURIComponent(escape(window.atob( JWTPayloadB64 )));
        let JWTPayloadJSON = JSON.parse(JWTPayloadSTR);

        console.log(JWTPayloadB64, "->", JWTPayloadSTR, '->', JWTPayloadJSON);
        // Для дальнейшего удобства сохраняем тип нашего пользователя
        window.localStorage.setItem('loginType', JWTPayloadJSON.user_type);

        // Сохраняем наш токен, чтобы в дальнейшем прикладывать его к нашим запросам, как удостоверение
        window.localStorage.setItem('loginToken', data.token);

        window.location.replace('/requests.html')
    });
})
