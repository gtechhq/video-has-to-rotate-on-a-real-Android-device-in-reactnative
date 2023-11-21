# video-has-to-rotate-on-a-real-Android-device-in-reactnative
To create a new Expo project and work on a task that involves rotating a video on a real Android device, you can follow these steps:

Make sure you have Node.js installed on your machine. 

You can then install Expo CLI globally using the following command:

npm install -g expo-cli
 
 Create a new Expo project

Create a new Expo project by running the following commands:

expo init VideoRotationApp

cd VideoRotationApp

 Install Dependencies

Install the necessary dependencies for handling videos and rotation. 

For this example, we'll use expo-av for video handling and react-native-orientation-locker for device orientation control.

Code Implementation

Run the App 

expo start

Test Rotation

As the app starts, it should lock the device orientation to landscape. Test the rotation by physically rotating your Android device. The video should adapt to the landscape orientation.

Make sure to replace the video URL and customize the code according to your specific requirements. Additionally, you may want to handle orientation changes in a more dynamic way depending on your use case.
 
