import React, {FC} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {SharedValue} from 'react-native-reanimated';
import {useRoute} from '@react-navigation/native';

export const Header: FC<{active: SharedValue<boolean>}> = ({active}) => {
  const route = useRoute();
  return (
    <View style={styles.headerWrapper}>
      <TouchableOpacity
        onPress={() => {
          active.value = true;
        }}
        style={styles.menuButton}>
        <Icon name="menu" size={24} color="#000" />
      </TouchableOpacity>

      <Text style={{fontSize: 18}}>{route.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  menuButton: {
    marginLeft: 15,
  },
  headerWrapper: {
    flexDirection: 'row',
    gap: 14,
    paddingHorizontal: 8,
    paddingVertical: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      android: {
        elevation: 5,
      },
    }),
    backgroundColor: '#fff',
  },
});
