import React, {useState} from 'react';
import {useHttp} from '../../src/hooks/http.hook';

export const RequestTranslator = () => {

    const {loading, request} = useHttp()

    // Работа с запросами
    const [form, setForm] = useState( {
        // Содержание структуры
        building: '', auditorium: '', discipline: '', shedule: '',
    })

    // Обработка данные
    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const registerHandler = async () => {
        try {
            const data = await request('/api/register', 'POST', {...form});
            console.log('Data: ', data);
        }
        catch (error) {

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
                    onChange={changeHandler}
                    />
                <label htmlFor="auditorium"></label>
                </div>
                <div class="form-group mr-5">
                    <input
                    placeholder="Введите дисциплину"
                    id="discipline"
                    type="text"
                    onChange={changeHandler}
                    />
                <label htmlFor="discipline"></label>
                </div>
                <div class="form-group mr-5">
                    <input
                    placeholder="Введите расписание"
                    id="schedule"
                    type="text"
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