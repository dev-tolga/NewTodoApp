import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import React from 'react';
import {COLORS, SIZES, SHADOW, FONTS, PATH} from '../constants';

const CardData = props => {
  console.log(props.data);
  return (
    <View style={styles.view}>
      <View style={{flexDirection: 'row'}}>
        {console.log(props.data.isSelected)}
        <TouchableOpacity
          style={{marginRight: 15}}
          onPress={value =>
            props.setIsSelected(props.data)
          }>
          <Text style={{fontSize: 28}}>X</Text>
        </TouchableOpacity>

        <Text
          style={{
            
            ...styles.text,
            textDecorationLine: props.data.isSelected ? 'line-through' : 'none',
          }}>
          {props.data.text}
        </Text>
      </View>
      <TouchableOpacity
        style={{flexDirection: 'row', justifyContent: 'flex-end'}}
        onPress={value => props.deleteItem(props.index)}>
        <Image
          source={PATH.deleteImage}
          style={{
            width: 20,
            height: 20,
            marginRight: 12,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    ...SHADOW,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: SIZES.padding,
    borderRadius: SIZES.borderRadius,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.secondary,
    marginBottom: 15,
  },
  text: {
    ...FONTS.h2_semiBold,
    color: COLORS.primary,
  },
  checkbox: {
    marginRight: 15,
  },
});

export default CardData;
