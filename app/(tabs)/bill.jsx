import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Alert, TextInput, ScrollView } from 'react-native';

const Bill = () => {
  
  const [isEditing, setIsEditing] = useState(false);
  const [billDetails, setBillDetails] = useState({
    name: "Nature Conservation Service",
    date: "September 16, 2024",
    dueDate: "September 30, 2024",
    amount: "$75.00",
    description: "Monthly subscription fee for nature conservation and eco-friendly initiatives.",
    paymentMethods: {
      gcash: "https://example.com/gcash",
      paypal: "https://www.paypal.com/paypalme/yourusername",
      bdo: "https://example.com/bdo",
      paymaya: "https://example.com/paymaya",
    },
    supportEmail: "support@natureconserve.com"
  });

  const handlePayment = (method) => {
    const url = billDetails.paymentMethods[method];
    if (url) {
      Linking.openURL(url).catch(() => {
        Alert.alert("Error", "Unable to open the payment method.");
      });
    } else {
      Alert.alert("Error", "Invalid payment method.");
    }
  };

  const handleContactSupport = () => {
    Linking.openURL(`mailto:${billDetails.supportEmail}`);
  };

  const handleSave = () => {
    
    Alert.alert('Bill Updated', 'Your bill details have been updated.');
    setIsEditing(false);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Billing Statement</Text>
      
      <View style={styles.section}>
        <Text style={styles.label}>Service:</Text>
        <Text style={styles.value}>{billDetails.name}</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.label}>Date:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={billDetails.date}
            onChangeText={(text) => setBillDetails({ ...billDetails, date: text })}
          />
        ) : (
          <Text style={styles.value}>{billDetails.date}</Text>
        )}
      </View>
      
      <View style={styles.section}>
        <Text style={styles.label}>Due Date:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={billDetails.dueDate}
            onChangeText={(text) => setBillDetails({ ...billDetails, dueDate: text })}
          />
        ) : (
          <Text style={styles.value}>{billDetails.dueDate}</Text>
        )}
      </View>
      
      <View style={styles.section}>
        <Text style={styles.label}>Amount Due:</Text>
        {isEditing ? (
          <TextInput
            style={styles.input}
            value={billDetails.amount}
            onChangeText={(text) => setBillDetails({ ...billDetails, amount: text })}
          />
        ) : (
          <Text style={styles.amount}>{billDetails.amount}</Text>
        )}
      </View>
      
      <View style={styles.section}>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.description}>{billDetails.description}</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.label}>Payment Method:</Text>
        <View style={styles.paymentOptions}>
          <TouchableOpacity style={styles.paymentButton} onPress={() => handlePayment('gcash')}>
            <Text style={styles.paymentText}>Pay with GCash</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentButton} onPress={() => handlePayment('paypal')}>
            <Text style={styles.paymentText}>Pay with PayPal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentButton} onPress={() => handlePayment('bdo')}>
            <Text style={styles.paymentText}>Pay with BDO</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.paymentButton} onPress={() => handlePayment('paymaya')}>
            <Text style={styles.paymentText}>Pay with PayMaya</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.summary}>
        <Text style={styles.summaryTitle}>Summary</Text>
        <Text style={styles.summaryText}>Please ensure the payment is made before the due date to avoid any late fees.</Text>
        <Text style={styles.summaryText}>For any queries, contact us at <Text style={styles.link} onPress={handleContactSupport}>{billDetails.supportEmail}</Text></Text>
      </View>
      
      <TouchableOpacity style={styles.button} onPress={() => setIsEditing(!isEditing)}>
        <Text style={styles.buttonText}>{isEditing ? 'Save Changes' : 'Edit Bill'}</Text>
      </TouchableOpacity>
      
      {isEditing && (
        <TouchableOpacity style={styles.button} onPress={handleSave}>
          <Text style={styles.buttonText}>Save Changes</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2e8b57',
    textAlign: 'center',
  },
  section: {
    marginBottom: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4682b4',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#000000',
  },
  amount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ff4500',
  },
  description: {
    fontSize: 16,
    color: '#6a5acd',
    marginBottom: 10,
  },
  input: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 5,
    color: '#333',
  },
  paymentOptions: {
    flexDirection: 'column',
    marginTop: 10,
  },
  paymentButton: {
    marginBottom: 10,
    paddingVertical: 10,
    backgroundColor: '#2e8b57',
    borderRadius: 5,
    alignItems: 'center',
  },
  paymentText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  summary: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e8b57',
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 5,
  },
  link: {
    color: '#1e90ff',
    textDecorationLine: 'underline',
  },
  button: {
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2e8b57',
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default Bill;
