import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Col, Grid} from 'react-native-easy-grid';
import DeleteButton from './DeleteButton';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

function ListItem({el, isTaskChecked, themeMode, deleteTask}) {
  return (
    <Grid>
      <Col style={styles.col} size={30}>
        <BouncyCheckbox
          isChecked={el.isDone}
          onPress={() => isTaskChecked(el.key, !el.isDone)}
        />
      </Col>
      <Col style={styles.col} size={80}>
        <Text style={[styles.text, theme[themeMode].text]} numberOfLines={1}>
          {el.text}
        </Text>
      </Col>
      <Col style={styles.delButton} size={14}>
        <DeleteButton onPressFunc={deleteTask} keyItem={el.key} />
      </Col>
    </Grid>
  );
}

const styles = StyleSheet.create({
  col: {
    marginVertical: 16,
    height: 26,
  },
  checkBox: {
    marginLeft: 0,
    marginRight: 0,
    marginTop: -15,
    marginBottom: 0,
    padding: 0,
    alignItems: 'flex-start',
  },
  text: {
    textAlign: 'left',
    marginLeft: 15,
    fontSize: 18,
  },
  delButton: {
    marginRight: 15,
  },
});
const theme = {
  light: StyleSheet.create({
    text: {
      color: '#000000',
    },
  }),
  dark: StyleSheet.create({
    text: {
      color: '#DADADA',
    },
  }),
};

export default ListItem;
