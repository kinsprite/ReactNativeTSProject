import React, {useState} from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.row}>
      <Text style={styles.label}>Count: {count}</Text>
      <View style={styles.btn}>
        <Button
          color="#f194ff"
          title="DECREMENT"
          onPress={() => setCount(count - 1)}
        />
      </View>
      <View style={styles.btn}>
        <Button title="INCREMENT" onPress={() => setCount(count + 1)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 0,
  },
  label: {
    marginTop: 12,
    marginRight: 12,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  btn: {
    width: 100,
    marginLeft: 12,
    marginRight: 12,
    marginTop: 6,
    fontSize: 18,
    fontWeight: '400',
  },
});

export default Counter;
