import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../navigation/RootNavigator';

export const useTypedNavigation = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return navigation;
};
