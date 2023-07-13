import React from 'react'
import { Text, View } from 'react-native'

type ComponentsProps = {
    mensaje?: string
}

const Message = (props:ComponentsProps ) => {

    return(
        <View>
            <Text>
                {props.mensaje}
            </Text>
        </View>
    )
}

export default Message