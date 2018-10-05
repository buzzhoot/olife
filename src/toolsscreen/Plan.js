import React from 'react';
import { material, } from "react-native-typography";
import { Text, StyleSheet, View, } from 'react-native';


export default class Plan extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={material.display3}>Plan</Text>

                <Text style={material.headline}>开始计划你的明天吧</Text>

            </View>
        );
    }

}