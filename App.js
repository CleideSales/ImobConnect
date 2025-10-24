import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet, Modal } from "react-native";
import FiltroModal from "./components/FiltroModal";
import ImovelCard from "./components/ImovelCard";

const imoveisMock = [
  {
    id: '1',
    titulo: 'Casa para alugar / 2 quartos',
    localizacao: 'Rua do Anil',
    valor: 500,
    contato: '(98) 97776-4000',
    foto: require('./assets/casa1.jpg'),
  },
  {
    id: '2',
    titulo: 'Casa para vender / 3 quartos',
    localizacao: 'Rua do Sol',
    valor: 5000.00,
    contato: '(98) 97066-9999',
    foto: require('./assets/casa2.jpg'),
  },
  {
    id: '3',
    titulo: 'Casa para alugar / 1 quarto',
    localizacao: 'Balão',
    valor: 400,
    contato: '(98) 97321-1111',
    foto: require('./assets/casa3.jpg'),
  },
  {
    id: '4',
    titulo: 'Casa para vender / 4 quartos',
    localizacao: 'Avenida Coelho Neto',
    valor: 20000,
    contato: '(98) 92223-2222',
    foto: require('./assets/casa4.jpg'),
  },
  {
    id: '5',
    titulo: 'Casa para alugar / 3 quartos',
    localizacao: 'centro',
    valor: 700,
    contato: '(98) 99999-4444',
    foto: require("./assets/casa5.jpg"),
  },
];

export default function App() {
  const [busca, setBusca] = useState("");
  const [mostrarFiltro, setMostrarFiltro] = useState(false);
  const [quartosFiltro, setQuartosFiltro] = useState("");
  const [valorMin, setValorMin] = useState("");
  const [valorMax, setValorMax] = useState("");
  const [tipoFiltro, setTipoFiltro] = useState("");

  const limparFiltros = () => {
    setQuartosFiltro("");
    setValorMin("");
    setValorMax("");
    setTipoFiltro("");
  };

  const imoveisFiltrados = imoveisMock.filter(i => {
    const buscaLower = busca.toLowerCase();
    const buscaMatch = i.titulo.toLowerCase().includes(buscaLower) || i.localizacao.toLowerCase().includes(buscaLower);
    const tipoMatch = tipoFiltro === "" || (tipoFiltro === "Alugar" && i.titulo.toLowerCase().includes("alugar")) || (tipoFiltro === "Comprar" && i.titulo.toLowerCase().includes("vender"));
    const quartosMatch = quartosFiltro === "" || (quartosFiltro === "4+" ? (i.titulo.toLowerCase().includes("4 quartos") || i.titulo.toLowerCase().includes("mais de 4 quartos")) : i.titulo.includes(`${quartosFiltro} quarto`));
    const valorMinMatch = valorMin === "" || i.valor >= Number(valorMin);
    const valorMaxMatch = valorMax === "" || i.valor <= Number(valorMax);
    return buscaMatch && tipoMatch && quartosMatch && valorMinMatch && valorMaxMatch;
  });

  return (
    <View style={styles.container}>
      <Image source={require("./assets/logo.png")} style={{ width: 180, height: 50, alignSelf: "center" }} />
      <Text style={styles.logo}>ImobiConect</Text>
      <View style={styles.searchRow}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar bairro, valor, tipo..."
          value={busca}
          onChangeText={setBusca}
        />
        <TouchableOpacity style={styles.btnFiltrar} onPress={() => setMostrarFiltro(true)}>
          <Text style={styles.btnFiltrarTexto}>Filtrar</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.listaImoveis}>
        {imoveisFiltrados.map(imovel => (<ImovelCard key={imovel.id} imovel={imovel} />))}
      </ScrollView>
      <Modal
        visible={mostrarFiltro}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setMostrarFiltro(false)}
      >
        <FiltroModal
          visible={mostrarFiltro}
          onClose={() => setMostrarFiltro(false)}
          quartosFiltro={quartosFiltro}
          setQuartosFiltro={setQuartosFiltro}
          valorMin={valorMin}
          setValorMin={setValorMin}
          valorMax={valorMax}
          setValorMax={setValorMax}
          tipoFiltro={tipoFiltro}
          setTipoFiltro={setTipoFiltro}
          limparFiltros={limparFiltros}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, 
  backgroundColor: "#ecece5", 
  paddingTop: 48, 
  paddingHorizontal: 20 
},
  logo: { fontSize: 26, 
    fontWeight: "700", 
    textAlign: "center", 
    marginBottom: 0, 
    marginTop: 0 
  },
  searchRow: { flexDirection: "row", 
    marginBottom: 16 
  },
  searchInput: { flex: 1, 
    backgroundColor: "#fff", 
    borderRadius: 18, 
    paddingHorizontal: 18, 
    fontSize: 16, 
    height: 40, 
    marginRight: 12 
  },
  btnFiltrar: 
  { backgroundColor: "#222", 
    borderRadius: 18, 
    justifyContent: "center", 
    alignItems: "center", 
    paddingHorizontal: 18 
  },
  btnFiltrarTexto: 
  { color: "#fff", 
    fontWeight: "bold", 
    fontSize: 16 
  },
  listaImoveis: 
  { flex: 1 
  },
});
