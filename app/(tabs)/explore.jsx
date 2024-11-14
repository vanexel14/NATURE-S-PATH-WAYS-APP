import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, FlatList, Linking, Modal, Button, Alert } from 'react-native';


const natureActivities = [
  { 
    id: '1', 
    name: 'Hiking Trails', 
    description: 'Explore scenic hiking trails and enjoy breathtaking views. Whether you’re looking for a challenging trek or a leisurely walk, our trails offer something for every skill level.', 
    additionalDescription: 'Discover hidden waterfalls, panoramic vistas, and lush forests along the way. Guides are available to provide insights and ensure a memorable experience.', 
    imageUri: 'https://media.timeout.com/images/105655983/image.jpg' 
  },
  { 
    id: '2', 
    name: 'Wildlife Watching', 
    description: 'Discover diverse wildlife in their natural habitats. From majestic eagles to playful otters, our wildlife watching tours provide opportunities to observe animals in their native environments.', 
    additionalDescription: 'Our expert guides help you spot rare species and understand their behavior. Perfect for nature enthusiasts and photographers alike.', 
    imageUri: 'https://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/11/tanzania-wildlife-og.jpg' 
  },
  { 
    id: '3', 
    name: 'Camping Spots', 
    description: 'Find the best spots for camping and stargazing. Our recommended campsites offer serene settings away from city lights, making them ideal for a peaceful retreat.', 
    additionalDescription: 'Enjoy campfires, marshmallow roasting, and clear night skies full of stars. Some sites offer amenities like picnic tables and nearby hiking trails.', 
    imageUri: 'https://s3-us-west-1.amazonaws.com/metromile-www-assets/wp-content/uploads/2018/07/19205945/The-Top-5-Camping-Spots-in-Northern-California.jpg' 
  },
  { 
    id: '4', 
    name: 'Bird Watching', 
    description: 'Engage in bird watching and spot various bird species. Our bird watching guides will help you identify and learn about different birds in their natural habitat.', 
    additionalDescription: 'Bring your binoculars and enjoy a rewarding experience as you observe colorful and unique species. Educational talks and workshops are also available.', 
    imageUri: 'https://media.wired.com/photos/65318ffb38c7872b2d5b11cb/master/pass/Bird-Watching-Guide-Gear-GettyImages-1288108124.jpg' 
  },
  { 
    id: '5', 
    name: 'Mountain Biking', 
    description: 'Experience adrenaline-pumping mountain biking on rugged trails. Our bike tours cater to all levels, from beginners to experienced riders.', 
    additionalDescription: 'Explore challenging terrains and enjoy the thrill of speed with professional guides ensuring your safety and fun.', 
    imageUri: 'https://www.theproscloset.com/cdn/shop/articles/202105_Moab_Woodson_162.jpg?v=1646843143&width=1800' 
  },
  { 
    id: '6', 
    name: 'Kayaking Adventures', 
    description: 'Paddle through tranquil lakes or adventurous rivers. Our kayaking tours offer breathtaking views and the opportunity to connect with nature on the water.', 
    additionalDescription: 'Whether you’re a novice or an expert, our guides will provide all the necessary equipment and instructions for a safe and enjoyable experience.', 
    imageUri: 'https://hikebiketravel.com/wp-content/uploads/2012/05/Broken-Group-27-of-1.jpg' 
  },
  { 
    id: '7', 
    name: 'Fishing Trips', 
    description: 'Relax and enjoy fishing in some of the best spots. Our fishing trips are designed for both novices and experts, providing all the gear and guidance needed.', 
    additionalDescription: 'From serene lakes to challenging rivers, our trips offer the perfect environment for a day of fishing and relaxation.', 
    imageUri: 'https://cms.travelnoire.com/wp-content/uploads/2022/03/fishing-g29c2e6f81_1280-970x646.jpg' 
  },
  { 
    id: '8', 
    name: 'Cave Exploration', 
    description: 'Discover the underground world through guided cave explorations. Marvel at stunning rock formations and learn about the geology of our region.', 
    additionalDescription: 'Our experienced guides ensure a safe adventure while revealing the fascinating history and science of cave formations.', 
    imageUri: 'https://c1.wallpaperflare.com/preview/245/521/204/portugal-algarve-benagil-caves.jpg' 
  },
  { 
    id: '9', 
    name: 'Scenic Drives', 
    description: 'Take a leisurely drive through picturesque landscapes. Our recommended scenic routes offer stunning views and the chance to experience nature from the comfort of your car.', 
    additionalDescription: 'Stop at designated viewpoints and enjoy photo opportunities while soaking in the natural beauty of the surroundings.', 
    imageUri: 'https://travelprofessionalnews.com/wp-content/uploads/2018/09/travel-agent-news-for-Scenic.jpg' 
  },
  { 
    id: '10', 
    name: 'Star Gazing', 
    description: 'Enjoy the night sky with our star gazing events. Learn about constellations and celestial phenomena with expert astronomers.', 
    additionalDescription: 'Bring a telescope or use ours to get a closer look at the stars, planets, and other celestial objects.', 
    imageUri: 'https://imageio.forbes.com/specials-images/imageserve/6268019e45d9491caf24e08a/Beautiful-starry-night--man-silhouette-with-a-camera-looking-at-the-Milky-Way-galaxy-/960x0.jpg?format=jpg&width=960' 
  },
  { 
    id: '11', 
    name: 'Eco Tours', 
    description: 'Participate in eco tours to learn about local ecosystems and conservation efforts. These tours offer educational insights into the flora and fauna of the area.', 
    additionalDescription: 'Join our knowledgeable guides to explore habitats and learn about sustainable practices to protect the environment.', 
    imageUri: 'https://wallpapers.com/images/hd/eco-tourism-1600-x-1067-wallpaper-fvkkso68mmj9eows.jpg' 
  },
  { 
    id: '12', 
    name: 'Nature Photography', 
    description: 'Capture the beauty of nature with guided photography sessions. Learn tips and techniques from professional photographers to enhance your skills.', 
    additionalDescription: 'Explore diverse landscapes and wildlife while perfecting your photography techniques. Sessions are suitable for all skill levels.', 
    imageUri: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_640.jpg' 
  },
  { 
    id: '13', 
    name: 'Botanical Tours', 
    description: 'Explore local flora with our botanical tours. Learn about various plant species and their roles in the ecosystem from knowledgeable botanists.', 
    additionalDescription: 'Tours include visits to botanical gardens and natural habitats. Ideal for plant enthusiasts and those interested in gardening.', 
    imageUri: 'https://w0.peakpx.com/wallpaper/75/377/HD-wallpaper-botanical-garden-garden.jpg' 
  },
  { 
    id: '14', 
    name: 'Rock Climbing', 
    description: 'Challenge yourself with rock climbing adventures. Our climbing excursions offer routes for beginners to advanced climbers.', 
    additionalDescription: 'Learn climbing techniques and safety measures from certified instructors while enjoying stunning cliffside views.', 
    imageUri: 'https://i.natgeofe.com/n/67d77819-8eed-4e93-a154-ee0d7214d0f4/Trav%20Kalymnos%20GettyImages-535351327b.jpg' 
  },
  { 
    id: '15', 
    name: 'Beachcombing', 
    description: 'Discover marine life and treasures along the shore with our beachcombing activities. Ideal for families and nature lovers.', 
    additionalDescription: 'Explore tide pools, collect shells, and learn about coastal ecosystems with our guided beachcombing tours.', 
    imageUri: 'https://www.harteresearch.org/sites/default/files/styles/node_hero/public/projects/IMG_0917.jpg?itok=cHCiFVDQ' 
  },
];

const Explore = ({ navigation }) => {
  const [selectedActivity, setSelectedActivity] = useState(null);

  const handleLearnMorePress = (activity) => {
    setSelectedActivity(activity);
  };

  const closeModal = () => {
    setSelectedActivity(null);
  };

  const startAdventure = () => {
    
    Alert.alert('Adventure Started', 'Get ready for an amazing experience in nature!');
  };

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.heroSection}>
        <Image
          source={{ uri: 'https://e2k9ube.cloudimg.io/v7/https://edienetlive.s3.eu-west-2.amazonaws.com/wp-content/uploads/sites/2/full_42489.jpg?width=856&height=482&func=crop' }}
          style={styles.heroImage}
        />
        <Text style={styles.heroTitle}>Explore the Wonders of Nature</Text>
        <Text style={styles.heroSubtitle}>
          Dive into outdoor adventures and experience the beauty of the natural world.
        </Text>
        <TouchableOpacity style={styles.ctaButton} onPress={startAdventure}>
          <Text style={styles.ctaButtonText}>Start Your Adventure</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.activitiesSection}>
        <Text style={styles.sectionTitle}>Nature Activities</Text>
        <FlatList
          data={natureActivities}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.activityCard}>
              <Image source={{ uri: item.imageUri }} style={styles.activityImage} />
              <View style={styles.activityInfo}>
                <Text style={styles.activityName}>{item.name}</Text>
                <Text style={styles.activityDescription}>{item.description}</Text>
                <TouchableOpacity style={styles.learnMoreButton} onPress={() => handleLearnMorePress(item)}>
                  <Text style={styles.learnMoreButtonText}>Learn More</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
      </View>

      
      <View style={styles.mapSection}>
        <Text style={styles.sectionTitle}>Popular Nature Spots</Text>
        <TouchableOpacity onPress={() => Linking.openURL('https://www.alltrails.com/trail/philippines/benguet/little-camp-john-hay-loop')}>
          <Image
            source={{ uri: 'https://images.squarespace-cdn.com/content/v1/65ca34f461a882262b6a0ac5/1712313143270-E492N2241ZD9SIB3RB26/image-asset.jpeg' }} // Replace with your map thumbnail image URL
            style={styles.mapImage}
          />
        </TouchableOpacity>
        <Text style={styles.mapText}>
          Check out our interactive map to find the best nature spots near you!
        </Text>
      </View>

      
      <View style={styles.recentActivitiesSection}>
        <Text style={styles.sectionTitle}>Recent Activities</Text>
        <Text style={styles.recentActivityText}>- Guided Hiking Tour at Yosemite National Park</Text>
        <Text style={styles.recentActivityText}>- Community Beach Cleanup Event</Text>
        <Text style={styles.recentActivityText}>- Bird Watching Workshop in Central Park</Text>
      </View>

      
      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>Contact Us</Text>
        <Text style={styles.contactText}>For more information or to book an activity, please reach out to us at:</Text>
        <Text style={styles.contactEmail}>vanexelmission03@gmail.com</Text>
        <Text style={styles.contactEmail}>Missionvan@natureDestinations.com</Text>
        <Text style={styles.contactPhone}>+63 961-449-0481</Text>
      </View>

      
      {selectedActivity && (
        <Modal
          visible={!!selectedActivity}
          animationType="slide"
          transparent={true}
          onRequestClose={closeModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{selectedActivity.name}</Text>
              <Image source={{ uri: selectedActivity.imageUri }} style={styles.modalImage} />
              <Text style={styles.modalDescription}>{selectedActivity.additionalDescription}</Text>
              <Button title="Close" onPress={closeModal} />
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
    backgroundColor: '#f5f5f5',
  },
  heroSection: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#e0f7fa',
  },
  heroImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  heroSubtitle: {
    fontSize: 16,
    color: '#00796b',
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: '#004d40',
    padding: 10,
    borderRadius: 5,
  },
  ctaButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
  activitiesSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  activityCard: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#ffffff',
    overflow: 'hidden',
    elevation: 3,
  },
  activityImage: {
    width: '100%',
    height: 150,
  },
  activityInfo: {
    padding: 10,
  },
  activityName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  activityDescription: {
    fontSize: 14,
    marginVertical: 5,
  },
  learnMoreButton: {
    backgroundColor: '#004d40',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  learnMoreButtonText: {
    color: '#ffffff',
    fontSize: 14,
  },
  mapSection: {
    padding: 20,
    backgroundColor: '#e8f5e9',
  },
  mapImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  mapText: {
    fontSize: 16,
    color: '#004d40',
    marginTop: 10,
  },
  recentActivitiesSection: {
    padding: 20,
  },
  recentActivityText: {
    fontSize: 14,
    marginVertical: 5,
  },
  contactSection: {
    padding: 20,
    backgroundColor: '#c8e6c9',
  },
  contactText: {
    fontSize: 16,
    marginBottom: 10,
  },
  contactEmail: {
    fontSize: 16,
    color: '#004d40',
    marginBottom: 5,
  },
  contactPhone: {
    fontSize: 16,
    color: '#004d40',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  modalDescription: {
    fontSize: 14,
    marginBottom: 20,
  },
});

export default Explore; 
