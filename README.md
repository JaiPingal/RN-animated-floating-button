# rn-animated-floating-button

A customizable animated floating button component for React Native.

## Installation
You can install the package via npm or yarn:

```bash
npm install rn-animated-floating-button
or 
yarn add rn-animated-floating-button

```

## Usage

```js
import AnimatedFloatingButton from 'rn-animated-floating-button';

import React from 'react';
import { View, StyleSheet } from 'react-native';
import AnimatedFloatingButton from 'rn-animated-floating-button';

const App: React.FC = () => {
  const handleButtonPress = () => {
    console.log('Button pressed!');
    // Add your custom functionality here...
  };

  return (
    <View style={styles.container}>
      <AnimatedFloatingButton
        iconColors="blue"
        menuIcon={require('../assets/MicrosoftTeams-image.png')}
        onPress={handleButtonPress}
        animationDuration={1000}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

export default App;

```
## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
