import React from 'react';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {DrawerMenu} from './DrawerMenu';
import {Overlay} from './Overlay';
import {Header} from './Header';
import {Dimensions} from 'react-native';

export const withDrawer = (Component: React.FC) => () => {
  const active = useSharedValue(true);
  const progress = useDerivedValue(() => withTiming(active.value ? 1 : 0));
  const width = Dimensions.get?.('window').width;

  const animatedStyle = useAnimatedStyle(() => {
    const rotateZ = interpolate(
      progress.value,
      [0, 1],
      [0, -4],
      Extrapolation.CLAMP,
    );

    return {
      transform: [
        {translateY: active.value ? withTiming(width * 0.2) : withTiming(0)},
        {
          translateX: active.value ? withTiming(width * 0.6) : withTiming(0),
        },
        {
          rotateZ: `${rotateZ}deg`,
        },
      ],
      borderRadius: active.value ? withTiming(20) : withTiming(0),
    };
  });

  return (
    <>
      <DrawerMenu active={active} />

      <Animated.View
        style={[
          {flex: 1, position: 'relative', backgroundColor: '#fff'},
          animatedStyle,
        ]}>
        <Header active={active} />
        <Component />
        <Overlay active={active} />
      </Animated.View>
    </>
  );
};
