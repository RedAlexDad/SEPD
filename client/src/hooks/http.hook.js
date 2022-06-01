import {useState, useCallback} from 'react'
 // Работа с асихронными запросами на сервер с использованием нативным браузером
export const useHttp = () => {
    // Внутри хуки будем определяться, грузится сервер что то или нет
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    // const [data, setData] = useState(null)
    
    
    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
            
            // Пока грузится до сих пор запрос и данные
            setLoading(true) 

            try {
                if (body) {
                    body = JSON.stringify(body);
                    headers['Content-Type'] = 'application/json';
                }

                const response = await fetch(url, {method, body, headers})
                const data = await response.json()
                // let data = await response.json()
                console.log('Http.hook; data: ', data);
                // setData(data)

                // Если ответ не будет хорошим, тогда
                if( !response.ok)   {
                    // Выведет ошибку
                    throw new Error (data.message || 'Ошибка! Тут есть ошибка, проверьте!')
                }
                // Если грузится все, запрос пошел, тогда "загружается" неверным будет, т.е запрос окончен
                setLoading(false)
                
                return data
                
            } catch (e) {
            console.log("Catch: ", e.message)
            setLoading(false)
            setError(e.message)
            alert(e.message);
            throw e
            }
    }, [])

    // Сброс ошибок
    // const clearError = useCallback(() => setError(null), [])
    const clearError = () => setError(null);

    // Сообщает о информациях сервера
    return { loading, request, error, clearError }
}