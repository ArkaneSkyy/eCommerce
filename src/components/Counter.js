import React, { Component } from 'react'

export default class Counter extends Component {
    state = { 
        value: this.props.counter.value
    };

    handleIncrement = (product) => {
        this.setState({ value: this.state.value + 1})
    }

    render() {
        return (
            <div>
              
                <h1 className={this.getBadgeClasses()}>{this.formatCount()}</h1>
                <button 
                    onClick={ () => this.handleIncrement({ id: 1}) } 
                    className='btn bg-secondary btn-sm'>+
                </button>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className='btn bg-danger btn-sm m-2'>Delete
                </button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 d-row ";
        classes += (this.state.value === 0) ? 'bg-warning counter-badge' : 'bg-primary';
        return classes;
    }

    formatCount() {
        const { value: count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

}