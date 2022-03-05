import {useState, useCallback} from 'react'

// Работа с асихронными запросами на сервер с использованием нативным браузером
export const useHttp = () => {
    // Внутри хуки будем определяться, грузится сервер что то или нет
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    
    const request = useCallback ( 
        async (url, method = 'GET', body = null, headers = {}) => {
            
            // Пока грузится до сих пор запрос и данные
            setLoading(true) 

            try {
                const response = await fetch (url, method, body, headers) 
                const data = await response.json()

                // Если ответ не будет хорошим, тогда
                if( !response.ok)   {
                    // Выведет ошибку
                    throw new Error (data.message || 'Ошибка! Тут есть ошибка, проверьте!')
                }
                // Если грузится все, запрос пошел, тогда "загружается" неверным будет, т.е запрос окончен
                setLoading(false)
                return data
            }
            catch (error) {
                setLoading(false)
                setError(error.message)
                throw error
            }
    },[])

    // Сброс ошибок
    const clearError = () => setError(null);
    
    // Сообщает о информациях сервера
    return {loading, request, error, clearError}
}