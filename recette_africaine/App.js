import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// import AcceuilChef from './interfaces/chef/acceuil/acceuil';
import AcceuilMiniChef from './interfaces/mini-chef/acceuil/acceuil';

export default function App() {
  return (
    <View style={styles.container}>
      <AcceuilMiniChef></AcceuilMiniChef>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
