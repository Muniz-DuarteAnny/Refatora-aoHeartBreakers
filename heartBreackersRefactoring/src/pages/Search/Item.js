import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

const Item = ({ item, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={{ flexDirection: 'row', alignItems: 'center' , padding: 6, backgroundColor:'silver', fontSize: 6, marginBottom: 1, marginTop: 1,}}>
        <Image source={{ uri: item.imagemUrl }} style={{ width: 80, height: 80, marginRight: 15, }} />
        <View>
          <Text style={{fontSize: 18,}}>{item.nome}</Text>
          <Text style={{fontSize: 13,}}>{item.codigoProntuario}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
