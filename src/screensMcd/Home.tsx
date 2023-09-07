import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
//@ts-ignore
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationProp} from '@react-navigation/native';
import {
  breakfastItems,
  dessertItems,
  drinksItems,
  sideItems,
} from './Categories';
import SpecialOffersData from './SpecialOffersData';

interface HomeProps {
  navigation: NavigationProp<any>;
}

//@ts-ignore
const Home = ({navigation}) => {
  const data = [
    {label: 'New York', value: '1'},
    {label: 'Los Angeles', value: '2'},
    {label: 'Chicago', value: '3'},
    {label: 'Houston', value: '4'},
    {label: 'Miami', value: '5'},
  ];

  const [value, setValue] = useState(null);

  const renderItem = (item: any) => {
    return (
      <View style={styles.item}>
        <Text style={styles.textItem}>{item.label}</Text>
        {item.value === value}
      </View>
    );
  };

  const [activeCarouselIndex, setActiveCarouselIndex] = useState(0);

  //@ts-ignore
  const renderCarouselItem = ({item}) => (
    <Image source={item} style={styles.carouselImage} />
  );

  const limitedSpecialOffersData = SpecialOffersData.slice(0, 3);

  const carouselImages = [
    require('../assets/burger.jpg'),
    require('../assets/burger.jpg'),
    require('../assets/burger.jpg'),
  ];

  const categories = [
    {id: '1', title: 'Breakfast', image: require('../assets/breakfast.png')},
    {id: '2', title: 'Sides', image: require('../assets/sides.png')},
    {id: '3', title: 'Desserts', image: require('../assets/dessert.png')},
    {id: '4', title: 'Drinks', image: require('../assets/drinks.png')},
  ];

  const categoryItemsMap = {
    Breakfast: breakfastItems,
    Drinks: drinksItems,
    Desserts: dessertItems,
    Sides: sideItems,
  };

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(categories);

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const navigateToOffers = () => {
    navigation.navigate('SpecialOffers');
  };

  const navigateToCategoryDetails = (categoryData: any) => {
    navigation.navigate('CategoryDetails', {categoryData});
  };

  const filterCategories = (query: any) => {
    const filtered = categories.filter(category =>
      category.title.toLowerCase().includes(query.toLowerCase()),
    );
    setFilteredCategories(filtered);
  };

  return (
    <View style={styles.container}>
      <View style={styles.redBackground}></View>
      <View style={styles.whiteBackground}></View>
      <View style={styles.overlayContent}>
        <View style={styles.contentContainer}>
          <View style={styles.header}>
            <View style={styles.logoLocationContainer}>
              <Image
                source={require('../assets/logo2.png')}
                style={styles.logo}
              />

              <Dropdown
                //@ts-ignore
                style={styles.dropdown}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Select Loaction"
                searchPlaceholder="Search..."
                value={value}
                //@ts-ignore
                onChange={item => {
                  //@ts-ignore
                  setValue(item.value);
                }}
                renderItem={renderItem}
              />
            </View>
            <View style={styles.searchContainer}>
              <TextInput
                style={styles.searchBar}
                placeholder="Halo, mau pesan apa?"
                value={searchQuery}
                onChangeText={text => {
                  setSearchQuery(text);
                  filterCategories(text);
                }}
              />
              <Icon name="search" size={22} color="gray" />
            </View>
          </View>

          {/* //carousel */}
          {/* <ScrollView style={styles.content}> */}
          <ScrollView>
            <View style={styles.carouselContainer}>
              <Carousel
                data={carouselImages}
                renderItem={renderCarouselItem}
                sliderWidth={400}
                itemWidth={300}
                //@ts-ignore
                onSnapToItem={index => setActiveCarouselIndex(index)}
              />
              <Pagination
                dotsLength={carouselImages.length}
                activeDotIndex={activeCarouselIndex}
                containerStyle={styles.paginationContainer}
                dotStyle={{
                  width: 20,
                  height: 10,
                  borderRadius: 5,
                  marginHorizontal: 1,
                  backgroundColor: 'red',
                }}
                inactiveDotStyle={{
                  width: 15,
                  height: 15,
                  borderRadius: 7,
                  backgroundColor: '#D3D3D3',
                }}
                inactiveDotOpacity={1}
                inactiveDotScale={0.5}
              />
            </View>
            {/* //carousel         */}

            <View>
              <Text style={styles.categoryText}>Kategori</Text>
            </View>
            <ScrollView>
              <View style={{marginLeft:20}}>
                <FlatList
                  data={filteredCategories}
                  keyExtractor={item => item.id}
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      key={item.id}
                      style={styles.categoryContainer}
                      
                      onPress={() =>
                        //@ts-ignore
                        navigateToCategoryDetails(categoryItemsMap[item.title])
                      }>
                      <Image source={item.image} style={styles.categoryImage} />
                      <Text style={styles.categoryTitle}>{item.title}</Text>
                    </TouchableOpacity>
                  )}
                />

                {/* <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={styles.category}>
                  {categories.map(category => (
                    <TouchableOpacity
                    key={category.id}
                    style={styles.categoryContainer}
                    //@ts-ignore
                    onPress={() => navigateToCategoryDetails(categoryItemsMap[category.title])}
                  >
                    <Image source={category.image} style={styles.categoryImage} />
                    <Text style={styles.categoryTitle}>{category.title}</Text>
                  </TouchableOpacity>
                  ))}
                </ScrollView> */}
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.specialOffersText}>Special Offer</Text>
                <Text
                  style={styles.specialOffersSubText}
                  onPress={navigateToOffers}>
                  Lihat Semua {'>'}{' '}
                </Text>
              </View>
              <FlatList
                data={limitedSpecialOffersData}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => (
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
                )}
              />
            </ScrollView>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  redBackground: {
    flex: 2,
    backgroundColor: '#DA291C',
  },
  whiteBackground: {
    flex: 5,
    backgroundColor: 'white',
  },
  overlayContent: {
    ...StyleSheet.absoluteFillObject,
  },
  contentContainer: {
    flex: 3,
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  contentOverlay: {
    flex: 1,
    backgroundColor: 'white',
  },
  logoLocationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: -10,
  },
  logo: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  location: {
    fontSize: 16,
    marginTop: 5,
  },
  locationPicker: {
    width: 200,
    color: 'white',
    alignContent: 'center',
    marginLeft: 75,
  },
  locationText: {
    fontSize: 16,
    marginTop: 5,
    marginHorizontal: 120,
    fontWeight: 'bold',
  },
  dropdownTextStyle: {
    fontSize: 14,
    marginTop: 5,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
  searchIcon: {
    marginRight: 10,
  },
  searchBar: {
    flex: 1,
    fontSize: 16,
    color: 'black',
  },
  content: {
    paddingHorizontal: 20,
  },
  carousel: {
    marginTop: 20,
    marginHorizontal: 0,
    // Carousel styles
  },
  carouselContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 0,
    // marginLeft:10,
  },
  paginationContainer: {
    paddingVertical: 10,
  },
  paginationDot: {
    width: 20,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
  activePaginationDot: {
    width: 20,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#DA291C',
  },
  carouselImage: {
    width: 300,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 2,
    // marginLeft:-40,
  },
  category: {
    marginTop: 20,
    marginLeft: 10,
  },
  categoryContainer: {
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: '#f0f0f0', // Light gray
    padding: 10,
    borderRadius: 8,
    width: 100,
  },
  categoryText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#27251F',
    marginLeft: 20,
  },
  categoryItem: {
    alignItems: 'center',
    marginRight: 20,
  },
  categoryImage: {
    width: 60,
    height: 60,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  categoryTitle: {
    marginTop: 5,
    color: '#27251F',
  },
  specialOffersText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 40,
    color: '#27251F',
  },
  specialOffersSubText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
    marginLeft: 95,
    color: '#DA291C',
  },
  offerContainer: {
    marginRight: -2,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20,
    width: 150,
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

  dropdown: {
    marginLeft: 25,
    height: 50,
    width: 200,
    padding: 12,
    // shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  icon: {
    marginRight: 5,
    color: 'white',
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textItem: {
    flex: 1,
    fontSize: 16,
  },
  placeholderStyle: {
    fontSize: 16,
    color: 'white',
    paddingLeft: 30,
  },
  selectedTextStyle: {
    fontSize: 18,
    color: 'white',
    paddingLeft: 50,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default Home;
