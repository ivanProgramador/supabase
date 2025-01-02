import { useAuth } from "@/src/context/context";
import { supabase } from "@/src/lib/supabase";
import { View, Text, StyleSheet, Button, Alert } from "react-native";

export default function Profile() {
  const { setAuth } = useAuth();
  setAuth(null);

  async function handleSignout() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      Alert.alert("Erro ao sair da conta");
      return;
    }
  }

  return (
    <View style={styles.container}>
      <Text>Pagina Perfil</Text>
      <Button title="Deslogar" onPress={handleSignout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
