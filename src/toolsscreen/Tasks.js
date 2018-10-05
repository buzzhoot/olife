import React from 'react';
import { Text, StyleSheet, View, Platform, } from 'react-native';
import { material } from 'react-native-typography';
import I18n from 'ex-react-native-i18n';
import en from '../localization/en.json';
import zh from "../localization/zh.json";


//import strings from './src/localization/localized.js';

export default class Tasks extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={material.display3}>{I18n.t('tasks')}</Text>
                <Text style={material.headline}>{I18n.t('tasks', { locale: "zh" })}</Text>

            </View>
        );
    }

}


I18n.fallbacks = true

I18n.translations = {
    en, zh
}
