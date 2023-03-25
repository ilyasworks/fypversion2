import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

const Notification = ({ message }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.message}>show your fee chall show your fee challan show your fee chall show your fee challan</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.message}>show your fee chall show your fee challan show your fee chall show your fee challan</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.message}>show your fee chall show your fee challan show your fee chall show your fee challan</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.message}>show your fee chall show your fee challan show your fee chall show your fee challan</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.message}>show your fee chall show your fee challan show your fee chall show your fee challan</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.message}>show your fee chall show your fee challan show your fee chall show your fee challan</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.message}>show your fee chall show your fee challan show your fee chall show your fee challan</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.message}>show your fee chall show your fee challan show your fee chall show your fee challan</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.message}>show your fee chall show your fee challan show your fee chall show your fee challan</Text>
      </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5,
    padding: 16,
    margin: 16,
  },
  message: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Notification;
