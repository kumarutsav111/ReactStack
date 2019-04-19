import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList, View, Text} from 'react-native';
import ListItem from './ListItem';


class LibraryList extends Component<Props> {
    renderItem({item}){
        return <ListItem item= {item}/>
    }
    render(){
        //console.log(this.props);
        //so my  expectation is that the props function should have the values of libraries
        return(
        <FlatList
            data = {this.props.libraries}
            renderItem={this.renderItem}
            keyExtractor={(item) => item.id }
        />            
        );
    }
}
const mapStateToProps = state => {
    console.log(state);
    //It will return an object that object will show
    //as props to my LibraryList
    return {libraries: state.libraries}
    //libraries: is name of the props, it could be anything
}
export default connect(mapStateToProps)(LibraryList);
//connect helper is forging a connection between our
// LibraryList and our application state