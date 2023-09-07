import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';  

//@ts-ignore
const CartItem = ({ item, onIncrement, onDecrement, onEdit, onRemove }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <View style={{flexDirection:'row'}}>
        <Text style={styles.itemName}>{item.name}</Text>
        <TouchableOpacity onPress={onRemove} style={styles.deleteButton}>
          {/* <Icon name="trash-o" size={20} color="black" /> */}
          <Icon name="trash-bin-outline" size={22} color="gray"/>
        </TouchableOpacity>
        </View>
        <View style={styles.quantityControls}>
          <View style={styles.quantitySymbols}>
          <TouchableOpacity onPress={onDecrement}>
            <Text style={{color:'red',fontSize:16}}>−</Text>
          </TouchableOpacity>
          </View>
          <Text style={{marginHorizontal:8}}>{item.quantity}</Text>
          <View style={styles.quantitySymbols}>
          <TouchableOpacity onPress={onIncrement}>
            <Text style={{color:'red', fontSize:16}}>+</Text>
          </TouchableOpacity>
          </View>
          <Text style={styles.price}>Rp{item.price}</Text>
        </View>
       
      </View>
    </View>
  );
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Big Mac Beef Rasher',
      image: require('../assets/breakfast.png'),
      quantity: 2,
      price: 25.99,
    },
    {
      id: 2,
      name: 'Pan Nas 2 with Fries',
      image: require('../assets/breakfast.png'),
      quantity: 1,
      price: 19.99,
    },
    {
      id: 3,
      name: 'Fanta Mc Float Drink',
      image: require('../assets/breakfast.png'),
      quantity: 3,
      price: 12.99,
    },
    {
      id: 4,
      name: 'Fanta Mc Float Drink',
      image: require('../assets/breakfast.png'),
      quantity: 3,
      price: 12.99,
    },
  ]);

  const handleIncrement = (itemId:number) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedItems);
  };

  const handleDecrement = (itemId:number) => {
    const updatedItems = cartItems.map((item) =>
      item.id === itemId && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setCartItems(updatedItems);
  };

  const handleEdit = (itemId:number) => {
    
  };

  const handleRemove = (itemId:number) => {
    const updatedItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedItems);
  };


  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.background}>
        <View style={styles.yellowBackground} >
        <Text style={{color:'#DA291C',fontWeight:'bold',marginTop:20, fontSize:20, marginLeft:26}}>
        Pesananmu
      </Text>
      </View>
      </View>
      
      <View style={styles.content}>
          {cartItems.map((item) => (
            <View style={styles.cartItemContainer} key={item.id}>
            <CartItem
              key={item.id}
              item={item}
              onIncrement={() => handleIncrement(item.id)}
              onDecrement={() => handleDecrement(item.id)}
              onEdit={() => handleEdit(item.id)}
              onRemove={() => handleRemove(item.id)}
            />
            </View>
          ))}
        <View style={styles.totalContainer}>
          <View style={{flexDirection:'row'}}>
          <Text style={{marginLeft:-10, fontSize:14}}>Total Items </Text>
          <Text style={{marginLeft:200, fontSize:14}}>{totalItems}</Text>
          </View>
          <View style={{flexDirection:'row'}}>
          <Text style={{marginLeft:10, fontSize:14}}>Biaya Pengiriman </Text>
          <Text style={{marginLeft:160, fontSize:14}}>GRATIS</Text>
          </View>
          <View style={styles.separator} />
          <View style={{flexDirection:'row'}}>
          <Text style={{marginLeft:10, fontSize:16, fontWeight:'bold'}}>Total Biaya </Text>
          <Text style={{marginLeft:160, fontSize:16, fontWeight:'bold'}}>Rp{totalPrice.toFixed(2)}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={{color:'white', fontSize:16}}>Bayar</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  yellowBackground: {
    flex: 0.2,
    backgroundColor: '#FFC72C',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
  },
  content: {
    flex: 1,
    marginTop: 60, 
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  whiteBackground: {
    flex: 2,
    backgroundColor: 'white',
    padding: 20,
  },
  itemBox:{
    backgroundColor:'white',
    borderRadius:20,
  },
  cartItemContainer: {
    marginBottom: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,

  },
  deleteButton: {
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    marginLeft:70,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  itemDetails: {
    flex: 2,
  },
  itemName: {
    fontWeight: 'bold',
    marginBottom: 1,
    fontSize:16,
    marginTop:5,
    color:'black'
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  quantitySymbols:{
    color:'red',
    borderWidth: 1,
    borderColor: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
    marginVertical: 5,
  },
  price:{
    marginLeft:115,
    color:'#FFC72C'
  },
  separator: {
  backgroundColor: '#f0f0f0',
  height: 2,
  width: 350,
  margin:20,
  },
  itemActions: {
    flex: 1,
    alignItems: 'flex-end',
  },
  totalContainer: {
    marginTop: 20,
    alignItems: 'center',
    padding:2,
  },
  buyButton: {
    backgroundColor: '#DA291C',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 10,
    height:45,
    marginBottom:10,
  },
});

export default CartPage;
