import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, SIZES, SHADOW, FONTS} from '../constants';
import {CardData} from '../components';

const HomeScreen = () => {
  const [list, setList] = useState([]);
  const [value, setValue] = useState('');

  const addItem = text => {
    if (text.length > 0) {
      setList(prevState => [
        ...prevState,
        {id: list.length, text: text, isSelected: false},
      ]);
      console.log(list);
      setValue('');
    } else {
      alert('Please enter some text');
    }
  };
  const setIsSelected = item => {
    console.log('dd', item);
    const {isSelected, text, id} = item;
    console.log(id);
    const newList = [...list];

    newList[id].isSelected = !isSelected;
    setList(newList);
  };

  const deleteItem = idx => {
    Alert.alert('Delete Item', 'Are you sure you want to delete this item?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: () => {
          const data = list.filter((item, index) => index !== idx);
          setList(data);
        },
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          ...FONTS.h1_semiBold,
          color: COLORS.secondary,
          marginBottom: 15,
        }}>
        Todoss..
      </Text>
      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <CardData
            data={item}
            index={index}
            setIsSelected={setIsSelected}
            deleteItem={deleteItem}
          />
        )}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Add a todo"
          placeholderTextColor={COLORS.primary}
          onChangeText={text => setValue(text)}
          value={value}
        />
        <TouchableOpacity style={styles.btn} onPress={() => addItem(value)}>
          <Text style={{fontSize: 34, color: COLORS.secondary}}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'ios' ? 40 : StatusBar.currentHeight + 10,
    flex: 1,
    backgroundColor: '#D9534F',
    padding: SIZES.padding,
  },
  inputContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SIZES.padding,
  },
  textInput: {
    ...SHADOW,
    borderRadius: SIZES.textBoxRadius,
    backgroundColor: COLORS.secondary,
    height: 40,
    paddingLeft: 15,
    width: '90%',
    color: COLORS.primary,
    marginRight: 15,
    ...FONTS.h2_semiBold,
  },
  btn: {
    ...SHADOW,
    backgroundColor: COLORS.accent,
    height: 42,
    width: 42,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;
