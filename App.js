import { Text, Modal, View, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Home, Plus, ChartNoAxesColumn, UserRound, Ad } from 'lucide-react-native';
import MealSection from './components/MealSection';
import styles from './styles';
import AddMeal from './components/AddMealModal';

export default function App() {
    const [caloriesRemaining, setCaloriesRemaining] = useState(2000);
    const [caloriesBurned, setCaloriesBurned] = useState(0);
    const [showAddMealModal, setShowAddMealModal] = useState(false);

    const createMealHandler = (meal) => {
      alert(`Meal created: ${meal.name} with ${meal.calories} calories`);
      console.log(`Meal created: ${meal.name} with ${meal.calories} calories`);
    }

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
          <MealSection onAddMeal={() => setShowAddMealModal(true)} />

          {/* Add Meal Modal */}
          {showAddMealModal && <AddMeal onClose={() => setShowAddMealModal(false)} onCreate={createMealHandler} />}

          {/* App Bar */}
          <View style={[styles.appBar]}>
            <TouchableOpacity>
              <View style={[styles.appBarItem]}>
                <Home />
                <Text style={{fontSize: 13}}>Home</Text>
              </View>
            </TouchableOpacity>
            
            <TouchableOpacity
            onPress={() => setShowAddMealModal(true)}
            hitSlop={10}
            >
              <View style={styles.appBarItem}>
                <Plus />
                <Text style={{fontSize: 13}}>Add Meal</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.appBarItem}>
                <ChartNoAxesColumn />
                <Text style={{fontSize: 13}}>Statistics</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity>
              <View style={styles.appBarItem}>
                <UserRound />
                <Text style={{fontSize: 13}}>Profile</Text>
              </View>    
            </TouchableOpacity>        
          </View>

          <StatusBar />
        </SafeAreaView>
      </SafeAreaProvider>
    )
}

