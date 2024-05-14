import { Button, Input, Layout, Text } from "@ui-kitten/components"
import { ScrollView, useWindowDimensions } from "react-native"
import { MyIcon } from "../../components/MyIcon";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/StackNavigator";


interface Props extends StackScreenProps<RootStackParams, 'RegisterScreen'> { };

export const RegisterScreen = ({ navigation }: Props) => {

    const { height, width } = useWindowDimensions();

    return (
        <Layout
            style={{
                flex: 1
            }}
        >
            <ScrollView style={{ marginHorizontal: 40 }}>
                <Layout
                    style={{
                        paddingTop: height * 0.25
                    }}
                >
                    <Text category="h1">Crear cuenta</Text>
                    <Text category="p2">Por favor, crea una cuenta para continuar</Text>
                </Layout>

                {/* Inputs */}
                <Layout style={{ marginTop: 20 }}>
                    <Input
                        accessoryLeft={<MyIcon name="person-outline" />}
                        placeholder="Nombre Completo"
                        style={{ marginBottom: 10 }}
                    />
                    <Input
                        accessoryLeft={<MyIcon name="email-outline" />}
                        placeholder="Corre electrónico"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={{ marginBottom: 10 }}

                    />
                    <Input
                        accessoryLeft={<MyIcon name="lock-outline" />}
                        placeholder="Contraseña"
                        autoCapitalize="none"
                        style={{ marginBottom: 10 }}
                        secureTextEntry
                    />
                </Layout>
                <Layout style={{ height: 20 }} />
                <Layout>
                    <Button
                        accessoryRight={<MyIcon name="arrow-forward-outline" white />}
                        onPress={() => console.log('Entrar')}
                    >
                        Crear
                    </Button>
                </Layout>
                {/* Informacion para crear cuenta */}
                <Layout style={{ height: 40 }} />
                <Layout
                    style={{
                        alignItems: 'flex-end',
                        flexDirection: 'row',
                        justifyContent: 'center'
                    }}
                >
                    <Text>¿Ya tienes una cuenta?</Text>
                    <Text
                        status="primary"
                        category="s1"
                        onPress={() => navigation.goBack()}
                    >
                        {' '} ingresar {' '}
                    </Text>
                </Layout>
            </ScrollView>
        </Layout>
    )
}