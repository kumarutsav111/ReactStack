import React, { Component } from 'react';
import {
     Text, 
     StyleSheet, 
     TouchableWithoutFeedback,
      View,
      LayoutAnimation 
    } from 'react-native';
import { CardSection } from './common';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { statement } from '@babel/template';
class ListItem extends Component<Props> {
    componentWillUpdate(){
        LayoutAnimation.spring();
    }
    renderDescription() {
        const { titleStyle } = style;
        const { item, expanded } = this.props;
        if (expanded) {
            return (
                <CardSection>
                    <Text style={titleStyle}>
                        {item.description}
                    </Text>
                </CardSection>
            )
        }
    }
    render() {
        const { titleStyle } = style;
        const { title, id } = this.props.item;
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={{flex: 1}}>
                            {title}
                        </Text>
                    </CardSection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
const style = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }

})
//props passed will be in ownProps
const mapStateToProps = (state, ownProps) => {
    const expanded= state.selectedLibraryId === ownProps.item.id
    return { expanded};
};
export default connect(mapStateToProps, actions)(ListItem);