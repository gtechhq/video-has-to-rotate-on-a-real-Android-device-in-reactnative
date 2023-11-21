import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Video } from 'expo-av';
import Orientation from 'react-native-orientation-locker';

export default function App() {
  useEffect(() => {
    // Lock the device orientation to landscape
    Orientation.lockToLandscape();
    return () => {
      // Unlock the device orientation when the component is unmounted
      Orientation.unlockAllOrientations();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Video
        source={{ uri: 'YOUR_VIDEO_URL_HERE' }}
        rate={1.0}
        volume={1.0}
        isMuted={false}
        resizeMode="cover"
        shouldPlay
        isLooping
        style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
