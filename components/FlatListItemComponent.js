import React, { Component } from 'react';
import Button from 'react-native-button';
import Swipeout from 'react-native-swipeout';

import { Text, View, Alert, Platform, TextInput } from 'react-native';

export default class FlatListItemComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        const swipeSetting = {
            autoClose: true,
            right: [
                {
                    onPress: () => {
                        
                    },
                    text: 'Edit', type: 'primary'
                },
                {
                    onPress: () => {

                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rodId: 1,
            sectionId: 1
        };
        return (
            <Swipeout {...swipeSetting}>
                <View style = {{flex: 1}}>
                    <Text style = {{
                        padding: 10, 
                        fontSize: 16,
                        color: 'white',
                        backgroundColor: (this.props.itemIndex % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
                    }}>
                    {`${this.props.item.name}, releaseYear = ${this.props.item.releaseYear}`}
                    </Text>

                </View>
            </Swipeout>
        );
    }

}