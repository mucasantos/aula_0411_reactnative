import { Text, TouchableOpacity, View } from 'react-native';
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function TabTwoScreen() {

  const LIST_TITLE = ['🍜', '🚌', '🏠', '🔋', '☂️', '🏥', '🏖️️', '🎮', '💝', '🐶'];
  return (
<GestureHandlerRootView>  
    <SafeAreaView>
      <View>
        <Text style={{ fontSize: 28, fontWeight: 'bold', margin: 20 }}>
          Create Goals
        </Text>
        <Text style={{ fontSize: 14, fontWeight: 'bold', margin: 20 }}>
          You want to save for...
        </Text>

        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            {LIST_TITLE.map((item, index) => (
              <TouchableOpacity key={index}>
                <Text style={{fontSize: 64, marginHorizontal: 10}}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

        </View>


      </View>
    </SafeAreaView>
</GestureHandlerRootView>
  );
}
