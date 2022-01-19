import React, { Component } from 'react'

export default class Counter extends Component {
    state = { 
        count: 0,
        tags: ['tag1', 'tag2', 'tag3']
    };
    render() {
        return (
            <>
                <span className= {this.getBadgeClasses()}> {this.formatCount()}</span>
                <button className='btn btn-secondary btn-sm'>Increment</button>
                <ul>
                    <li></li>
                </ul>
            </>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 ";
        classes += (this.state.count === 0) ? 'bg-warning counter-badge' : 'bg-primary';
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }

}