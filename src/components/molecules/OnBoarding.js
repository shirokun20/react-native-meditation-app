import React from 'react'
import { View, Text, StyleSheet, StatusBar, Animated } from 'react-native'
import { Easing } from 'react-native-reanimated';
import { Button } from '../atoms'
function index({title,subtitle,description,ilustration,onNext,onSkip }) {
    
    const ImageAnimation = React.useRef(new Animated.Value(0)).current;
    const subTextAnimation = React.useRef(new Animated.Value(0)).current;
    const descTextAnimation = React.useRef(new Animated.Value(0)).current;

    React.useEffect(()=> {
        Animated.sequence([
            Animated.timing(ImageAnimation, {
                toValue: 1,
                duration: 700,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
            Animated.timing(subTextAnimation, {
                toValue: 1,
                duration: 700,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
            Animated.timing(descTextAnimation, {
                toValue: 1,
                duration: 700,
                easing: Easing.linear,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    const opacity = ImageAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    const subTextopacity = subTextAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    const descTextopacity = descTextAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
    });

    const scale = ImageAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: [3, 1]
    });

    return (
        <View style={{ flex: 1, backgroundColor: '#2748C9', }}>
            <View style={styles.container}>
                <StatusBar backgroundColor="#2748C9" />
                <Text style={styles.title}>{title}</Text>
                <Animated.View style={[styles.image, {
                    opacity,
                    transform: [{ scale }]
                }]}>
                    {ilustration}
                </Animated.View>
                <Animated.Text style={[styles.subtitle, {
                    opacity: subTextopacity,
                }]}>{subtitle}</Animated.Text>
                <Animated.Text style={[styles.description, {
                    opacity: descTextopacity,
                }]}>
                    {description}
                </Animated.Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.lewati} onPress={onSkip}>Lewati</Text>
                <Button title="Lanjutkan" onPress={onNext} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 7,
        paddingTop: 34
    },
    title: {
        color: '#FFFFFF',
        fontSize: 28,
        fontWeight: 'bold',
        fontFamily:'Poppins-Bold',
        textAlign: 'center',
        marginBottom: 55
    },
    subtitle: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 12,
        fontFamily:'Poppins-Bold',
    },
    image: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 50,
        alignSelf: 'center',
        width: 327
    },
    description: {
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: 'center',
        marginHorizontal: 39,
        lineHeight: 21,
        fontFamily:'Poppins-Light',
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 24,
        alignItems: 'center',
        marginTop: -30
    },
    lewati: {
        fontSize: 16,
        letterSpacing: 0.5,
        color: '#FFFFFF',
        opacity: 0.6,
        paddingHorizontal: 42
    }
})

export default index
