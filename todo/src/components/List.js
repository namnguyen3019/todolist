import React, { Component } from 'react'
import ListItem from './ListItem';
import { connect } from 'react-redux';
import { fetchData } from '../actions';

class List extends Component {

    componentDidMount(){
        this.props.fetchData();
    }

    render() {
        const { itemList } = this.props;
        console.log(itemList)
        if(itemList){
            return (
                <div>                
                    {itemList.map(item => <li key={item.title}>{item.title}</li>)}
                </div>
            )
        }else{
            return null
        }

    }
}

const mapStateToProp = state =>{
    return { itemList: state.itemList.itemList }
}
export default connect(mapStateToProp, {fetchData})(List);