import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList, Modal, Button } from 'react-native';

const natureDestinations = [
  { id: '1', name: 'Yellowstone National Park', uri: 'https://cdn.britannica.com/97/122097-050-B89080F4/Morning-Glory-Pool-Upper-Geyser-Basin-Wyoming.jpg', description: 'Explore geysers, waterfalls, and diverse wildlife in this iconic national park.' },
  { id: '2', name: 'Great Barrier Reef', uri: 'https://www.fitzroyisland.com/wp-content/uploads/2017/05/Best-Place-To-See-The-Great-Barrier-Reef.png', description: 'Dive into the world’s largest coral reef system, teeming with marine life.' },
  { id: '3', name: 'Amazon Rainforest', uri: 'https://images.squarespace-cdn.com/content/v1/54ac9e94e4b0c9d38e248bf6/1569205163203-391L6J3NESJJS0IPDOWT/rainforest', description: 'Experience the vast biodiversity of the world’s largest tropical rainforest.' },
  { id: '4', name: 'Mount Everest', uri: 'https://cdn.mos.cms.futurecdn.net/D9bzCVeZLHQnZ6bUWvAkrW-1200-80.jpg', description: 'Challenge yourself with the world’s highest peak, offering breathtaking views and a unique adventure.' },
  { id: '5', name: 'Galápagos Islands', uri: 'https://www.travelandleisure.com/thmb/WzL019sDotA4SIo4bacRrE4j_N0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/galapagos-islands-ecuador-GALAPA1104-d013219debf14369ab5039a4eafb496e.jpg', description: 'Discover the unique wildlife and volcanic landscapes of this isolated archipelago.' },
  { id: '6', name: 'Serengeti National Park', uri: 'https://www.serengeti.com/assets/img/bush-walk-serengeti-national-park.jpg', description: 'Witness the incredible wildlife migration in this iconic African savannah.' },
  { id: '7', name: 'Banff National Park', uri: 'https://assets.vogue.com/photos/65c4c09bbb939fbbf042091c/master/w_2560%2Cc_limit/GettyImages-843431360.jpg', description: 'Explore stunning turquoise lakes, rugged mountains, and abundant wildlife in Canada’s oldest national park.' },
  { id: '8', name: 'Icelandic Glaciers', uri: 'https://www.glacierguides.is/media/2940/m-katla-ice-cave-and-volcano-hike.jpg?anchor=center&mode=crop&width=666&height=446&rnd=133249920700000000', description: 'Experience the majestic glaciers and ice caves in the land of fire and ice.' },
];

const Home = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedDescription, setSelectedDescription] = useState('');
  const [infoModalVisible, setInfoModalVisible] = useState(false);
  const [infoContent, setInfoContent] = useState('');

  const openImageModal = (uri, description) => {
    setSelectedImage(uri);
    setSelectedDescription(description);
    setModalVisible(true);
  };

  const closeImageModal = () => {
    setModalVisible(false);
    setSelectedImage(null);
    setSelectedDescription('');
  };

  const openInfoModal = (content) => {
    setInfoContent(content);
    setInfoModalVisible(true);
  };

  const closeInfoModal = () => {
    setInfoModalVisible(false);
    setInfoContent('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.heroSection}>
        <Text style={styles.heroTitle}>Nature's Pathways</Text>
        <Image 
          source={{ uri: 'https://images.stockcake.com/public/b/0/3/b03a7439-3d07-4087-be1d-a262bc390666_medium/planting-young-trees-stockcake.jpg' }} 
          style={styles.heroImage} 
          accessibilityLabel="Scenic view of planting young trees"
        />
        <Text style={styles.heroSubtitle}>
          Discover the serenity and beauty of the natural world around us.
        </Text>
        <TouchableOpacity style={styles.ctaButton} onPress={() => alert('Explore More')}>
          <Text style={styles.ctaButtonText}>Explore More</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.aboutSection}>
        <Text style={styles.sectionTitle}>About Nature</Text>
        <Text style={styles.sectionText}>
          Nature encompasses the physical world and its phenomena, including flora, fauna, landscapes, and other features and products of the Earth. It excludes human creations and is essential for our survival and well-being.
        </Text>
        <Text style={styles.sectionText}>
          Engaging with nature can reduce stress, improve mood, and boost overall health. From hiking and bird watching to gardening and beachcombing, nature offers countless ways to enhance your quality of life.
        </Text>
      </View>

      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Featured Nature Destinations</Text>
        <FlatList
          data={natureDestinations}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.destination}
              onPress={() => openImageModal(item.uri, item.description)}
              accessibilityLabel={`View details for ${item.name}`}
            >
              <Image source={{ uri: item.uri }} style={styles.destinationImage} />
              <Text style={styles.destinationName}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={styles.tipsSection}>
        <Text style={styles.sectionTitle}>Nature Tips</Text>
        <Text style={styles.tipsText}>- Always carry enough water and snacks during hikes.</Text>
        <Text style={styles.tipsText}>- Respect wildlife and observe from a distance.</Text>
        <Text style={styles.tipsText}>- Follow the Leave No Trace principles to protect nature.</Text>
        <Text style={styles.tipsText}>- Engage in activities like bird watching or stargazing for a deeper connection with nature.</Text>
      </View>

      <View style={styles.conservationSection}>
        <Text style={styles.sectionTitle}>Conservation Efforts</Text>
        <Text style={styles.sectionText}>
          Conservation is crucial for maintaining biodiversity and ensuring that natural habitats remain intact. Efforts include protecting endangered species, restoring damaged ecosystems, and promoting sustainable practices.
        </Text>
        <TouchableOpacity style={styles.ctaButton} onPress={() => openInfoModal('Conservation is vital for sustaining biodiversity and safeguarding natural habitats. It includes efforts to protect endangered species, restore degraded ecosystems, and implement sustainable practices. Additionally, conservation involves raising awareness, advocating for environmental policies, and engaging communities in preserving the planet. Through collective action and education, we can foster a balanced ecosystem and ensure the health of our environment for future generations.')}>
          <Text style={styles.ctaButtonText}>Learn More</Text>
        </TouchableOpacity>
      </View>

      
      {selectedImage && (
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={closeImageModal}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Image source={{ uri: selectedImage }} style={styles.modalImage} />
              <Text style={styles.modalDescription}>{selectedDescription}</Text>
              <Button title="Close" onPress={closeImageModal} color="#228b22" />
            </View>
          </View>
        </Modal>
      )}

      
      {infoContent && (
        <Modal
          visible={infoModalVisible}
          transparent={true}
          animationType="fade"
          onRequestClose={closeInfoModal}
        >
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Text style={styles.infoText}>{infoContent}</Text>
              <Button title="Close" onPress={closeInfoModal} color="#228b22" />
            </View>
          </View>
        </Modal>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f0f8ff',
  },
  heroSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  heroTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#228b22',
    marginBottom: 10,
    textAlign: 'center',
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 12,
    marginBottom: 10,
  },
  heroSubtitle: {
    fontSize: 18,
    color: '#555',
    textAlign: 'center',
    marginBottom: 15,
  },
  ctaButton: {
    backgroundColor: '#228b22',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  ctaButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  aboutSection: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#e6f9f6',
    borderRadius: 8,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#228b22',
    marginBottom: 10,
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 10,
  },
  featuredSection: {
    marginBottom: 20,
  },
  destination: {
    marginRight: 15,
    alignItems: 'center',
  },
  destinationImage: {
    width: 150,
    height: 100,
    borderRadius: 8,
  },
  destinationName: {
    marginTop: 5,
    fontSize: 14,
    color: '#333',
    textAlign: 'center',
  },
  tipsSection: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#eaf6e4',
    borderRadius: 8,
  },
  tipsText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    marginBottom: 10,
  },
  conservationSection: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#eaf6e4',
    borderRadius: 8,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalImage: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalDescription: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'center',
    marginBottom: 15,
  },
  infoText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 24,
    textAlign: 'center',
  },
});

export default Home;
