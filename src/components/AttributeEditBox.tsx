import React from 'react';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-paper';

interface Props {
  type: string;
  title: string;
  text: string;
  onDelete: () => void;
  onChangeValue: (text: string) => void;
}

const AttributeEditBox = ({
  type,
  title,
  text,
  onDelete,
  onChangeValue,
}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        label={title}
        mode="outlined"
        value={text}
        onChangeText={text => onChangeValue(text)}
      />
      <TouchableOpacity style={styles.typeButton}>
        <Text style={styles.type}>{type}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imageButton} onPress={onDelete}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={require('../assets/images/delete.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
export default AttributeEditBox;

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 5,
    alignItems: 'center',
  },
  image: {
    width: 24,
    height: 24,
  },
  imageButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  type: {
    color: '#238CFD',
    fontSize: 24,
  },
  typeButton: {
    marginTop: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 5,
    marginHorizontal: 5,
    // elevation: 1,
  },
  textInput: {flex: 1},
});
