import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function FiltroModal({
  visible, onClose, quartosFiltro, setQuartosFiltro,
  valorMin, setValorMin, valorMax, setValorMax,
  tipoFiltro, setTipoFiltro, limparFiltros
}) {
  return (
    <View style={styles.overlayModal}>
      <View style={styles.painelFiltroModal}>
        <TouchableOpacity style={styles.btnFechar} onPress={onClose}>
          <Text style={styles.txtBtnFechar}>×</Text>
        </TouchableOpacity>
        <Text style={styles.painelTitulo}>Quantidade de quartos:</Text>
        <View style={styles.linhaBotao}>
          {["1", "2", "3", "4+"].map(num => (
            <TouchableOpacity
              key={num}
              style={[styles.botaoFiltro, quartosFiltro === num && styles.botaoFiltroAtivo]}
              onPress={() => setQuartosFiltro(num)}
            >
              <Text style={[styles.textoBotaoFiltro, quartosFiltro === num && styles.textoBotaoFiltroAtivo]}>{num}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Text style={styles.painelTitulo}>Valor Mínimo:</Text>
        <TextInput
          style={styles.inputFiltro}
          keyboardType="numeric"
          value={valorMin}
          onChangeText={setValorMin}
          placeholder="R$ 0"
        />
        <Text style={styles.painelTitulo}>Valor Máximo:</Text>
        <TextInput
          style={styles.inputFiltro}
          keyboardType="numeric"
          value={valorMax}
          onChangeText={setValorMax}
          placeholder="R$ 0"
        />
        <Text style={styles.painelTitulo}>Tipo:</Text>
        <View style={styles.linhaBotao}>
          {["Alugar", "Comprar"].map(tipo => (
            <TouchableOpacity
              key={tipo}
              style={[styles.botaoTipo, tipoFiltro === tipo && styles.botaoTipoAtivo]}
              onPress={() => setTipoFiltro(tipo)}
            >
              <Text style={[styles.textoBotaoTipo, tipoFiltro === tipo && styles.textoBotaoTipoAtivo]}>{tipo}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.botoesPainel}>
          <TouchableOpacity
            style={[styles.btnAplicarFiltro, { backgroundColor: "#eee" }]}
            onPress={limparFiltros}
          >
            <Text style={[styles.txtBtnAplicarFiltro, { color: "#444" }]}>Limpar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnAplicarFiltro}
            onPress={onClose}>
            <Text style={styles.txtBtnAplicarFiltro}>Filtrar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlayModal: {
    flex: 1,
    backgroundColor: "#0008",
    justifyContent: "center",
    alignItems: "center",
  },
  painelFiltroModal: {
    width: "90%",
    backgroundColor: "#f6f6ee",
    borderRadius: 16,
    padding: 18,
    alignItems: "stretch",
    position: "relative",
  },
  btnFechar: {
    position: "absolute",
    top: 8,
    right: 14,
    zIndex: 10,
    backgroundColor: "#eee",
    borderRadius: 18,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    elevation: 2,
  },
  txtBtnFechar: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#222",
  },
  painelTitulo: {
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 6,
    fontSize: 14,
  },
  linhaBotao: {
    flexDirection: "row",
    marginBottom: 6,
    justifyContent: "space-between",
  },
  botaoFiltro: {
    backgroundColor: "#fff",
    borderColor: "#999",
    borderWidth: 1.2,
    borderRadius: 18,
    paddingHorizontal: 16,
    paddingVertical: 4,
    marginRight: 8,
    flex: 1,
    alignItems: "center",
  },
  botaoFiltroAtivo: {
    backgroundColor: "#222",
    borderColor: "#222",
  },
  textoBotaoFiltro: {
    color: "#444",
    fontWeight: "600",
    fontSize: 14,
  },
  textoBotaoFiltroAtivo: {
    color: "#fff",
  },
  inputFiltro: {
    backgroundColor: "#fff",
    borderRadius: 18,
    paddingHorizontal: 14,
    height: 32,
    fontSize: 14,
    marginBottom: 12,
  },
  botaoTipo: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 1.2,
    borderColor: "#999",
    marginRight: 10,
    alignItems: "center",
    paddingVertical: 8,
  },
  botaoTipoAtivo: {
    backgroundColor: "#222",
    borderColor: "#222",
  },
  textoBotaoTipo: {
    fontWeight: "600",
    fontSize: 14,
    color: "#444",
  },
  textoBotaoTipoAtivo: {
    color: "#fff",
  },
  botoesPainel: {
    flexDirection: "row",
    marginTop: 12,
    gap: 9,
  },
  btnAplicarFiltro: {
    backgroundColor: "#222",
    borderRadius: 18,
    paddingVertical: 12,
    alignItems: "center",
    flex: 1,
  },
  txtBtnAplicarFiltro: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});
