import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Dimensions, StyleSheet, TouchableOpacity, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function NavigationMenu() {
  const navigation = useNavigation();
  const route = useRoute();

  // Determinar qué icono está activo según la ruta actual
  const getActiveKey = () => {
    const routeName = route.name;
    
    if (routeName === 'HomeTab' || routeName === 'Home') return 'home';
    if (routeName === 'Chat' || routeName === 'Mensajes') return 'chat';
    if (routeName === 'Buscar' || routeName === 'Lupa') return 'search';
    if (routeName === 'Notifications' || routeName === 'Notificaciones') return 'notifications';
    
    return 'home'; // Por defecto
  };

  const active = getActiveKey();

  const icons = [
    { name: 'home-outline', key: 'home', screen: 'HomeTab' },
    { name: 'chatbubble-ellipses-outline', key: 'chat', screen: 'Chat' },
    { name: 'search-outline', key: 'search', screen: 'Buscar' },
    { name: 'notifications-outline', key: 'notifications', screen: 'Notifications' },
  ];

  const handlePress = (icon) => {
    // Si la pantalla es HomeTab, navega dentro del tab navigator
    if (icon.screen === 'HomeTab') {
      navigation.navigate('Home', { screen: 'HomeTab' });
    } else {
      // Para otras pantallas, navega directamente
      navigation.navigate(icon.screen);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        {icons.map((icon) => {
          const isActive = active === icon.key;
          return (
            <TouchableOpacity
              key={icon.key}
              onPress={() => handlePress(icon)}
              style={styles.iconContainer}
            >
              <View style={[styles.iconWrapper, isActive && styles.activeCircle]}>
                <Ionicons
                  name={icon.name}
                  size={26}
                  color={isActive ? '#210535' : '#fff'}
                />
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: width,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  footer: {
    flexDirection: 'row',
    backgroundColor: '#210535',
    width: '100%',
    height: 70,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    paddingHorizontal: 10,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeCircle: {
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
});