**react-native:0.72.4**
> npm install react-native-gradle-plugin

**package.json**

    "dependencies": {
	    "@react-native-community/masked-view": "^0.1.11",
		"@react-navigation/bottom-tabs": "^6.5.8",
		"@react-navigation/native": "^6.1.7",
		"@react-navigation/native-stack": "^6.9.13",
		"@react-navigation/stack": "^6.3.17",
		"react": "18.2.0",
		"react-native": "0.72.4",
		"react-native-gesture-handler": "^2.9.0",
		"react-native-gradle-plugin": "^0.71.19",
		"react-native-reanimated": "^3.0.2",
		"react-native-safe-area-context": "^4.5.1",
		"react-native-screens": "^3.25.0",
		"react-native-svg": "^13.13.0"
	}
	"devDependencies": {
	"@react-native-community/eslint-config": "^3.2.0",
	}

**babel.config.js**

	module.exports  = {
		presets: ['module:metro-react-native-babel-preset'],
		plugins: ['react-native-reanimated/plugin'],
	};

**For React Native 0.61 or greater, add the library as the first import in your index.js file:**

	import  'react-native-gesture-handler';


**android/build.gradle**

	classpath("com.android.tools.build:gradle:7.3.1")

**android/settings.gradle**

	includeBuild('../node_modules/react-native-gradle-plugin')

**MainActivity.java**

	package  com.reactnativenavigation;
	import  com.facebook.react.ReactActivity;
	import  com.facebook.react.ReactActivityDelegate;
	import  com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
	import  com.facebook.react.defaults.DefaultReactActivityDelegate;
	
	public  class  MainActivity  extends  ReactActivity {
		/**
		* Returns the name of the main component registered from JavaScript. This is used to schedule

		* rendering of the component.
		*/

		@Override
		protected  String  getMainComponentName() {
			return  "reactNativeNavigation";
		}
		
		/**

		* Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link

		* DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
		* (aka React 18) with two boolean flags.
		*/
		
		@Override
		protected  ReactActivityDelegate  createReactActivityDelegate() {
		return  new  DefaultReactActivityDelegate(
		this,
		getMainComponentName(),
		// If you opted-in for the New Architecture, we enable the Fabric Renderer.
		DefaultNewArchitectureEntryPoint.getFabricEnabled(), // fabricEnabled
		// If you opted-in for the New Architecture, we enable Concurrent React (i.e. React 18).
		DefaultNewArchitectureEntryPoint.getConcurrentReactEnabled() // concurrentRootEnabled
		);
		}
	}

**android/gradle/wrapper/gradle-wrapper.properties**

	distributionUrl=https\://services.gradle.org/distributions/gradle-7.5.1-all.zip