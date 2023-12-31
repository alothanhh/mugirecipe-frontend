import React from "react";
import { TouchableHighlight, Image, } from "react-native";
import PropTypes from "prop-types";
import styles from "./styles";

export default function BackButton(props: any) {
    return (
      <TouchableHighlight onPress={props.onPress} style={styles.btnContainer} underlayColor='#E2DEDE'>
        <Image source={require("../../../../../../assets/icon/back.png")} style={styles.btnIcon} />
      </TouchableHighlight>
    );
  }
  
  BackButton.propTypes = {
    onPress: PropTypes.func,
    source: PropTypes.number,
    title: PropTypes.string,
  };