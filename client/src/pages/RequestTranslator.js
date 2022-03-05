import React, {useState} from 'react';
import {useHttp} from '../hooks/http.hook';

export const RequestTranslator = () => {

    const {loading, request} = useHttp()

    // Работа с запросами
    const [form, setForm] = useState( {
        // Содержание структуры
        building: '', auditorium: '', discipline: '', schedule: '',
    })

    // Обработка данные
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/request', 'POST', {...form});
            console.log('Data: ', data);
        }
        catch (error) {
            console.log('ERROR! Nothing is happening!');
        }
    }

    return (
        <div class="row">
            <div class="card yellow">
                <div class="card content white-text">
                <span class="card-title">Подать заявку</span>
                <p>Введите все нужные данные:</p>
                </div>
                <div class="date base">
                <div class="form-group mr-5">
                    <input
                    placeholder="Введите здание"
                    id="building"
                    type="text"
                    name="building"
                    // берет значение и отправляет в функцию changeHandler
                    onChange={changeHandler}
                    />
                <label htmlFor="building"></label>
                </div>
                <div class="form-group mr-5">
                <input
                    placeholder="Введите аудиторию"
                    id="auditorium"
                    type="text"
                    name="auditorium"
                    onChange={changeHandler}
                    />
                <label htmlFor="auditorium"></label>
                </div>
                <div class="form-group mr-5">
                    <input
                    placeholder="Введите дисциплину"
                    id="discipline"
                    type="text"
                    name="discipline"
                    onChange={changeHandler}
                    />
                <label htmlFor="discipline"></label>
                </div>
                <div class="form-group mr-5">
                    <input
                    placeholder="Введите расписание"
                    id="schedule"
                    type="text"
                    name="schedule"
                    onChange={changeHandler}
                    />
                <label htmlFor="schedule"></label>
                </div>
                </div>
                <div class="card-action">
                    <button class="send request" 
                    // Отправка запроса
                    onClick={registerHandler}
                    // Если загружается
                    disable={loading}
                    >
                         Отправить 
                    </button> 
                </div>
            </div>
        </div>
    )
}