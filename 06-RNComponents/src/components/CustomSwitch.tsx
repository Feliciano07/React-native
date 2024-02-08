import React, { useState } from 'react'
import { Platform, Switch } from 'react-native';

interface Props {
    isOn: boolean,
    onChange: (isEnable:boolean) => void
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {

    const [isEnabled, setIsEnabled] = useState(isOn);
    
    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    }

    return (
        <Switch
            trackColor={{ false: '#D9D9BD', true: '#5856D6' }}
            thumbColor={(Platform.OS === 'android') ? '#5856D6' : ''}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}
