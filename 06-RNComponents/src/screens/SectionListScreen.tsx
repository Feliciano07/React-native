import React from 'react'
import { SectionList, Text, View } from 'react-native'
import { Header } from '../components/Header'
import { styles } from '../theme/appTheme'
import { ItemSeparator } from '../components/ItemSeparator';

interface Casas {
    casa: string;
    data: string[];
}

const casas: Casas[] = [
    {
        casa: "DC Comics",
        data: ["Batman", "Superman", "Robin", "Batman", "Superman", "Robin", "Batman", "Superman", "Robin",]
    },
    {
        casa: "Marvel Comics",
        data: ["Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman", "Antman", "Thor", "Spiderman", "Antman",]
    },
    {
        casa: "Anime",
        data: ["Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama", "Kenshin", "Goku", "Saitama",]
    }
];

export const SectionListScreen = () => {

    return (
        <View style={{ ...styles.globalMargin, flex: 1 }}>
            <SectionList
                sections={casas}
                keyExtractor={(item, index) => item + index}

                ListHeaderComponent={() => <Header titulo='Section List' />}
                ListFooterComponent={() => <Header titulo={`Total casas ${casas.length}`} />}

                renderItem={({ item }) => <Text>{item}</Text>}
                stickySectionHeadersEnabled

                renderSectionHeader={({ section }) => (
                    <View style={{ backgroundColor: 'white' }}>
                        <Header titulo={section.casa} />
                    </View>
                )}
                renderSectionFooter={({ section }) => (
                    <Header titulo={`Total: ${section.data.length}`} />
                )}
                ItemSeparatorComponent={() => <ItemSeparator />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )

}
