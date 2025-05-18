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

export const withDrawer = (Component: React.FC) => () => {
  const active = useSharedValue(false);
  const progress = useDerivedValue(() => withTiming(active.value ? 1 : 0));

  const animatedStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(
      progress.value,
      [0, 1],
      [0, -15],
      Extrapolation.CLAMP,
    );
    return {
      transform: [
        {perspective: 1000},
        {scale: active.value ? withTiming(0.8) : withTiming(1)},
        {
          translateX: active.value ? withTiming(240) : withTiming(0),
        },
        {
          rotateY: `${rotateY}deg`,
        },
      ],
      borderRadius: active.value ? withTiming(20) : withTiming(0),
    };
  });

  return (
    <>
      <DrawerMenu active={active} />

      <Animated.View style={[{flex: 1}, animatedStyle]}>
        <Header active={active} />
        <Component />
      </Animated.View>

      <Overlay active={active} />
    </>
  );
};
