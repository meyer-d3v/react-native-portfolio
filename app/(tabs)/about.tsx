import { ScrollView, View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

const app = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.text}>Hi! I'm <Text style={styles.spanText}>Dean</Text></Text>
      <Image 
          source={require('../../assets/images/profile-picture.png')}
          style={styles.profileImage}
          
      />

      <View style={styles.textContainer}>
      <Text style={styles.paragraph}>My name is <Text style={{ fontWeight: '600' }}>Dean Meyer</Text>, known as Meyer-dev and I am a passionate and ambitious aspiring software developer. <Text style={{ marginTop: 10 }}>With 
        a strong foundation in various programming languages, including <Text style={{ fontWeight: '600' }}>C++, Python, JavaScript, Java, HTML, CSS</Text> and <Text style={{ fontWeight: '600' }}>Delphi</Text>, I constantly expand my skills and explore 
      new technologies to solve real-world problems. Explore my portfolio and GitHub page to see how I turn my ideas into reality and push the boundaries of what is possible through 
      programming.</Text>
      </Text>
      </View>

      <Link href="../certificate" style={{ marginHorizontal: 0}} asChild>
              <Pressable style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Certificates</Text>
              </Pressable>
            </Link>
      
            <Link href="https://meyer-dev.netlify.app" style={{ marginHorizontal: 'auto'}} asChild>
              <Pressable style={styles.buttonStyle}>
                <Text style={styles.buttonText}>Portfolio</Text>
              </Pressable>
            </Link>

            
      
    </View>
    </ScrollView>
  )
}

export default app
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    top: 30,
    textAlign: 'center',
    alignItems: 'center',
    flex: 1,
    marginTop: 50,
    marginBottom: 50,
  },
  spanText: {
    color: '#60f',
    fontSize: 40,
    fontWeight: '600',
    // iOS shadow
    shadowColor: 'rgb(102, 0, 255)',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 16,

    // Android shadow
    elevation: 10,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  text: {
    color: 'white',
    fontSize: 40,
    marginBottom: 20,
  },
  paragraph: {
    //color: 'white',
    fontSize: 16,
    //textAlign: 'center',
    lineHeight: 28, // Increasing line height for better readability
    color: '#333', // Dark gray color for text
    textAlign: 'justify', // Justify the text for a cleaner look
    fontWeight: '400', // Normal weight
    //marginBottom: 10,
     
  },
  link: {
    color: 'white',
    fontSize: 20,
    display: 'flex',
    flex: 1,
    textAlign: 'center',
    textDecorationLine: 'underline',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10%',
  },
  buttonStyle: {
    height: 60,
    width: '75%',
    borderRadius: 10,
    //backgroundColor: '#60f',
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    opacity: 1,
    borderWidth: 2,
    borderColor: '#60f',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    display: 'flex',
    
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  },
  
})
