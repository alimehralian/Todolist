import React , {Component} from "react";

// import libery
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.min.css"

// import componnent
import Header from "./Header";
import AddTodoForm from "./AddTodoForm";
import Todo from "./Todo"
import Alert from './Alert';

//import css
import './App.css';


class App extends Component{

    state = {
        todos : [],
        statusDone : false,
        alerts: [],
    }

    addTolist(text){
        this.setState(prevState => {
            return{
                todos : [
                    ... prevState.todos,
                    {key : Date.now() , status : false , text}
                ],
                alerts : [
                    ... prevState.alerts,
                    {key : Date.now() , alertType:'add' , alertStatus : true}
                ]   
            }
        })
        setTimeout(() => {
            this.setState(prevState => {
                return{
                    alerts : this.state.alerts.slice(0, -1)
                }
            })
        }, 2000);
    }

    doneTodo(key){
        let todos = this.state.todos;

        let item = todos.find(item => item.key === key)

        item.status = ! item.status;

        let newsToDo = todos.filter(item => item.key !== key)

        this.setState(prevState => {
            return{
                todos : [
                    ... newsToDo,
                    item
                ]
            }
        })
    }

    deleteTodo(key){
        this.setState(prevState => {
            return{
                todos : prevState.todos.filter(item => item.key !== key),
                alerts : [
                    ... prevState.alerts,
                    {key : Date.now() , alertType:'remove' , alertStatus : true}
                ]  
            }
        })
        setTimeout(() => {
            this.setState(prevState => {
                return{
                    alerts : this.state.alerts.slice(0, -1)
                }
            })
        }, 2000);
    }

    render(){

        let {todos,alerts,statusDone} = this.state;
        let filterTodo = todos.filter(item => item.status === statusDone)

        return(
            <div className="container">

                <Header />

                {/* FORM */}
                <AddTodoForm add={this.addTolist.bind(this)} />

                <ul className="nav nav-tabs">
                    <li className="nav-item"><a className={`nav-link ${statusDone === false ? 'active' : ''}`} onClick={() => this.setState({statusDone : false})}>in work</a><span className="counter">{todos.filter(item => item.status === false).length}</span></li>
                    <li className="nav-item"><a className={`nav-link ${statusDone === true ? 'active' : ''}`} onClick={() => this.setState({statusDone : true})} >done</a><span className="counter">{todos.filter(item => item.status === true).length}</span></li>
                </ul>

                {/* LIST */}
                <ul className="list-group todos mx-auto text-light">
                    {
                        todos.length === 0
                        ? <p>list is empty</p>
                        : filterTodo.map(item => <Todo key={item.key} item={item} delete={this.deleteTodo.bind(this)} done={this.doneTodo.bind(this)}/>)
                    }
                </ul>
                
                
                    <div className="toast-container p-3 bottom-0 end-0" id="toastPlacement">
                        {alerts.map(alert =><Alert alertType={alert.alertType} alertStatus={alert.alertStatus}/>)}
                    </div>
                

            </div>

            
        )
    }
}

export default App;