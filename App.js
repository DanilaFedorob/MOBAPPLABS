import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
///
import { ApolloDriver, ApolloProvider } from '@apollo/client';
import { WelcomeScreen } from './screens/WelcomeScreen';
import { apolloClient } from './services/AppoloClient/ApolloClient';
import { SelectEventScreen } from './screens/SelectEventScreen/SelectEventScreen';
import enUS from 'antd-mobile/es/locales/en-US';
import { ConfigProvider } from 'antd-mobile';

export default function App () {
  return (
<ApolloProvider client = {apolloClient}> 
  <ConfigProvider locale={enUS}>
    <View>
     <SelectEventScreen/> 
    </View>
  </ConfigProvider>
</ApolloProvider> 
  )
}
///
/*
export default function App () {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
