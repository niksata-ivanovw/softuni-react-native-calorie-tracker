import { View, Text, TouchableOpacity } from 'react-native';
import { Plus } from 'lucide-react-native';
import styles from '../styles';

export default function MealSection({
    onAddMeal
}) {
    return (
        <View style={[styles.section, styles.mealSection]}>
            <Text>
              Meals
            </Text>
            <TouchableOpacity
                hitslop={10}
                onPress={onAddMeal}
            >
              <Plus />
            </TouchableOpacity>
          </View>
    );
}