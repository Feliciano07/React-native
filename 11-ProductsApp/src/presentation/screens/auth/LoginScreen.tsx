import { Button, Input, Layout, Text } from "@ui-kitten/components"
import { Alert, ScrollView, useWindowDimensions } from "react-native"
import { MyIcon } from "../../components/MyIcon";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParams } from "../../navigation/StackNavigator";
import { API_URL_BASE } from "@env";
import { useState } from "react";
import { useAuthStore } from "../../store/auth/useAuthStore";


interface Props extends StackScreenProps<RootStackParams, 'LoginScreen'> { };

export const LoginScreen = ({ navigation }: Props) => {

    const {login} = useAuthStore();

    const { height, width } = useWindowDimensions();

    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    const onLogin = async () => {
        if (form.email.length === 0 || form.password.length === 0){
            return ;
        }

        const wasSuccessFull = await login(form.email, form.password);

        if (wasSuccessFull) return;

        Alert.alert('Error', 'Usuario o contraseña incorrectos');
    }

    return (
        <Layout
            style={{
                flex: 1
            }}
        >
            <ScrollView style={{ marginHorizontal: 40 }}>
                <Layout
                    style={{
                        paddingTop: height * 0.35
                    }}
                >
                    <Text category="h1">Ingresar</Text>
                    <Text category="p2">Por favor, ingrese para continuar</Text>
                </Layout>

                {/* Inputs */}
                <Layout style={{ marginTop: 20 }}>
                    <Input
                        accessoryLeft={<MyIcon name="email-outline" />}
                        placeholder="Corre electrónico"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        style={{ marginBottom: 10 }}
                        value= {form.email}
                        onChangeText={(value) => setForm({...form, email: value})}
                    />
                    <Input
                        accessoryLeft={<MyIcon name="lock-outline" />}
                        placeholder="Contraseña"
                        autoCapitalize="none"
                        style={{ marginBottom: 10 }}
                        secureTextEntry
                        value= {form.password}
                        onChangeText={(value) => setForm({...form, password: value})}
                    />
                </Layout>
                <Layout style={{ height: 20 }} />
                <Layout>
                    <Button
                        accessoryRight={<MyIcon name="arrow-forward-outline" white />}
                        onPress={onLogin}
                    >
                        Ingresar
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
                    <Text>¿No tienes cuenta?</Text>
                    <Text
                        status="primary"
                        category="s1"
                        onPress={() => navigation.navigate('RegisterScreen')}
                    >
                        {' '}crea una{' '}
                    </Text>
                </Layout>
            </ScrollView>
        </Layout>
    )
}