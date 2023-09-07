import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';

interface ItemDetailProps {
  route: any;
}

const ItemDetails: React.FC<ItemDetailProps> = ({ route }) => {

  const { item } = route.params;

  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <ScrollView>
    <View style={{flex: 1, backgroundColor: '#DA291C'}}>
      <Animatable.View animation="fadeIn" style={{flex: 1}}>
        {/* White container */}

        <View
          style={{
            backgroundColor: 'white',
            padding: 20,
            marginTop: 230,
            borderRadius: 10,
            // alignItems: 'center',
            height: 480,
            borderBottomLeftRadius:0,
            borderBottomRightRadius:0,
          }}>
          <Text style={styles.itemName}>{item.title}</Text>
          <Text style={styles.price}>{item.price}</Text>
          <Text style={styles.description}>
          {item.description}
          </Text>
          <View style={styles.extraOptionsContainer}>
            <Text style={styles.extraOptionsText}>Tambahkan Catatan</Text>
            <Text style={styles.optionalText}>(Optional)</Text>
          </View>
          <TextInput
            placeholder="Cth. Tanpa keju dan tomat"
            style={styles.notesInput}
            multiline
          />
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={decrementQuantity}
              style={styles.quantityButton}>
              <Text style={styles.symbolText}>−</Text>
            </TouchableOpacity>
            <Text style={styles.quantityText}>{quantity}</Text>
            <TouchableOpacity
              onPress={incrementQuantity}
              style={styles.quantityButton}>
              <Text style={styles.symbolText}>+</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={styles.cartIconContainer} > 
          <Icon name="cart-outline" size={22} color="#FFC72C"/>
         </TouchableOpacity> 
          <TouchableOpacity style={styles.addToCartButton}>
            <Text style={styles.addToCartButtonText}>Masukkan Keranjang</Text>
          </TouchableOpacity>
          </View>
        </View>

        {/* Image */}
        <Animatable.View
          animation="slideInUp"
          style={{
            position: 'absolute',
            top: 40,
            left: 6,
            right: 0,
            alignItems: 'center',
          }}>
          <Image
            // source={require('../assets/itemDetails.png')}
            source={item.image}

            style={{width: 240, height: 240}}
          />
        </Animatable.View>
      </Animatable.View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DA291C',
    padding: 20,
  },
  scrollContainer: {
    flexGrow: 1,
  },
  imageContainer: {
    position: 'absolute',
    left: 30,
    right: 20,
    bottom: 10,
  },
  image: {
    height: 250,
    width: 250,
    left: 60,
    bottom: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 30,
    color: 'black',
    textAlign: 'left',
  },
  price: {
    fontSize: 20,
    color: '#FFC72C',
    marginTop: 5,
    marginRight: 5,
    textAlign: 'left',
  },
  description: {
    textAlign: 'left',
    marginTop: 10,
  },
  extraOptionsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    // marginLeft: 60,
  },
  extraOptionsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'left',
    // marginRight: 60,
    // marginLeft: 5,
  },
  optionalText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
    // marginRight: 150,
    marginLeft: 2,
    marginTop: 5,
    textAlign: 'left',
  },
  optionalSubText: {
    marginRight: 30,
    marginLeft: -100,
  },
  notesInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    width: '100%',
    marginTop: 20,
    padding: 10,
  },

  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    marginTop: 20,
    marginLeft:120,
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    marginVertical: 5,
  },
  symbolText: {
    color: 'red',
    fontSize: 26,
  },
  quantityText: {
    marginHorizontal: 20,
    fontSize: 18,
    color: 'black',
  },
  cartIconContainer: {
    backgroundColor: 'white',
    borderRadius: 100,
    borderColor:'#f0f0f0',
    borderWidth:2,
    padding: 10,
    height:50,
    marginTop:10,
    marginRight:10,
  },
  addToCartButton: {
    backgroundColor: '#DA291C',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 40,
    marginTop: 10,
    alignContent: 'center',
    alignItems: 'center',
    width:300,
    height:50
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 16,
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default ItemDetails;
