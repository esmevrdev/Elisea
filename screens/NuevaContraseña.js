import { Ionicons } from '@expo/vector-icons'; // 1. Importamos iconos
import { useNavigation } from '@react-navigation/native'; // 2. Importamos navegación
import { useState } from 'react';
import {
  Dimensions,
  Image,
  Modal, // 3. Importamos Modal
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const { width } = Dimensions.get('window');
const CIRCLE_SIZE = width * 1.35;

const HERO_IMAGE = require('../assets/images/img_fiesta.png');

export default function NuevaContrasena() {
  const navigation = useNavigation(); // Hook de navegación
  
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  
  // Estado para controlar la visibilidad del aviso de éxito
  const [showSuccess, setShowSuccess] = useState(false);

  const handleActualizar = () => {
    // Aquí podrías validar que las contraseñas coincidan antes
    if (password !== confirm) {
        alert("Las contraseñas no coinciden");
        return;
    }
    // Si todo está bien, mostramos el modal
    setShowSuccess(true);
  };

  const handleNavigateLogin = () => {
    setShowSuccess(false); // Cerramos el modal
    navigation.reset({
        index: 0,
        routes: [{ name: 'Login' }], // Reseteamos para que no pueda volver atrás
    });
    // O simplemente: navigation.navigate('Login');
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* IMAGEN SUPERIOR */}
        <View style={styles.heroWrap}>
          <View style={styles.heroCircle}>
            <Image source={HERO_IMAGE} style={styles.heroImage} />
          </View>
        </View>

        {/* CONTENIDO */}
        <View style={styles.content}>
          <Text style={styles.title}>Ingresa una nueva contraseña</Text>

          <Text style={styles.subtitle}>
            Crea una nueva contraseña. Debes usar una contraseña que no hayas utilizado anteriormente.
          </Text>

          {/* CONTRASEÑA */}
          <Text style={styles.label}>Contraseña</Text>
          <View style={styles.inputRow}>
            <TextInput
              placeholder="Contraseña"
              placeholderTextColor="rgba(0,0,0,0.25)"
              secureTextEntry={!visible1}
              value={password}
              onChangeText={setPassword}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() => setVisible1((s) => !s)}
              style={styles.lockBtn}
              activeOpacity={0.7}
            >
              <Text style={styles.lockIcon}>{visible1 ? '🔓' : '🔒'}</Text>
            </TouchableOpacity>
          </View>

          {/* CONFIRMAR CONTRASEÑA */}
          <Text style={styles.label}>Confirmar contraseña</Text>
          <View style={styles.inputRow}>
            <TextInput
              placeholder="Contraseña"
              placeholderTextColor="rgba(0,0,0,0.25)"
              secureTextEntry={!visible2}
              value={confirm}
              onChangeText={setConfirm}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() => setVisible2((s) => !s)}
              style={styles.lockBtn}
              activeOpacity={0.7}
            >
              <Text style={styles.lockIcon}>{visible2 ? '🔓' : '🔒'}</Text>
            </TouchableOpacity>
          </View>

          {/* BOTÓN ACTUALIZAR */}
          <TouchableOpacity style={styles.cta} onPress={handleActualizar} activeOpacity={0.9}>
            <Text style={styles.ctaText}>Actualizar contraseña</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* --- MODAL DE ÉXITO (EL POST) --- */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={showSuccess}
        onRequestClose={() => {}} // Bloquea el botón atrás de Android
      >
        <View style={styles.modalOverlay}>
            <TouchableOpacity 
                style={styles.successCard} 
                onPress={handleNavigateLogin}
                activeOpacity={0.9}
            >
                <View style={styles.iconContainer}>
                    <Ionicons name="checkmark-circle" size={80} color="#c78fc0" />
                </View>
                <Text style={styles.successTitle}>¡Contraseña Actualizada!</Text>
                <Text style={styles.successText}>
                    El cambio fue exitoso.{"\n"}Toca aquí para iniciar sesión.
                </Text>
            </TouchableOpacity>
        </View>
      </Modal>
      {/* -------------------------------- */}

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#fff' },
  container: { paddingBottom: 40, backgroundColor: '#fff' },

  heroWrap: {
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  heroCircle: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    overflow: 'hidden',
    marginTop: -CIRCLE_SIZE * 0.35,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },

  content: { paddingHorizontal: 24, paddingTop: 24 },

  title: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 13,
    color: '#444',
    marginBottom: 22,
  },

  label: {
    color: '#b15aa8',
    fontWeight: '700',
    marginBottom: 8,
  },

  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f3e9f3',
    borderRadius: 22,
    height: 44,
    paddingHorizontal: 12,
    borderWidth: 0.8,
    borderColor: '#e0cfe0',
    marginBottom: 18,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#222',
    paddingVertical: 8,
  },
  lockBtn: {
    width: 34,
    height: 34,
    borderRadius: 17,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  lockIcon: { fontSize: 16 },

  cta: {
    alignSelf: 'center',
    backgroundColor: '#c78fc0',
    paddingHorizontal: 28,
    paddingVertical: 10,
    borderRadius: 18,
    marginTop: 8,
    minWidth: 220,
  },
  ctaText: {
    color: '#fff',
    fontWeight: '700',
    textAlign: 'center',
  },

  // --- ESTILOS DEL MODAL (NUEVOS) ---
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)', // Fondo oscuro semitransparente
    justifyContent: 'center',
    alignItems: 'center',
  },
  successCard: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    elevation: 10, // Sombra en Android
    shadowColor: '#000', // Sombra en iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  iconContainer: {
    marginBottom: 15,
  },
  successTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#210535',
    marginBottom: 10,
    textAlign: 'center',
  },
  successText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    lineHeight: 20,
  },
});