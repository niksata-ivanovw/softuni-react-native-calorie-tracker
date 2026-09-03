import { Text, Modal, View, Button, StyleSheet } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Home, Plus, ChartNoAxesColumn, UserRound } from 'lucide-react-native';

export default function App() {
    const [caloriesRemaining, setCaloriesRemaining] = useState(2000);
    const [caloriesBurned, setCaloriesBurned] = useState(0);


    return (
      <SafeAreaProvider>
        <SafeAreaView style={styles.container}>
          {/* Header */}
          <View style={[styles.headerSection]}>
            <Text style={styles.heading}>
              Calorie Tracker
            </Text>
          </View>

          {/* Overview */}
          <View style={[styles.section, styles.overviewSection]}>
            <Text>
              Calorie Overview
            </Text>
          </View>

          {/* Meal Section */}
          <View style={[styles.section]}>
            <Text>
              List of Meals
            </Text>
          </View>

          {/* App Bar */}
          <View style={[styles.appBar]}>
            <View style={[styles.appBarItem]}>
              <Home />
              <Text style={{fontSize: 13}}>Home</Text>
            </View> 
            
            <View style={styles.appBarItem}>
              <Plus />
              <Text style={{fontSize: 13}}>Add Meal</Text>
            </View>

            <View style={styles.appBarItem}>
              <ChartNoAxesColumn />
              <Text style={{fontSize: 13}}>Statistics</Text>
            </View>

            <View style={styles.appBarItem}>
              <UserRound />
              <Text style={{fontSize: 13}}>Profile</Text>
            </View>            
          </View>

          <StatusBar />
        </SafeAreaView>
      </SafeAreaProvider>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
  },
  section: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#edf2f7',
    borderRadius: 10,
    width: '90%',
    padding: 20,
  },
  headerSection: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#edf2f7',
    width: '100%',
    padding: 10,
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  overviewSection: {
    
  },
  appBar: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#edf2f7',
    width: '100%',
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  appBarItem: {
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: 8,
  }
});