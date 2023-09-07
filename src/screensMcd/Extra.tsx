import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  // KeyboardAwareScrollView,
  ScrollView,
  Platform,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';


const ItemDetails = () => {
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
    <KeyboardAvoidingView // Wrap the entire component with KeyboardAvoidingView
      style={{flex: 1}} // Add flex style to the KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'} // Adjust behavior based on platform
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 25} // Adjust vertical offset as needed
    >
      <ScrollView // Wrap the content with ScrollView to make sure everything is scrollable
        // contentContainerStyle={styles.container} // Apply the container style
        contentContainerStyle={{flexGrow: 1}}
        keyboardShouldPersistTaps="handled" // Allow taps to dismiss the keyboard
      >
        <View style={[styles.container]}>
          <View style={{flex: 0.5, backgroundColor: '#DA291C'}} />
          
          <View
            style={{
              flex: 1,
              position: 'relative',
              backgroundColor: 'white',
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          >
          
          <View style={styles.imageContainer}>
            <Image
              source={require('../assets/itemDetails.png')}
              style={styles.image}
            />
            <Text style={styles.itemName}>Big Mac Beef Rasher</Text>
            <Text style={styles.price}>Rp36.000</Text>
            <Text style={styles.description}>
              Lebih Extra dan Lebih Nikmat dengan Beef rasher diantara dua lapis
              daging sapi, saus spesial, selada, keju, acar timun, bawang yang
              diapit roti wijen.
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
            <TouchableOpacity style={styles.addToCartButton}>
              <Text style={styles.addToCartButtonText}>Masukkan Keranjang</Text>
            </TouchableOpacity>
          </View>
            </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DA291C',
  },
  imageContainer: {
    position: 'absolute',
    left: 30,
    right: 20,
    bottom: 10,
    // justifyContent: 'center',
    // alignItems: 'center',
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
    marginTop: 10,
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
    textAlign: 'center',
    marginTop: 10,
  },
  extraOptionsContainer: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 60,
  },
  extraOptionsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginRight: 60,
    marginLeft: -60,
  },
  optionalText: {
    color: 'gray',
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 150,
    marginLeft: -55,
    marginTop: 5,
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
    marginLeft: 100,
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
    fontSize: 30,
    // fontWeight:'bold',
  },
  quantityText: {
    marginHorizontal: 20,
    fontSize: 18,
    color: 'black',
  },
  addToCartButton: {
    backgroundColor: '#DA291C',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 40,
    marginTop: 20,
    alignContent: 'center',
    alignItems: 'center',
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 18,
    alignContent: 'center',
    alignItems: 'center',
  },
});

export default ItemDetails;
