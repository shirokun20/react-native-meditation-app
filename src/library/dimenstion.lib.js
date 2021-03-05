import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const getWidth = width;
const getHeight = height;

const setHeight = (percen = 0) => {
    return height * (percen/100);
}

const setWitdh = (percen = 0) => {
    return width * (percen/100);
}

export {
    getWidth,
    getHeight,
    setHeight,
    setWitdh,
}