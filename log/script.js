function getDataAndFill() {
    let link = "http://127.0.0.1/backend/api/articles/";
        fetch(link, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                //'Content-Type': 'application/json',
                //'X-CSRFToken': getCookie('csrftoken')
            },
            //body: JSON.stringify({'email':this.state.email, 'password':this.state.password})
        }).then( (response) => {
            let data = response.json();
            return data;
        }).then((data) => {
            console.log(data)
            document.getElementById("get-response").innerText = JSON.stringify(data, null, '    ');

            fillBlocks(data.articles);
        }).catch((err) => {
            console.log('Fetch Error:', err);
        });
}

function sendDataAndFill() {
    let data = { 
            'article': {
                'title': document.getElementById('title-field').value, 
                'description': document.getElementById('description-field').value, 
                'body': document.getElementById('body-field').value, 
                'author_id': 1 // ради простоты примера железно укажем автора под номером 1
            }
        }

    document.getElementById("post-request").innerText = JSON.stringify(data, null, '    ');
    
    let link = "http://127.0.0.1/backend/api/articles/";
        fetch(link, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                //'X-CSRFToken': getCookie('csrftoken')
            },
            body: JSON.stringify(data)
        }).then( (response) => {
            let data = response.json();
            return data;
        }).then((data) => {
            console.log(data)
            document.getElementById("post-response").innerText = JSON.stringify(data, null, '    ');

            getDataAndFill();
        }).catch((err) => {
            console.log('Fetch Error:', err);
        });

}

// Шаблон одного блока сказки в формате HTML
let element_template = `<div id="article-{i}" class="article-block">
                            <h2 id="article-title-{i}" class="article-title">{title}</h2>
                            <p id="article-description-{i}" class="article-description">{description}</p>
                            <details>
                                <summary>Содержимое статьи</summary>
                                <div id="article-body-{i}" class="article-body">{body}</div>
                            </details>
                        </div>`


function fillBlocks(articles) {
    let main_element = document.getElementById("main")
    let html_to_insert = "" // Переменная, для собирания всех создаваемых полей

    let element_html = ""
    for (let index = 0; index < articles.length; index++) {
        const article = articles[index];

        // приписка g означает заменить во всех местах, а не только в одном
        // подстановка в шаблон:     номера(index) вместо {i}   название(title) вместо {title} 
        element_html = element_template.replace(/{i}/g, index)                          // номера(index) вместо {i} 
                                       .replace(/{title}/, article.title)
                                       .replace(/{description}/, article.description)
                                       .replace(/{body}/, article.body);

        
        // посмотрим в консоли, какой текст элемента будет вставлен
        console.log(element_html)

        // лучше проводить вставку всех элементов разом, поэтому пока собираем их все в строковую переменную
        html_to_insert = html_to_insert + element_html;
    }
    
    // вставляем готовые элементы
    main_element.innerHTML = html_to_insert
}

// выполнить действия после загрузки страницы
window.onload = function() {
    getDataAndFill();
};
