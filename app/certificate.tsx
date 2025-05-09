import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { HoverEffect } from 'react-native-gesture-handler';

const ProjectsScreen = () => {

    const [isPressed, setIsPressed] = React.useState(false);

    return (
        <ScrollView>
            <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
        <View style={styles.container}>
            <Text style={styles.title}>12 Certificates to Dean Meyer</Text>
            <Image
                source={require('../assets/images/Certificates/Dean-Meyer_Computer-Hardware-Basics_Cisco.jpg')}
                style={[styles.Image, isPressed && styles.ImagePressed]}
            />
            <Image
                source={require('../assets/images/Certificates/Dean-Meyer_Create-Digital-Content-Communicate-and-Collaborate-Online_Cisco.jpg')}
                style={[styles.Image, isPressed && styles.ImagePressed]}
            />
            <Image
                source={require('../assets/images/Certificates/Dean-Meyer_Digital-Awareness_Cisco.jpg')}
                style={[styles.Image, isPressed && styles.ImagePressed]}
            />
            <Image
                source={require('../assets/images/Certificates/Dean-Meyer_Digital-Safety-and-Security-Awareness.png')}
                style={[styles.Image, isPressed && styles.ImagePressed]}
            />
            <Image
                source={require('../assets/images/Certificates/Dean-Meyer_Introduction-to-Cybersecurity.png')}
                style={[styles.Image, isPressed && styles.ImagePressed]}
            />
            <Image
                source={require('../assets/images/Certificates/Dean-Meyer_Introduction-to-HTML.png')}
                style={[styles.Image, isPressed && styles.ImagePressed]}
            />
            <Image
                source={require('../assets/images/Certificates/Dean-Meyer_Introduction-to-IoT-and-Digital-Transformation_Cisco.jpg')}
                style={[styles.Image, isPressed && styles.ImagePressed]}
            />
            <Image
                source={require('../assets/images/Certificates/Dean-Meyer_Introduction-to-Packet-Tracer_Cisco.jpg')}
                style={[styles.Image, isPressed && styles.ImagePressed]}
            />
            <Image
                source={require('../assets/images/Certificates/Dean-Meyer_IT-Customer-Support-Basics_Cisco.jpg')}
                style={[styles.Image, isPressed && styles.ImagePressed]}
            />
            <Image
                source={require('../assets/images/Certificates/Dean-Meyer_Python-Essentials-1.png')}
                style={[styles.Image, isPressed && styles.ImagePressed]}
            />
            <Image
                source={require('../assets/images/Certificates/Dean-Meyer_Using-Computer-and-Mobile-Devices_Cisco.jpg')}
                style={[styles.Image, isPressed && styles.ImagePressed]}
            />
            <Image
                source={require('../assets/images/Certificates/Meyer-dev_rwd_certificate.jpg')}
                style={[styles.Image, isPressed && styles.ImagePressed]}
            />
        </View>
        </Pressable>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        alignItems: 'center',
        backgroundColor: '#000',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
        textAlign: 'center',    
        marginTop: 20,
    },
    Image: {
        width: 300,
        height: 200,
        marginBottom: 20
    },
    ImagePressed: {
        opacity: 1,
    }
});

export default ProjectsScreen;