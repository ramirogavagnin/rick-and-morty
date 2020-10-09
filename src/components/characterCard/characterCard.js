import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Card from '../card';
import Text from '../text';
import Image from '../image';
import TouchableOpacity from '../touchableOpacity';

import Colors from '../../themes/colors';
import Sizes from '../../themes/sizes';
import localMessages from '../../themes/localMessages';

import styles from './characterCardStyles';

const { red, green, grey } = Colors;
const { dot } = Sizes;

const statusColor = {
    Alive: green,
    Dead: red,
    Unknown: grey,
};

const CharacterCard = ({
    style,
    onPressCharacter,
    onPressLocation,
    name,
    status,
    specie,
    location,
    lastLocation,
    image,
    ...props
}) => {
    return (
        <Card style={[styles.card, style]} {...props}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image
                        style={styles.image}
                        source={(image && { uri: image }) || null}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.rightContainer}>
                    <TouchableOpacity onPress={onPressCharacter}>
                        <Text style={styles.name} numberOfLines={1}>
                            {name}
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.statusContainer}>
                        <Icon
                            name="circle"
                            size={dot}
                            color={statusColor[status] || grey}
                        />
                        <Text style={styles.status} numberOfLines={1}>
                            {`${status} - ${specie}`}
                        </Text>
                    </View>
                    <Text style={styles.lastLocation} numberOfLines={1}>
                        {lastLocation}
                    </Text>
                    <TouchableOpacity onPress={onPressCharacter}>
                        <Text style={styles.location} numberOfLines={2}>
                            {location}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Card>
    );
};

CharacterCard.propTypes = {
    onPressCharacter: PropTypes.func,
    onPressLocation: PropTypes.func,
    name: PropTypes.string,
    status: PropTypes.string,
    specie: PropTypes.string,
    location: PropTypes.string,
    lastLocation: PropTypes.string,
    image: PropTypes.string,
};

const { noData } = localMessages;

CharacterCard.defaultProps = {
    translations: {},
    onPressCharacter: () => {},
    onPressLocation: () => {},
    name: noData,
    status: noData,
    specie: noData,
    location: noData,
    lastLocation: noData,
};

export default CharacterCard;
