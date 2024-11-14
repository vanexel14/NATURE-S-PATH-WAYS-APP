import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, Linking, Alert } from 'react-native';

const initialUserProfile = {
  name: "Van Exel J. Mission",
  membershipType: "Nature Advocate",
  subscriptionStatus: "Active",
  startDate: "February 14, 2023",
  email: "van.exel@example.com",
  phone: "+1234567890",
  profileImage: "https://lh3.googleusercontent.com/a/ACg8ocIrApB90c403UbnUzSQtzfSC04z7aZKa8BOk331qa92eSPtDOw=s83-c-mo",
};

const natureSubscriptions = [
  {
    title: "Rainforest Conservation",
    description: "Join us in preserving the vital ecosystems of the Amazon rainforest, a critical habitat for countless species and a key player in global climate regulation.",
    image: "https://static.wixstatic.com/media/d591f0_8a621b09e6a74db5bf4d1bb1f5630fd2~mv2.jpg/v1/fill/w_640,h_514,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d591f0_8a621b09e6a74db5bf4d1bb1f5630fd2~mv2.jpg",
  },
  {
    title: "Coral Reef Preservation",
    description: "Contribute to the revival of vibrant coral reefs, essential to marine biodiversity and coastal protection. Your support helps restore these underwater ecosystems and safeguard their future.",
    image: "https://media.fisheries.noaa.gov/dam-migration/coraloutplanting_credit_reefresiliencenetwork.jpg",
  },
  {
    title: "Arctic Wildlife Protection",
    description: "Join the fight to safeguard the Arctic's unique wildlife and their fragile habitats. Your support helps protect endangered species and combat climate change impacts in this critical region.",
    image: "https://i.ytimg.com/vi/_Xz_5ZH_euc/maxresdefault.jpg",
  },
];

const ProfileDetail = ({ label, value, isEditing, onChangeText, onPress, keyboardType }) => (
  <View style={styles.infoContainer}>
    <Text style={styles.label}>{label}:</Text>
    {isEditing ? (
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    ) : (
      <Text style={styles.value} onPress={onPress}>{value}</Text>
    )}
  </View>
);

const SubscriptionHistory = ({ subscriptions, onBackPress }) => (
  <ScrollView style={styles.subscriptionContainer}>
    <TouchableOpacity style={styles.actionButton} onPress={onBackPress}>
      <Text style={styles.actionButtonText}>Back to Profile</Text>
    </TouchableOpacity>
    <Text style={styles.title}>Subscription History</Text>
    {subscriptions.map((sub, index) => (
      <View key={index} style={styles.subscriptionItem}>
        <Image source={{ uri: sub.image }} style={styles.subscriptionImage} />
        <Text style={styles.subscriptionTitle}>{sub.title}</Text>
        <Text style={styles.subscriptionDescription}>{sub.description}</Text>
      </View>
    ))}
  </ScrollView>
);

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [viewingHistory, setViewingHistory] = useState(false);
  const [profile, setProfile] = useState(initialUserProfile);

  const handleEmailPress = () => {
    Linking.openURL(`mailto:${profile.email}`);
  };

  const handlePhonePress = () => {
    Linking.openURL(`tel:${profile.phone}`);
  };

  const handleSave = () => {
    Alert.alert('Profile Updated', 'Your profile information has been updated.');
    setIsEditing(false);
  };

  return (
    <ScrollView style={styles.container}>
      {viewingHistory ? (
        <SubscriptionHistory
          subscriptions={natureSubscriptions}
          onBackPress={() => setViewingHistory(false)}
        />
      ) : (
        <>
          <Image source={{ uri: profile.profileImage }} style={styles.profileImage} />

          <View style={styles.section}>
            <Text style={styles.title}>Profile Information</Text>

            <ProfileDetail
              label="Name"
              value={profile.name}
              isEditing={isEditing}
              onChangeText={(text) => setProfile({ ...profile, name: text })}
            />

            <ProfileDetail
              label="Membership Type"
              value={profile.membershipType}
              isEditing={isEditing}
              onChangeText={(text) => setProfile({ ...profile, membershipType: text })}
            />

            <ProfileDetail
              label="Subscription Status"
              value={profile.subscriptionStatus}
              isEditing={isEditing}
              onChangeText={(text) => setProfile({ ...profile, subscriptionStatus: text })}
            />

            <ProfileDetail
              label="Start Date"
              value={profile.startDate}
              isEditing={isEditing}
              onChangeText={(text) => setProfile({ ...profile, startDate: text })}
            />

            <ProfileDetail
              label="Email"
              value={profile.email}
              isEditing={isEditing}
              onChangeText={(text) => setProfile({ ...profile, email: text })}
              onPress={handleEmailPress}
              keyboardType="email-address"
            />

            <ProfileDetail
              label="Phone"
              value={profile.phone}
              isEditing={isEditing}
              onChangeText={(text) => setProfile({ ...profile, phone: text })}
              onPress={handlePhonePress}
              keyboardType="phone-pad"
            />
          </View>

          <View style={styles.actionContainer}>
            {isEditing ? (
              <>
                <TouchableOpacity style={styles.actionButton} onPress={handleSave}>
                  <Text style={styles.actionButtonText}>Save Changes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={() => setIsEditing(false)}>
                  <Text style={styles.actionButtonText}>Cancel</Text>
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity style={styles.actionButton} onPress={() => setIsEditing(true)}>
                  <Text style={styles.actionButtonText}>Edit Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.actionButton} onPress={() => setViewingHistory(true)}>
                  <Text style={styles.actionButtonText}>View Subscription History</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </>
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
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#2e8b57',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e8b57',
    marginBottom: 15,
    textAlign: 'center',
  },
  section: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    marginBottom: 20,
  },
  infoContainer: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4682b4',
    marginBottom: 5,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    fontSize: 16,
    color: '#333',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 5,
  },
  actionContainer: {
    alignItems: 'center',
  },
  actionButton: {
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#2e8b57',
    borderRadius: 5,
    alignItems: 'center',
    width: '80%',
  },
  actionButtonText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
  subscriptionContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#ffffff',
  },
  subscriptionItem: {
    marginBottom: 20,
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  subscriptionImage: {
    width: '100%',
    height: 150,
  },
  subscriptionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e8b57',
    padding: 10,
  },
  subscriptionDescription: {
    fontSize: 16,
    color: '#333',
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

export default Profile;
