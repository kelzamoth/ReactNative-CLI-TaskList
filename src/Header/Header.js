import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import AddButton from './AddButton/AddButton';
import {Col, Grid} from 'react-native-easy-grid';

function Header({changeInputCond, themeMode}) {
  return (
    <View style={styles.main}>
      <Grid>
        <Col size={3}>
          <Text
            numberOfLines={1}
            style={[styles.textTask, theme[themeMode].text]}>
            Tasks
          </Text>
        </Col>
        <Col
          size={1}
          style={{
            paddingTop: 6,
          }}>
          <AddButton
            button={[styles.button, theme[themeMode].button]}
            image={styles.image}
            onPressFunc={changeInputCond}
            themeMode={themeMode}
          />
        </Col>
      </Grid>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    minHeight: 68,
    width: '100%',
  },
  textTask: {
    minHeight: 56,
    fontSize: 56,
    color: 'black',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: 56,
    borderRadius: 6,
    borderWidth: 1,
    marginLeft: 'auto',
  },
  image: {
    width: 24,
    height: 24,
  },
});

const theme = {
  light: StyleSheet.create({
    text: {
      color: '#000000',
    },
    button: {
      backgroundColor: '#F2F3FF',
      borderColor: '#EBEBEB',
    },
  }),
  dark: StyleSheet.create({
    text: {
      color: '#DADADA',
    },
    button: {
      backgroundColor: '#24242D',
      borderColor: '#29292F',
    },
  }),
};

export default Header;
