import React, { Component } from 'react';
import Button from 'react-native-button';

import {
    Text, View, Image, Alert, Platform, TextInput, FlatList
} from 'react-native';

export default class MovieComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movieName: '',
            releaseYear: ''
        };
    }
    render() {
        return (
            <View style = {{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
                <Text style = {{ fontSize: 18, color: 'green', fontWeight: 'bold', margin: 10}}>
                    Redux Saga tutorials - Movies list
                </Text>
                <Text style = {{ margin: 10, color: 'black', fontSize: 16}}>
                    New movie information
                </Text>
                <View style = {{ height: 100, margin: 10}}>
                    <TextInput
                        style = {{ flex: 1, margin: 5,padding: 10, borderColor: 'gray', borderwidth: 1}}
                        onChangeText = {(text) => this.setState({ movieName: text })}
                        value = {this.state.movieName}
                        placeholder = 'enter new movie name'
                    />
                    <TextInput 
                        style = {{ flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderwidth: 1, width:120}}
                        onChangeText = {(text) => this.setState({ releaseYear: text})}
                        value = {this.state.releaseYear}
                        placeholder = 'Release Year'
                    />
                </View>
                <View style = {{ height: 70, flexDirection: 'row'}}>
                    <Button
                        containerStyle = {{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet'}}
                        style = {{ fontSize: 18, color: 'white'}}
                        onPress = {() => {

                        }}
                    >Fetch Movies</Button>
                    <Button
                        containerStyle = {{ padding: 10, margin: 10, width: 150, height: 45, borderRadius: 10, backgroundColor: 'darkviolet'}}
                        style = {{ fontSize: 18, color: 'white'}}
                        onPress = {() => {

                        }}
                    >Add Movies</Button>
                </View>  
                <FlatList
                    data = {this.props.movies}
                    keyExtractor = {(item) => item.name}
                    renderItem = {({item, index}) => <Text style = {{
                        padding: 10,
                        fontSize: 15,
                        color: 'white',
                        fontWeight: 'bold',
                        backgroundColor: (index % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
                    }} >{`${item.name}, releaseYear = ${item.releaseYear}`}</Text>
                    }
                />
            </View>
        );
    }
}