import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, FlatList} from 'react-native';
import {connect} from 'react-redux';

import {features} from '../../../app.json';

import Header from '@components/header';
import HomeCard from './components/homeCard';

import Images from '@themes/images';
import translationsEnums from '@themes/translations/translationsEnums';
import translationsKeys from '@themes/translations/translationsKeys';
import {renderTranslations} from '@utils/translationsUtils';
import {navigate} from '@utils/navigationUtils';
import routes from '@navigator/routes';

import styles from './homeScreenStyles';

const {HeaderMenu, HeaderImage} = Header;

const HomeScreen = ({navigation, translations}) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <HeaderMenu toggleDrawer={toggleDrawer} />,
      headerTitle: () => <HeaderImage image={Images.logo} />,
    });
  }, []);

  const toggleDrawer = () => navigation.toggleDrawer();

  const homeTranslations = renderTranslations(
    translations,
    translationsEnums.home,
    translationsKeys.home
  );

  const renderItem = ({item}) => (
    <HomeCard
      onPress={() => navigate(navigation, routes[item.name])}
      name={item.name}
      translations={homeTranslations}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={features.filter(({enabled}) => enabled)}
        contentContainerStyle={styles.contentContainerStyle}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

HomeScreen.propTypes = {
  navigation: PropTypes.object,
  translations: PropTypes.object,
};

HomeScreen.defaultProps = {
  navigation: {},
  translations: {},
};

const mapStateToProps = (state) => {
  return {
    translations: state.languages.translations,
  };
};

export default connect(mapStateToProps, null)(HomeScreen);
