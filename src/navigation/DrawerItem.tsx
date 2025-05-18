import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from './styled';

export const DrawerItem = ({
  label,
  isActive,
  onPress,
}: {
  label: string;
  isActive: boolean;
  onPress?: () => void;
}) => {
  return (
    <View style={[styles.drawerItem, isActive ? styles.activeDrawerItem : {}]}>
      <Pressable onPress={onPress}>
        <Text
          style={[
            styles.drawerItemText,
            isActive ? styles.activeItemText : {},
          ]}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
};
