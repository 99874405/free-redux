import React from 'react'
import { Progress, Button } from 'antd'


import { createStore } from '../redux'
import { Provider, connect } from '../react.redux'


const store = createStore((state, action) => {
    switch (action.type) {
        default:
            return state || {
                count: 50
            }
    }
})


const UI = connect(state => state)(class extends React.Component {

    state = {
        count: 51
    }

    render() {
        return (
            <div>
                <Progress type="circle" percent={this.props.count} />&nbsp;&nbsp;
                <Button.Group>
                    <Button icon="minus" onClick={this.decrement} />
                    <Button icon="plus" onClick={this.increment} />
                </Button.Group>
            </div>
        )
    }

    decrement = () => {
        this.setState(state => ({ count: state.count - 10 < 0 ? 0 : state.count - 10 }))
    }

    increment = () => {
        this.setState(state => ({ count: state.count + 10 > 100 ? 100 : state.count + 10 }))
    }
})


export default class extends React.Component {
    render() {
        return (
            <Provider store={store}> 
                <UI />
            </Provider>
        )
    }
}