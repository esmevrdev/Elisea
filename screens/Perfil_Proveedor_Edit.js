// screens/Perfil_Proveedor_Edit.js
import { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

const MAX_FOTOS = 5;

export default function Perfil_Proveedor_Edit() {
  const [fotos, setFotos] = useState(0);
  const [titulo, setTitulo] = useState('');
  const [tipo, setTipo] = useState('');
  const [eventos, setEventos] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [precio, setPrecio] = useState('');
  const [horarios, setHorarios] = useState('');
  const [mostrarHorarios, setMostrarHorarios] = useState(false);
  const [info, setInfo] = useState('');

  const handleAddFoto = () => {
    if (fotos >= MAX_FOTOS) return Alert.alert('Límite', 'Máximo 5 fotos.');
    setFotos((n) => n + 1);
  };

  const handleCancelar = () => Alert.alert('Cancelar', 'Se descartarán los cambios.');
  const handlePublicar = () => Alert.alert('Éxito', 'Publicación creada localmente ✨');

  return (
    <ScrollView style={styles.wrapper} contentContainerStyle={{ paddingBottom: 36 }}>
      {/* BARRA SUPERIOR (morado) */}


      {/* TÍTULO DE SECCIÓN */}

      <View style={styles.sectionTitleRow}>
        <TouchableOpacity style={styles.backCircle}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.sectionTitle}>Más información</Text>
      </View>


      {/* CUADRO PARA FOTOS */}
      <View style={styles.card}>
        <TouchableOpacity style={styles.fotoBox} onPress={handleAddFoto}>
          <Text style={styles.fotoPlus}>＋</Text>
        </TouchableOpacity>
        <Text style={styles.fotoHint}>
          Añade hasta {MAX_FOTOS} fotos {fotos ? `(${fotos})` : ''}
        </Text>
      </View>

      {/* CAMPOS */}
      <Field label="Título">
        <Input placeholder="Título" value={titulo} onChangeText={setTitulo} />
      </Field>

      <Field label="Tipo">
        <Input placeholder="Tipo" value={tipo} onChangeText={setTipo} />
      </Field>

      <Field label="Eventos">
        <Input placeholder="Eventos" value={eventos} onChangeText={setEventos} />
      </Field>

      <Field label="Ubicación">
        <Input placeholder="Ubicación" value={ubicacion} onChangeText={setUbicacion} />
      </Field>

      <Field label="Precio estándar">
        <Input
          placeholder="$100-$300"
          value={precio}
          onChangeText={setPrecio}
          keyboardType="numeric"
        />
      </Field>

      <Field label="Horarios">
        <View style={styles.inputWrap}>
          <TextInput
            placeholder="Horarios"
            value={horarios}
            onChangeText={setHorarios}
            secureTextEntry={!mostrarHorarios}
            placeholderTextColor="rgba(0,0,0,0.4)"
            style={[styles.input, { flex: 1 }]}
          />
          <TouchableOpacity onPress={() => setMostrarHorarios(!mostrarHorarios)}>
            <Text style={styles.eye}>{mostrarHorarios ? '👁️' : '🙈'}</Text>
          </TouchableOpacity>
        </View>
      </Field>

      <Field label="Información general">
        <Input
          placeholder="Información"
          value={info}
          onChangeText={setInfo}
          multiline
          style={{ height: 95, textAlignVertical: 'top' }}
        />
      </Field>

      {/* BOTONES */}
      <View style={styles.btnRow}>
        <TouchableOpacity style={[styles.btn, styles.btnGhost]} onPress={handleCancelar}>
          <Text style={[styles.btnText, styles.btnGhostText]}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.btnPrimary]} onPress={handlePublicar}>
          <Text style={[styles.btnText, styles.btnPrimaryText]}>Publicar</Text>
        </TouchableOpacity>
      </View>

      {/* (Opcional) Barra inferior simulada para que se vea idéntico al mock */}
    </ScrollView>
  );
}

/** ---------- Subcomponentes ---------- */

function Field({ label, children, right }) {
  return (
    <View style={styles.field}>
      <View style={styles.fieldHeader}>
        <Text style={styles.fieldLabel}>{label}</Text>
        {right || null}
      </View>
      {children}
    </View>
  );
}

function Input(props) {
  return (
    <View style={styles.inputWrap}>
      <TextInput
        placeholderTextColor="rgba(0,0,0,0.4)"
        {...props}
        style={[styles.input, props.style]}
      />
    </View>
  );
}

function Eye({ onPress, open }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.eye}>{open ? '👁️' : '🙈'}</Text>
    </TouchableOpacity>
  );
}

/** ---------- Estilos ---------- */

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: '#f8f6fa' },

  /* Top bar morada con buscador */
  topbar: {
    height: 56,
    backgroundColor: '#3b004f',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    gap: 10,
  },
  logo: { color: '#ffffff', fontSize: 18, fontWeight: '700' },
  searchWrap: {
    flex: 1,
    height: 32,
    borderRadius: 10,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  search: { color: '#fff', fontSize: 14 },
  menu: { color: '#fff', fontSize: 20 },

  /* Título de sección */
  sectionTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  bullet: { fontSize: 18, color: '#3b004f' },
  sectionTitle: { color: '#3b004f', fontWeight: '700', fontSize: 16 },

  /* Cuadro de foto */
  card: { paddingHorizontal: 20, paddingTop: 12 },
  fotoBox: {
    width: 96,
    height: 96,
    borderRadius: 14,
    backgroundColor: '#efe7f3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fotoPlus: { fontSize: 28, color: '#3b004f' },
  fotoHint: { marginTop: 10, color: '#7b6a86' },

  /* Campos */
  field: { paddingHorizontal: 20, marginTop: 16 },
  fieldHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  fieldLabel: { color: '#3b004f', fontWeight: '600' },

  inputWrap: {
    height: 46,
    backgroundColor: '#efe7f3',
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  input: {
    fontSize: 16,
    color: '#3b004f',
  },
  eye: {
    fontSize: 18,
    color: '#3b004f',
    marginLeft: 8,
  },


  /* Botones */
  btnRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 24,
    marginBottom: 20,
  },
  btn: {
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 22,
    borderWidth: 1,
  },
  btnGhost: { borderColor: '#3b004f', backgroundColor: 'transparent' },
  btnGhostText: { color: '#3b004f' },
  btnPrimary: { backgroundColor: '#3b004f', borderColor: '#3b004f' },
  btnPrimaryText: { color: 'white' },
  btnText: { fontWeight: '600' },

  /* Tab bar (decorativa para que se vea como el mock) */
  tabbar: {
    height: 56,
    backgroundColor: '#3b004f',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginHorizontal: 8,
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tabIcon: { color: '#c9b4d1', fontSize: 18 },
  tabActive: { color: '#ffffff' },

backCircle: {
  width: 25,
  height: 25,
  borderRadius: 14,
  borderWidth: 1.8,
  borderColor: '#6a1b9a', 
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 4,
  marginTop: 2, 
},
backArrow: {
  color: '#6a1b9a',
  fontSize: 14,
  fontWeight: '700',
  marginBottom: 5, 
},


});
