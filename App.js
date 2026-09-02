import { Text, Modal, View, Button, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    return (
      <SafeAreaView style={styles.container}>
        {/* Header */}
        <View>
          <Text>
            Calorie Tracker
          </Text>
        </View>

        {/* Overview */}
        <View>
          <Text>
            Calorie Overview
          </Text>
        </View>

        {/* Meal Section */}
        <View>
          <Text>
            List of Meals
          </Text>
        </View>

        {/* App Bar */}
        <View>
          <Text>
            App Bar
          </Text>
        </View>
      

        <StatusBar />
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
  },
});