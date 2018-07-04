import React, {Component} from 'react';

export default class extends Component {
    constructor() {
        super();
        this.add = this.add.bind(this);
    }

    componentDidMount() {

    }

    add() {
        this.props.sampleAction.add();
    }

    render() {

        return (
            <div className="container">
                {this.props.sample.count}
                <p></p>
                <button onClick={this.add}>测试</button>
            </div>
        )
    }
}