import { View, Text, TouchableOpacity } from 'react-native';
import { Plus } from 'lucide-react-native';
import styles from '../styles';

export default function MealSection() {
    return (
        <View style={[styles.section, styles.mealSection]}>
            <Text>
              Meals
            </Text>
            <TouchableOpacity onPress={() => alert('Add Meal button pressed')}>
              <Plus />
            </TouchableOpacity>
          </View>
    );
}