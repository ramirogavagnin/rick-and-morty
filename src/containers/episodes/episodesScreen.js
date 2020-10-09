import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import { connect } from 'react-redux';

import Text from '../../components/text';

import translationsEnums from '../../themes/translations/translationsEnums';
import translationsKeys from '../../themes/translations/translationsKeys';
import { renderTranslations } from '../../utils/translationsUtils';

import styles from './episodesScreenStyles';

const EpisodesScreen = ({ navigation, translations }) => {
    useEffect(() => {
        navigation.setOptions({
            title: episodes,
        });
    }, []);

    const { comingSoon, episodes } = renderTranslations(
        translations,
        translationsEnums.generic,
        translationsKeys.generic,
    );
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{comingSoon}</Text>
        </View>
    );
};

EpisodesScreen.propTypes = {
    navigation: PropTypes.object,
    translations: PropTypes.object,
};

EpisodesScreen.defaultProps = {
    navigation: {},
    translations: {},
};

const mapStateToProps = state => {
    return {
        translations: state.languages.translations,
    };
};

export default connect(
    mapStateToProps,
    null,
)(EpisodesScreen);
