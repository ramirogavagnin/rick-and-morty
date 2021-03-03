import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {func, object, array, bool, string} from 'prop-types';
import {isString, capitalize} from 'lodash';

import {connect} from 'react-redux';
import {getEntityAction} from '@actions/entityActions';
import {entityEnums} from '@constants/entityConstants';

import ActivityIndicator from '@components/activityIndicator';
import Snackbar from '@components/snackbar';
import CharacterCard from '@components/characterCard';
import FlatList from '@components/flatList';
import EmptyList from '@components/emptyList';

import translationsEnums from '@themes/translations/translationsEnums';
import translationsKeys from '@themes/translations/translationsKeys';
import {renderTranslations} from '@utils/translationsUtils';

import styles from './charactersScreenStyles';

const CharactersScreen = ({
  navigation,
  translations,
  characters,
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
    getEntityAction(entityEnums.character, next, characters);

  const getCharactersNextPage = () => isString(next) && initialRequest();

  const {charactersTitle, lastLocation} = renderTranslations(
    translations,
    translationsEnums.character,
    translationsKeys.character
  );

  const {noResults} = renderTranslations(
    translations,
    translationsEnums.generic,
    translationsKeys.generic
  );

  const errorTranslations = renderTranslations(
    translations,
    translationsEnums.error,
    translationsKeys.error
  );

  const onDismissError = () => setErrorMessage('');

  const renderItem = ({item: {name, status, species, location, image}}) => (
    <CharacterCard
      name={name}
      status={capitalize(status)}
      specie={species}
      location={location?.name}
      lastLocation={lastLocation}
      image={image}
    />
  );

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

CharactersScreen.propTypes = {
  translations: object,
  characters: array,
  next: string,
  requesting: bool,
  failure: bool,
  message: string,
  getEntityAction: func,
};

CharactersScreen.defaultProps = {
  translations: {},
};

const mapStateToPros = (state) => {
  return {
    translations: state.languages.translations,
    characters: state.character.characters.results,
    next: state.character.characters.info.next,
    requesting: state.character.getCharactersRequesting,
    failure: state.character.getCharactersFailure,
    message: state.character.getCharactersMessage,
  };
};

const mapDispatchToProps = {
  getEntityAction,
};

export default connect(mapStateToPros, mapDispatchToProps)(CharactersScreen);
