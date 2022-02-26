import React, { Component } from 'react'
// Axios это HTTP клиентов для браузеров и node.js
import axios from 'axios'


export class PostFrom extends Component {
  constructor(props) {
    super(props);

    // Содержание информация
    this.state = {
      building: '',
      auditory: '',
      displina: '',
      time: '',
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
    const { building, auditory, displina, time } = this.state;
    return (
      <div>
        <form onSubmit = {this.submitHandler}>
          <div>
            <input type="text" name="building" value = {building} 
            onChange={this.changeHandler}/>
          </div>
          <div>
            <input type="text" name="auditory" value = {auditory}
            onChange={this.changeHandler}/>
          </div>
          <div>
            <input type="text" name="displina" value = {displina}
            onChange={this.changeHandler}/>
          </div>
          <div>
            <input type="text" name="time" value = {time}
            onChange={this.changeHandler}/>
          </div>
          <button type = "submit"> Submit </button>
        </form>
      </div>
    );
  }
}

export default PostFrom;