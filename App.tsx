import React from 'react';
import {Button, View} from 'react-native';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

function App(): React.JSX.Element {
  const width = useSharedValue(100);

  const onPress = () => {
    width.value = withSpring(width.value + 50);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: '#b58df1',
          marginBottom: 30,
          borderRadius: 20,
        }}
      />
      <Button onPress={onPress} title="Click me" />
      <Button
        onPress={() => {
          width.value = withSpring(100);
        }}
        title="Reset"
      />
    </View>
  );
}

export default App;
