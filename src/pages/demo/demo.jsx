import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import Footer from './components/Footer'
import AddTodo from './components/AddTodo'
import VisibleTodoList from './components/VisibleTodoList'



let store = createStore(todoApp)

function Demo() {
    return (
        <Provider store={store}>
            <AddTodo />
            <VisibleTodoList />
            <Footer />
        </Provider>
    )
}

export default Demo