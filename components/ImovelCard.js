import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ImovelCard({ imovel }) {
  return (
    <View style={styles.cardImovel}>
      <Image source={imovel.foto} style={styles.fotoImovel} />
      <View style={styles.infoImovel}>
        <Text style={styles.tituloImovel}>{imovel.titulo}</Text>
        <Text style={styles.localizacaoImovel}>Localização: {imovel.localizacao}</Text>
        <Text style={styles.valorImovel}>Valor: R$ {imovel.valor},00</Text>
        <Text style={styles.contatoImovel}>Contato: {imovel.contato}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardImovel: {
    flexDirection: "row",
    backgroundColor: "#f7f7f0",
    borderRadius: 14,
    marginBottom: 12,
    padding: 8,
  },
  fotoImovel: {
    width: 82,
    height: 72,
    borderRadius: 8,
  },
  infoImovel: {
    marginLeft: 10,
    flex: 1,
  },
  tituloImovel: {
    fontWeight: "bold",
    fontSize: 14,
  },
  localizacaoImovel: {
    fontSize: 12,
    color: "#555",
    marginTop: 4,
  },
  valorImovel: {
    fontWeight: "bold",
    color: "#1a6",
    marginTop: 10,
  },
  contatoImovel: {
    fontWeight: "bold",
    marginTop: 2,
  },
});
