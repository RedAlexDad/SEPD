import React, { Component } from 'react'
// Axios это HTTP клиентов для браузеров и node.js
import axios from 'axios'


export class PostFrom extends Component {
  constructor(props) {
    super(props);

    // Содержание информация
    this.state = {
      building: '',
      auditorium: '',
      discipline: '',
      schedule: '',
    }
  }

// Принимает аргументы
changeHandler = (e) => {
  // Целевое значение и имя, цель и значение
    this.setState({[e.target.name]: e.target.value})
}

// Печатает данные в браузере
submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    // Отправка данные в POST
    // axios.post("https://jsonplaceholder.typicode.com/posts", this.state)
    axios.post("http://localhost:3000/", this.state)
    // Если все будет нормально
    .then(response =>{
      console.log(response)
    })
    // Если будет ошибка, то выводит код ошибки
    .catch(error =>{
      console.log(error)
    })
}



  render() {
    const { building, auditorium, discipline, schedule } = this.state;
    return (
      <div>
        <form onSubmit = {this.submitHandler}>
          <div>
            <input type="text" name="building" value = {building} 
            onChange={this.changeHandler}/>
          </div>
          <div>
            <input type="text" name="auditorium" value = {auditorium}
            onChange={this.changeHandler}/>
          </div>
          <div>
            <input type="text" name="discipline" value = {discipline}
            onChange={this.changeHandler}/>
          </div>
          <div>
            <input type="text" name="schedule" value = {schedule}
            onChange={this.changeHandler}/>
          </div>
          <button type = "submit"> Submit </button>
        </form>
      </div>
    );
  }
}

export default PostFrom;