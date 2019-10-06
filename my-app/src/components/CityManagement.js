import React, { Component } from 'react';
import LoadingSpinner from "./LoadingSpinner";
import Header from "./Header";
import 'antd/dist/antd.css';
import { AutoComplete } from 'antd';
import { List, Avatar,Button, Skeleton } from 'antd';


const data = [
    {
        title: 'Ant Design Title 1',
    },
    {
        title: 'Ant Design Title 2',
    },
    {
        title: 'Ant Design Title 3',
    },
    {
        title: 'Ant Design Title 4',
    },
];


class CityManagement extends Component {

    purchaseContinueHandler = () => {
        // alert('You continue!');

        const queryParams = [];
        for (let i in this.state.ingredients) {
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price=' + this.state.totalPrice);
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname: '/checkout',
            search: '?' + queryString
        });
    }

    render() {
        return (
            <div>
                <Header/>
                <AutoComplete
                    // dataSource={dataSource}
                    style={{ width: 200, position: 'center', }}
                    // onSelect={onSelect}
                    // onSearch={this.onSearch}
                    placeholder="input here"
                />
                <Button type="primary">Add New City</Button>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    style={{textAlign: 'center',
                        marginTop: 12,
                        height: 32,
                        lineHeight: '32px',
                        color:"red",

                    }}
                    renderItem={item => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                                style={{color:"red",
                                }}
                            />
                            <Button type="primary">Select City</Button>
                            <Button>Remove</Button>
                        </List.Item>
                    )}
                />,
            </div>

        );


    }
}

export default CityManagement;