import React from 'react';
import {FlatList as RNFlatList} from 'react-native';
import PropTypes from 'prop-types';

const FlatList = ({
  data,
  keyExtractor,
  renderItem,
  scrollEnabled,
  horizontal,
  showsHorizontalScrollIndicator,
  showsVerticalScrollIndicator,
  style,
  contentContainerStyle,
  ListHeaderComponent,
  ListHeaderComponentStyle,
  ListFooterComponent,
  ListFooterComponentStyle,
  ListEmptyComponent,
  ItemSeparatorComponent,
  onEndReached,
  onEndReachedThreshold,
  ...props
}) => (
  <RNFlatList
    {...props}
    data={data}
    keyExtractor={keyExtractor}
    renderItem={renderItem}
    scrollEnabled={scrollEnabled}
    horizontal={horizontal}
    showsHorizontalScrollIndicator={showsHorizontalScrollIndicator}
    showsVerticalScrollIndicator={showsVerticalScrollIndicator}
    style={style}
    contentContainerStyle={contentContainerStyle}
    ListHeaderComponent={ListHeaderComponent}
    ListHeaderComponentStyle={ListHeaderComponentStyle}
    ListFooterComponent={ListFooterComponent}
    ListFooterComponentStyle={ListFooterComponentStyle}
    ListEmptyComponent={ListEmptyComponent}
    ItemSeparatorComponent={ItemSeparatorComponent}
    onEndReached={onEndReached}
    onEndReachedThreshold={onEndReachedThreshold}
  />
);

FlatList.propTypes = {
  data: PropTypes.array,
  keyExtractor: PropTypes.func,
  renderItem: PropTypes.func,
  scrollEnabled: PropTypes.bool,
  horizontal: PropTypes.bool,
  showsHorizontalScrollIndicator: PropTypes.bool,
  showsVerticalScrollIndicator: PropTypes.bool,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  ListHeaderComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  ListHeaderComponentStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  ListFooterComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  ListFooterComponentStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  ListEmptyComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  ItemSeparatorComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.node]),
  onEndReached: PropTypes.func,
  onEndReachedThreshold: PropTypes.number,
};

FlatList.defaultProps = {
  data: [],
  scrollEnabled: false,
  horizontal: false,
  showsVerticalScrollIndicator: false,
  showsHorizontalScrollIndicator: false,
  onEndReachedThreshold: 1,
};

export default FlatList;
