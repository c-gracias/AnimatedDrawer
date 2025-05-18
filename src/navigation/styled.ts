import {StyleSheet} from 'react-native';
import {Platform} from 'react-native';

export const styles = StyleSheet.create({
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
  drawerContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#12122d',
    zIndex: -1,
  },
  contentWrapper: {
    width: '60%',
    flex: 1,
    rowGap: 20,
    alignItems: 'center',
  },
  drawerTitle: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 15,
    textAlign: 'center',
  },
  drawerItem: {
    paddingHorizontal: 24,
    width: '100%',
  },
  activeDrawerItem: {},
  drawerItemText: {
    borderRadius: 8,
    fontSize: 18,
    color: '#fff',
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  activeItemText: {
    color: 'rgb(217,125,103)',
    backgroundColor: 'rgb(56, 38, 47)',
  },
  divider: {
    height: 1,
    width: '80%',
    backgroundColor: 'rgb(81, 81, 99)',
  },
});
