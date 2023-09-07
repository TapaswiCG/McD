import React,{useEffect,useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import SpecialOffersData from './SpecialOffersData';
import { NavigationProp } from '@react-navigation/native';

//@ts-ignore
const SpecialOffers: React.FC = ({navigation}) => {
  
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(SpecialOffersData);

  useEffect(() => {
    // Filter the data based on the search query
    const filtered = SpecialOffersData.filter((item) =>
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredData(filtered);
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Special Offers</Text>
      </View>
      <View style={styles.searchBar}>
        <TextInput placeholder="Cari menu spesiaimu" style={styles.input} value={searchQuery}
  onChangeText={(text) => setSearchQuery(text)}/>
      </View>
      {/* <View style={{paddingTop: 10, marginBottom: 1}}> */}
      <View>
        <FlatList
          data={filteredData}
          keyExtractor={item => item.id}
          numColumns={2}
          contentContainerStyle={styles.flatListContent}
          renderItem={({item}) => (
            <TouchableOpacity 
              onPress={() => {
                navigation.navigate('ItemDetails', {item});
              }}>
              <View style={styles.offerContainer}>
                <Image source={item.image} style={styles.offerImage} />
                <Text
                  style={styles.offerDescription}
                  numberOfLines={2}
                  ellipsizeMode="tail">
                  {item.description}
                </Text>
                <Text style={styles.offerPrice}>{item.price}</Text>

                <TouchableOpacity style={styles.button}>
                  <View style={styles.plusContainer}>
                    <Text style={styles.plusSign}>+</Text>
                  </View>
                  <Text style={styles.buttonText}>Tambah</Text>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  backIcon: {
    marginRight: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchBar: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
  input: {
    borderWidth: 0,
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: '#f0f0f0',
  },
  flatListContent: {
    paddingHorizontal: 8,
  },
  offerContainer: {
    marginRight: -2,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 0,
    width: 160,
    height: 275,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'white',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  offerImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  offerTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  offerDescription: {
    fontSize: 14,
    color: '#666',
    marginTop: 3,
    textAlign: 'center',
  },
  offerPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    textAlign: 'center',
    color: '#FFC72C',
  },
  button: {
    backgroundColor: '#DA291C',
    borderRadius: 50,
    height: 30,
    width: 120,
    paddingVertical: 10,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 12,
  },
  plusContainer: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: -1,
    width: 15,
    height: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  plusSign: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: -10,
    marginTop: -10,
  },
  buttonText: {
    fontSize: 14,
    color: 'white',
    marginBottom: -10,
    marginTop: -10,
  },
});

export default SpecialOffers;
