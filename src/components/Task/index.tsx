import { Image, Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type TaskProps = {
  name: string;
  onRemove: () => void;
};

export function Task(props: TaskProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.name}</Text>
      <TouchableOpacity onPress={props.onRemove}>
        <Image source={require("../../../assets/trash.png")}></Image>
      </TouchableOpacity>
    </View>
  );
}
