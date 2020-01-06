# cricnews
A react native news app which listed the popular rss news feed from different sources of cricket sports. Technology used: react native,
redux,css . Implemented only for Android.

## Getting Started
####
# Install dependencies
# Requirements:
1. node > v8.0.0
2. npm > v6

#Run:
react-native run-android 

#Setup In-Details:
# Add signed key to project
* Place the my-release-key.keystore file under the android/app directory in your project folder.
* Edit the file ~/.gradle/gradle.properties or android/gradle.properties, and add the following (replace ***** with the correct keystore password, alias and key password):
        MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
        MYAPP_RELEASE_KEY_ALIAS=my-key-alias
        MYAPP_RELEASE_STORE_PASSWORD=*****
        MYAPP_RELEASE_KEY_PASSWORD=*****
* Edit the file android/app/build.gradle in your project folder, and add the signing config:
	```
	android {
	    ...
	    defaultConfig { ... }
	    signingConfigs {
		release {
		    if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
		        storeFile file(MYAPP_RELEASE_STORE_FILE)
		        storePassword MYAPP_RELEASE_STORE_PASSWORD
		        keyAlias MYAPP_RELEASE_KEY_ALIAS
		        keyPassword MYAPP_RELEASE_KEY_PASSWORD
		    }
		}
	    }
	    buildTypes {
		release {
		    ...
		    signingConfig signingConfigs.release
		}
	    }
	}
	```
