// CategoryDetails.tsx

import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addToCartRequest} from '../reduxMcd/action';

interface CategoryDetailsProps {
  route: any;
  navigation: any;
}

const CategoryDetails: React.FC<CategoryDetailsProps> = ({route}) => {
  const [data, setData] = useState([{email: 'temp@gmail.com', items: [{}]}]);


  // const handleAddToCart = () => {
  //   // const itemsArray = data.items;
  //   // const newItems = ["burger", "pizza", "fries"];
  //   // itemsArray.push(...newItems);
  //   // setData({ ...data });

  //   // console.log(data.items);

  //   const emailToCheck = 'temp2@gmail.com';
  //   const newValues = {title: 'burger', quantity: 2, price: 200};
  //   const index = data.findIndex(obj => obj.email === emailToCheck);
  //   if (index !== -1) {
  //     const existingObject = data[index];
  //     existingObject.items.push(newValues);
  //   } else {
  //     const newObject = {email: emailToCheck, items: [newValues]};
  //     data.push(newObject);
  //   }

  //   console.log(data);
  //   console.log(data[index].items);
  // };

  const {categoryData} = route.params;

  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.login.currentUser);
  const cart = useSelector((state:any) => state.cart.cart)

  const userEmail = user.email;

  // console.log(user);
  // console.log(userEmail);

  const handleAddToCart = (items:any) => {
    dispatch(addToCartRequest(userEmail, items, cart));
  };

  const [quantity, setQuantity] = useState<number[]>(
    Array(categoryData.length).fill(0),
  );

  const navigation = useNavigation();
  const navigateToItemDetail = (item: any) => {
    //@ts-ignore
    navigation.navigate('ItemDetails', {item});
  };

  const incrementQuantity = (index: number) => {
    const newQuantity = [...quantity];
    newQuantity[index]++;
    setQuantity(newQuantity);
  };

  const decrementQuantity = (index: number) => {
    const newQuantity = [...quantity];
    if (newQuantity[index] > 0) {
      newQuantity[index]--;
    }
    setQuantity(newQuantity);
  };

  useEffect(() =>{
    console.log("Checking if items are added to cart: ");
    console.log(cart)
    console.log('====================================');
    console.log(cart[0]?.items);
    console.log('====================================');
  },[cart])

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryData}
        keyExtractor={item => item.id}
        renderItem={({item, index}) => (
          <TouchableOpacity onPress={() => navigateToItemDetail(item)}>
            <View style={styles.itemContainer}>
              <View style={styles.itemWrapper}>
                <Image source={item.image} style={styles.itemImage} />
                <View style={styles.itemDetails}>
                  <View style={styles.titleRow}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <View style={styles.quantityContainer}>
                      {/* <TouchableOpacity onPress={() => decrementQuantity(index)}>
                    <Text style={styles.quantityButton}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.quantity}>{quantity[index]}</Text>
                  <TouchableOpacity onPress={() => incrementQuantity(index)}>
                    <Text style={styles.quantityButton}>+</Text>
                  </TouchableOpacity> */}

                      <TouchableOpacity>
                        <Text onPress={() => handleAddToCart(item)}>Add</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <Text style={styles.itemPrice}>{item.price}</Text>
                  <Text
                    style={styles.itemDescription}
                    numberOfLines={2}
                    ellipsizeMode="tail">
                    {item.description}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  itemContainer: {
    marginBottom: 16,
  },
  itemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    elevation: 2, // Add elevation for Android shadow
    shadowColor: '#000', // Add shadow for iOS shadow
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  itemImage: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    marginHorizontal: 4,
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CategoryDetails;
