import React, {Component} from 'react';
import {Card, Timeline} from 'antd';
import { Button } from 'antd';

export default class extends Component {
    constructor() {
        super();
    }

    componentDidMount() {

    }

    render() {

        return (
            <div>
                <Timeline>
                    <Timeline.Item>
                        <Card
                            title="创建服务现场 2015-09-01"
                            type="inner"
                            extra={<a href="#">更多</a>}
                        >
                            <p>创建服务现场 2015-09-01</p>
                        </Card>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Card
                            title="创建服务现场 2015-09-01"
                            type="inner"
                            extra={<a href="#">更多</a>}
                        >
                            <p>创建服务现场 2015-09-01</p>
                        </Card>
                    </Timeline.Item>
                    <Timeline.Item>
                        <Card
                            title="创建服务现场 2015-09-01"
                            type="inner"
                            extra={<a href="#">更多</a>}
                        >
                            <p>创建服务现场 2015-09-01</p>
                        </Card>
                    </Timeline.Item>
                </Timeline>
                <Button type="primary" style={{width:'100%'}}>加载更多</Button>
            </div>
        )
    }
}
