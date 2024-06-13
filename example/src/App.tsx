import React from 'react';
import { View, StyleSheet } from 'react-native';
import AnimatedFloatingButton from 'rn-animated-floating-button';

const App: React.FC = () => {
  // Function to handle button press
  const handleButtonPress = () => {
    console.log('Button pressed!');
    // Add your custom functionality here...
  };

  return (
    <View style={styles.container}>
      {/* Animated Floating Button Component */}
      <AnimatedFloatingButton
        containerStyle={{}} // Optional container style
        iconStyle={styles.iconStyle} // Custom style for the button icon
        circleHeight={60} // Optional height of the floating button circle
        circleWidth={60} // Optional width of the floating button circle
        iconColors="blue" // Optional color for the button icon
        menuIcon={require('../assets/MicrosoftTeams-image.png')} // Required menu icon
        onPress={handleButtonPress} // Callback function for button press
        animationDuration={500} // Customize animation duration
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
  iconStyle: {
    width: 30,
    height: 30,
  },
});

export default App;
