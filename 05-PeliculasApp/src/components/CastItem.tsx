import React from 'react'
import { Cast } from '../models/CreditsData'
import { Image, StyleSheet, Text, View } from 'react-native'

interface Props {
    actor: Cast
}

export const CastItem = ({actor}: Props) => {
    
    const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

    return(
        <View style={styles.container}>
            {
                actor.profile_path &&
                <Image
                source={{uri}}
                style={{width: 50, height: 50, borderRadius:10}}
            />
            }
            
            <View style={styles.actorInfo}>
                <Text style={{fontSize: 18, fontWeight: 'bold', color: 'black'}} >
                    {actor.name}
                </Text>
                <Text style={{fontSize: 16}} >
                    {actor.character}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        borderRadius: 10,
        marginRight: 20,
        paddingRight: 10
    },
    actorInfo: {
        marginLeft: 10
    }
})