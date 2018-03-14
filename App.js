/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {NativeModules} from 'react-native';
var KyberIos = NativeModules.KyberIos;



// import {QRLLIB} from './node_modules/qrllib/build/libjsqrl.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {


    // let i
    // const randomBytes = require('crypto').randomBytes(48)
    // const randomSeed = new libqrl.VectorUChar()
    // for (i = 0; i < 48; i += 1) {
    //   randomSeed.push_back(randomBytes[i])
    // }
    // // Basic passphrase
    // xmssHeight = 10
    //
    // // Generate XMSS object.
    // // eslint-disable-next-line no-global-assign
    // XMSS_OBJECT = new libqrl.Xmss(randomSeed, xmssHeight)





    render() {
        console.log("LOGGING FROM RN: --------")

        KyberIos.getPK((error, pk)=> {
            console.log("REACTNATIVE : alicePublicKey[0] is :",pk)
        })


        return (
          <View style={styles.container}>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
            <Text style={styles.instructions}>
              To get started, edit App.js
            </Text>
            <Text style={styles.instructions}>
              {instructions}
            </Text>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
