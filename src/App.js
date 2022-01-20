import React, { Component } from 'react';
import Navbar from './components/Navbar';
import CounterList from './components/CounterList'

export default class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value++;
        this.setState({ counters });
    }

    handleDecrease = counter => {
        let counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = {...counter};
        counters[index].value--;
        this.setState({ counters});
    }

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    }

    handleDelete = counterId => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({counters});
    }

  render() {
    return (
        <>
            <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
            <main className='container-fluid m-2'>
                <CounterList 
                    counters={this.state.counters}
                    onReset={this.handleReset} 
                    onIncrement={this.handleIncrement} 
                    onDecrease={this.handleDecrease}
                    onDelete={this.handleDelete}
                />
            </main>
        </>
    );
  }
}
