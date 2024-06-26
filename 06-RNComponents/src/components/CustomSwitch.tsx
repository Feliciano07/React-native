import React, { useContext, useState } from 'react'
import { Platform, Switch } from 'react-native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    isOn: boolean,
    onChange: (isEnable: boolean) => void
}

export const CustomSwitch = ({ isOn, onChange }: Props) => {

    const { theme: { colors } } = useContext(ThemeContext)

    const [isEnabled, setIsEnabled] = useState(isOn);

    const toggleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    }

    return (
        <Switch
            trackColor={{ false: '#D9D9BD', true: colors.primary }}
            thumbColor={(Platform.OS === 'android') ? colors.primary : ''}
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    )
}
