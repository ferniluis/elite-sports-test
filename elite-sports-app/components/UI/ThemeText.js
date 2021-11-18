import React, {useContext} from "react";
import { StyleSheet, Text } from "react-native";
import Context from "../../store/Context";

function ThemeText(props) {
    const context = useContext(Context);

    const styles = StyleSheet.create({
        text: {
            color: context.darkMode ? 'white' : 'black'
        }
    });
    
    return <Text style={[styles.text, props.style]}>{props.children}</Text>
}

export default ThemeText;

