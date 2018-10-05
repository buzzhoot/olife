import React from 'react';
import { Platform, ScrollViewText, StyleSheet, View, Touchable, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-navigation';
//import { material } from 'react-native-typography';
import { Header } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';
import {
    SettingsDividerShort, SettingsDividerLong, SettingsEditText, SettingsCategoryHeader, SettingsSwitch, SettingsPicker
} from 'react-native-settings-components';




export default class Settings extends React.Component {

    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            allowPushNotifications: false,
            darkthemeenabled: false,
            gender: '',
        };
    }


    render() {
        return (

            <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'stretch', flexDirection: 'column', }}>
                <Header
                    leftComponent={{ icon: 'settings', color: '#fff' }}
                    centerComponent={{ text: 'Settings', style: { color: '#fff' } }}
                    rightComponent={{ text: ' ', color: '#fff' }}
                    backgroundColor='#000'
                />


                {/* Setting Start Here */}
                <ScrollView style={{ flex: 1, backgroundColor: '#fff' }}>

                    <SettingsCategoryHeader title={'账户'} textStyle={(Platform.OS === 'android') ? { color: colors.monza } : null} />
                    <SettingsDividerLong android={false} />
                    <SettingsEditText
                        title="用户名"
                        dialogDescription={'Enter your username.'}
                        valuePlaceholder="..."
                        negativeButtonTitle={'Cancel'}
                        positiveButtonTitle={'Save'}
                        onSaveValue={(value) => {
                            console.log('username:', value);
                            this.setState({
                                username: value
                            });
                        }}
                        value={this.state.username}
                        dialogAndroidProps={{
                            widgetColor: colors.monza,
                            positiveColor: colors.monza,
                            negativeColor: colors.monza,
                        }}
                    />
                    <SettingsDividerShort />
                    <SettingsEditText
                        title="First Name"
                        dialogDescription={'Enter your first name.'}
                        valuePlaceholder="..."
                        negativeButtonTitle={'Cancel'}
                        positiveButtonTitle={'Save'}
                        onSaveValue={(value) => {
                            console.log('firstname:', value);
                            this.setState({
                                firstname: value
                            });
                        }}
                        value={this.state.firstname}
                        dialogAndroidProps={{
                            widgetColor: colors.monza,
                            positiveColor: colors.monza,
                            negativeColor: colors.monza,
                        }}
                    />
                    <SettingsDividerShort />
                    <SettingsEditText
                        title="Last Name"
                        dialogDescription={'Enter your last name.'}
                        valuePlaceholder="..."
                        negativeButtonTitle={'Cancel'}
                        positiveButtonTitle={'Save'}
                        onSaveValue={(value) => {
                            console.log('last name:', value);
                            this.setState({
                                lastname: value
                            });
                        }}
                        value={this.state.lastname}
                        dialogAndroidProps={{
                            widgetColor: colors.monza,
                            positiveColor: colors.monza,
                            negativeColor: colors.monza,
                        }}
                    />
                    <SettingsDividerShort />
                    <SettingsPicker
                        title="Gender"
                        dialogDescription={'Choose your gender.'}
                        possibleValues={[
                            { label: '...', value: '' },
                            { label: 'male', value: 'male' },
                            { label: 'female', value: 'female' },
                            { label: 'other', value: 'other' }
                        ]}
                        negativeButtonTitle={'Cancel'}
                        positiveButtonTitle={'Save'}
                        onSaveValue={value => {
                            console.log('gender:', value);
                            this.setState({
                                gender: value
                            });
                        }}
                        value={this.state.gender}
                        styleModalButtonsText={{ color: colors.monza }}
                    />
                    <SettingsDividerLong android={false} />
                    <SettingsCategoryHeader title={'Notifications'} textStyle={(Platform.OS === 'android') ? { color: colors.monza } : null} />
                    <SettingsDividerLong android={false} />
                    <SettingsSwitch
                        title={'Allow Push Notifications'}
                        onSaveValue={(value) => {
                            console.log('allow push notifications:', value);
                            this.setState({
                                allowPushNotifications: value
                            });
                        }}
                        value={this.state.allowPushNotifications}
                        thumbTintColor={(this.state.allowPushNotifications) ? colors.switchEnabled : colors.switchDisabled}
                    />
                    <SettingsSwitch
                        title={'Dark Theme'}
                        onSaveValue={(value) => {
                            console.log('darkthemeenabled:', value);
                            this.setState({
                                darkthemeenabled: value
                            });
                        }}
                        value={this.state.darkthemeenabled}
                        thumbTintColor={(this.state.darkthemeenabled) ? colors.black : colors.switchDisabled}
                    />
                    <SettingsDividerLong android={false} />

                </ScrollView>
            </View>

        );
    }
}
const colors = {
    iosSettingsBackground: 'rgb(235,235,241)',
    white: '#FFFFFF',
    monza: 'royalblue',
    switchEnabled: (Platform.OS === 'android') ? 'royalblue' : null,
    switchDisabled: (Platform.OS === 'android') ? '#efeff3' : null,
    switchOnTintColor: (Platform.OS === 'android') ? 'royalblue' : null,
    black: '#000',
    blueGem: '#27139A',
};