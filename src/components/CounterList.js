import React, { Component } from 'react'
import Counter from './Counter';

export default class CounterList extends Component {
    render() {
        const { onReset, counters, onDelete, onIncrement, onDecrease } = this.props;
        return (
            <div>
                <button onClick={onReset} className='btn bg-primary btn-sm m-2'>Reset</button>
                {counters.map(counter => (
                <Counter 
                key={counter.id} 
                onDelete={onDelete} 
                onIncrement={onIncrement}
                onDecrease={onDecrease}
                counter={counter} />
                ))}
            </div>
        )
    }
}
