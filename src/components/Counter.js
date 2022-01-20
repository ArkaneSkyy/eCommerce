import React, { Component } from 'react'

export default class Counter extends Component {
    render() {
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                    onClick={ () => this.props.onIncrement(this.props.counter) } 
                    className='btn bg-secondary btn-sm m-1'>+
                </button>
                <button 
                    onClick={ () => this.props.onDecrease(this.props.counter) } 
                    className={this.getDisableClass()}>-
                </button>
                <button 
                    onClick={() => this.props.onDelete(this.props.counter.id)} 
                    className={'btn bg-danger btn-sm m-2'}>Delete
                </button>
            </div>
        );
    }

    getDisableClass() {
        let classes = "btn bg-secondary btn-sm m-1 ";
        classes += (this.props.counter.value === 0) ? 'disabled' : '';
        return classes;
    }

    getBadgeClasses() {
        let classes = "badge m-2 d-row ";
        classes += (this.props.counter.value === 0) ? 'bg-warning counter-badge' : 'bg-primary';
        return classes;
    }

    formatCount() {
        const { value: count } = this.props.counter;
        return count === 0 ? '0' : count;
    }

}