import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getEntityAction } from '../../store/actions/entityActions';
import { entityEnums } from '../../store/constants/entityConstants';

import ActivityIndicator from '../../components/activityIndicator';
import Snackbar from '../../components/snackbar';
import CharacterCard from '../../components/characterCard';
import FlatList from '../../components/flatList';
import EmptyList from '../../components/emptyList';

import translationsEnums from '../../themes/translations/translationsEnums';
import translationsKeys from '../../themes/translations/translationsKeys';
import { renderTranslations } from '../../utils/translationsUtils';

import { capitalizeFirstLetter } from '../../utils/stringsUtils';

import styles from './charactersScreenStyles';

const CharactersScreen = ({
    navigation,
    translations,
    characters,
    prev,
    next,
    requesting,
    failure,
    message,
    /// Actions
    getEntityAction,
}) => {
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        if (characters?.length === 0) initialRequest();
        navigation.setOptions({
            title: charactersTitle,
        });
    }, []);

    useEffect(() => {
        if (failure && message) setErrorMessage(message);
    }, [failure, message]);

    const initialRequest = () =>
        getEntityAction(entityEnums.character, prev, next, characters);

    const getCharactersNextPage = () =>
        typeof next === 'string' && initialRequest();

    const { charactersTitle, lastLocation } = renderTranslations(
        translations,
        translationsEnums.character,
        translationsKeys.character,
    );

    const { noResults } = renderTranslations(
        translations,
        translationsEnums.generic,
        translationsKeys.generic,
    );

    const errorTranslations = renderTranslations(
        translations,
        translationsEnums.error,
        translationsKeys.error,
    );

    const onDismissError = () => setErrorMessage('');

    const renderItem = ({ item }) => {
        const { name, status, species, location, image } = item;
        return (
            <CharacterCard
                name={name}
                status={capitalizeFirstLetter(status)}
                specie={species}
                location={location?.name}
                lastLocation={lastLocation}
                image={image}
            />
        );
    };

    const ListEmptyComponent = <EmptyList text={noResults} />;

    return (
        <View style={styles.container}>
            <Snackbar
                message={errorTranslations[errorMessage]}
                visible={!!errorMessage}
                onDismiss={onDismissError}
            />
            <FlatList
                data={characters}
                contentContainerStyle={styles.listContentContainer}
                keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem}
                ListEmptyComponent={!requesting && ListEmptyComponent}
                ListFooterComponent={requesting && ActivityIndicator}
                ListFooterComponentStyle={styles.footer}
                onEndReached={getCharactersNextPage}
                scrollEnabled
            />
        </View>
    );
};

const mapStateToPros = state => {
    return {
        translations: state.languages.translations,
        characters: state.character.characters.results,
        prev: state.character.characters.info.prev,
        next: state.character.characters.info.next,
        requesting: state.character.getCharactersRequesting,
        failure: state.character.getCharactersFailure,
        message: state.character.getCharactersMessage,
        state,
    };
};

const mapDispatchToProps = {
    getEntityAction,
};

export default connect(
    mapStateToPros,
    mapDispatchToProps,
)(CharactersScreen);
