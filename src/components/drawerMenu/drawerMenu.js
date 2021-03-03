import React from 'react';
import {func, object} from 'prop-types';
import {View, SafeAreaView} from 'react-native';

import {connect} from 'react-redux';
import {logoutAction} from '@actions/authActions';

import {features} from '../../../app.json';

import Button from '@components/button';
import Image from '@components/image';
import FlatList from '@components/flatList';
import TouchableItem from './components/touchableItem';

import Images from '@themes/images';
import translationsEnums from '@themes/translations/translationsEnums';
import translationsKeys from '@themes/translations/translationsKeys';
import {renderTranslations} from '@utils/translationsUtils';
import {navigate} from '@utils/navigationUtils';
import routes from '@navigator/routes';

import styles from './drawerMenuStyles';

const {logo} = Images;

const DrawerMenu = ({navigation, translations, logoutAction}) => {
  const homeTranslations = renderTranslations(
    translations,
    translationsEnums.home,
    translationsKeys.home
  );

  const {home, logout} = homeTranslations;

  const onPressLogout = async () => {
    await navigation.toggleDrawer();
    logoutAction();
  };
  const Home = (
    <TouchableItem
      onPress={() => navigate(navigation, routes.home)}
      name="home"
      text={home}
    />
  );

  const renderItem = ({item}) => (
    <TouchableItem
      onPress={() => {
        navigate(navigation, routes[item.name]);
      }}
      name={item.name}
      text={homeTranslations[item.name]}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.image} source={logo} />
        </View>
        <View style={styles.contentContainer}>
          <FlatList
            data={features}
            ListHeaderComponent={Home}
            keyExtractor={(item, index) => index.toString()}
            renderItem={renderItem}
            bounces={false}
          />
        </View>

        <View style={styles.footerContainer}>
          <Button
            buttonStyle={styles.button}
            contentStyle={styles.button}
            onPress={onPressLogout}>
            {logout}
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

DrawerMenu.propTypes = {
  navigation: object,
  translations: object,
  logoutAction: func,
};

DrawerMenu.defaultProps = {
  navigation: {},
  translations: {},
};

const mapStateToProps = (state) => {
  return {
    translations: state.languages.translations,
  };
};

const mapDispatchToProps = {
  logoutAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(DrawerMenu);
