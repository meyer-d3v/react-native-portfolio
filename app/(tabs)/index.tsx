import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const app = () => {
  return (
    <ImageBackground
        source={require('../../assets/images/bgImage_device.jpg')}
        style={styles.image}
        imageStyle={{ borderRadius: 20 }}
          resizeMode="cover">

      <Image source={require('../../assets/images/meyer-logo.png')}
          style={styles.meyerLogo}
          ></Image>
      <View style={styles.horizontalLine}></View>

    <View style={styles.container}>
      
        
      

      <View style={styles.stripeBox}>

          <View style={styles.rowContainer}>

              <View style={styles.double}>
              <View style={[styles.row, styles.row1]}></View>
              <View style={[styles.row, styles.rowend1]}></View>
              </View>

          </View>

          <View style={styles.rowContainer}>

              <View style={styles.double}>
              <View style={[styles.row, styles.row2s]}></View>
              <View style={[styles.row, styles.row2]}></View>
              <View style={[styles.row, styles.row22]}></View>
              </View>
          </View>

          <View style={styles.rowContainer}>

              <View style={styles.double}>
              <View style={[styles.row, styles.row3]}></View>
              <View style={[styles.row, styles.row32]}></View>
              <View style={[styles.row, styles.row33]}></View>
              <View style={[styles.row, styles.row34]}></View>
              </View>

          </View>

          <View style={styles.rowContainer}>

              <View style={styles.double}>
              <View style={[styles.row, styles.row4]}></View>
              <View style={[styles.row, styles.row42]}></View>
              <View style={[styles.row, styles.row43]}></View>
              </View>

          </View>

          <View style={styles.rowContainer}>

              <View style={styles.double}>
              <View style={[styles.row, styles.row5]}></View>
              <View style={[styles.row, styles.row52]}></View>
              </View>

          </View>
      </View>

      <View style={styles.textContainer}>
        
          <Text style={styles.text}>Meyer.dev</Text>
          <Text style={styles.occupation}>Software Developer</Text>

      </View> 
      

      <View style={styles.stripeBox}>

          <View style={styles.rowContainer}>

              <View style={styles.double}>
              <View style={[styles.row, styles.row6]}></View>
              <View style={[styles.row, styles.row62]}></View>
              </View>

          </View>

          <View style={styles.rowContainer}>

              <View style={styles.double}>
              <View style={[styles.row, styles.row7]}></View>
              <View style={[styles.row, styles.row72]}></View>
              <View style={[styles.row, styles.row73]}></View>
              <View style={[styles.row, styles.row74]}></View>
              </View>
          </View>

          <View style={styles.rowContainer}>

              <View style={styles.double}>
              <View style={[styles.row, styles.row8]}></View>
              <View style={[styles.row, styles.row82]}></View>
              <View style={[styles.row, styles.row83]}></View>
              </View>

          </View>

          <View style={styles.rowContainer}>

              <View style={styles.double}>
              <View style={[styles.row, styles.row9]}></View>
              <View style={[styles.row, styles.row92]}></View>
              <View style={[styles.row, styles.row93]}></View>
              </View>

          </View>

          <View style={styles.rowContainer}>

              <View style={styles.double}>
              <View style={[styles.row, styles.row10]}></View>
              <View style={[styles.row, styles.row101]}></View>
              </View>

          </View>

          <View style={styles.rowContainer}>

              <View style={styles.double}>
              <View style={[styles.row, styles.row11]}></View>
              <View style={[styles.row, styles.row112]}></View>
              </View>

          </View>

          <View style={styles.rowContainer}>

              <View style={styles.double}>
              <View style={[styles.row, styles.row12]}></View>
              <View style={[styles.row, styles.row122]}></View>
              <View style={[styles.row, styles.row123]}></View>
              </View>

          </View>
      </View>
    
      </View>
    </ImageBackground>
    
  )
}

export default app

const styles = StyleSheet.create({
  meyerLogo: {
    width: 80,
    height: 20,
    marginTop: 50,
    marginLeft: 20,
    marginBottom: 1,
    

  },
  container: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
    justifyContent: 'center',
    marginTop: -20,
  },
  logo: {
    backgroundImage: '../../assets/images/bgImage_device.jpg',
    width: 50,
    height: 30,
  },
  horizontalLine: {
    width: '100%',
    height: 0.2,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  double: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 2,
  },
  rowContainer:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,

    marginLeft: 25,
    // marginRight: 20,
  },
  stripeBox: {
    //backgroundColor: 'black',
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: 'bold',
    marginLeft: 25,
  },
  occupation: {
    color: 'white',
    fontSize: 20,
    //fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 25, 
    marginBottom: 10,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    marginLeft: 25,

  },
  row: {
    backgroundColor: '#e36be1',
    width: 90,
    height: 20,
    borderRadius: 10,
  },
  row1: {
    backgroundColor: '#e36be1',
    width: 120,
  },
  rowend1: {
    backgroundColor: '#edf',
    width: 25,
    justifyContent: 'flex-end',
    marginLeft: 4,
  },
  row2: {
    backgroundColor: '#03cafc',
    width: 80,
    marginLeft: 4,
  },
  row2s: {
    backgroundColor: '#aef572',
    width: 25,
  },
  row22: {
    backgroundColor: '#dff',
    width: 90,
    marginLeft: 4,
  },
  row3: {
    backgroundColor: '#c6abf5',
    width: 50,
  },
  row32: {
    backgroundColor: '#cde',
    width: 25,
    marginLeft: 4,
  },
  row33: {
    backgroundColor: '#6eed4e',
    width: 120,
    marginLeft: 4,
  },
  row34: {
    backgroundColor: '#8ff7f6',
    width: 35,
    marginLeft: 4,
  },
  row4: {
    backgroundColor: '#f5d0ab',
    width: 85,
  },
  row42: {
    backgroundColor: '#eee',
    width: 25,
    marginLeft: 4,
  },
  row43: {
    backgroundColor: '#edf',
    width: 100,
    marginLeft: 4,
  },
  row5: {
    backgroundColor: '#f90',
    width: 105,
  },
  row52: {
    backgroundColor: '#6ed',
    width: 55,
    marginLeft: 4,
  },
  row6: {
    backgroundColor: '#8d98f7',
    width: 155,
  },
  row62: {
    backgroundColor: '#edf',
    width: 30,
    marginLeft: 4,
  },
  row7: {
    backgroundColor: '#8df7ad',
    width: 60,
  },
  row72: {
    backgroundColor: '#5af533',
    width: 100,
    marginLeft: 4,
  },
  row73: {
    backgroundColor: '#c6abf5',
    width: 55,
    marginLeft: 4,
  },
  row74: {
    backgroundColor: '#f90',
    width: 60,
    marginLeft: 4,
  },
  row8: {
    backgroundColor: '#bde',
    width: 80,
  },
  row82: {
    backgroundColor: '#8ff7f6',
    width: 25,
    marginLeft: 4,
  },
  row83: {
    backgroundColor: '#03cafc',
    width: 65,
    marginLeft: 4,
  },
  row9: {
    backgroundColor: '#c6abf5',
    width: 115,
  },
  row92: {
    backgroundColor: '#aef572',
    width: 45,
    marginLeft: 4,
  },    
  row93: {
    backgroundColor: '#e36be1',
    width: 100,
    marginLeft: 4,
  },
  row10: {
    backgroundColor: '#ece',
    width: 130,
  },
  row101: {
    backgroundColor: '#8ff7f6',
    width: 45,
    marginLeft: 4,
  },
  row11: {
    backgroundColor: '#eced93',
    width: 140,
  },
  row112: {
    backgroundColor: '#f5d0ab',
    width: 95,
    marginLeft: 4,
  },
  row12: {
    backgroundColor: '#eee',
    width: 55,
  },
  row122: {
    backgroundColor: '#8ff7f6',
    width: 25,
    marginLeft: 4,
  },
  row123: {
    backgroundColor: '#dff',
    width: 100,
    marginLeft: 4,
  },
})