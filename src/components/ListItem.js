import React , { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { CardSection } from './common';
//export default class YourApp extends Component<{}> 
class ListItem extends Component<Props> {
    render(){
        const {titleStyle} = style
        return (
        <CardSection>
            <Text style = {titleStyle}>
            {this.props.item.title}
            </Text>
        </CardSection>
        );
    }
}
const style = StyleSheet.create({
  titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }

})
export default ListItem;