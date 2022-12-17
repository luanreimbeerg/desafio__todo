import { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Task } from "../../components/Task";

import { styles } from "./styles";

export function Home() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [task, setTask] = useState("");
  const [created, setCreated] = useState(0);

  function handletaskAdd() {
    if (tasks.includes(task)) {
      return Alert.alert(
        "tarefa existe",
        "Já existe um tarefa na lista com esse nome"
      );
    }

    setTasks((prevState) => [...prevState, task]);
    setTask("");
    setCreated((prevState) => prevState + 1);
  }

  function handletaskRemove(name: string) {
    Alert.alert("Remover", `Remover o Tarefa ${name}?`, [
      {
        text: "Sim",

        onPress: () => {
          setCreated((prevState) => prevState - 1);
          setTasks((prevState) => prevState.filter((task) => task !== name));
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image source={require("../../../assets/Logo.png")} />
      </View>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor={"#F2F2F2"}
          onChangeText={(e) => setTask(e)}
          value={task}
        ></TextInput>
        <TouchableOpacity style={styles.button} onPress={handletaskAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content__quantity}>
        <View style={styles.content__text}>
          <Text style={styles.title__created}>Criadas</Text>
          <Text style={styles.subtitle}>{created}</Text>
        </View>
        <View style={styles.content__text}>
          <Text style={styles.title__completed}>Concluídos</Text>
          <Text style={styles.subtitle}>0</Text>
        </View>
      </View>
      <View>
        <FlatList
          data={tasks}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              name={item}
              onRemove={() => handletaskRemove(item)}
            />
          )}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View>
              <Text style={{ borderBottomWidth: 1, color: "#fff" }}></Text>
              <View style={styles.img__listEmpty}>
                <Image source={require("../../../assets/listEmpty.png")} />
              </View>
              <View style={styles.content__titles}>
                <Text style={styles.title__listEmpty}>
                  Você ainda não tem tarefas cadastradas
                </Text>
                <Text style={styles.subtitle__listEmpty}>
                  Crie tarefas e organize seus itens a fazer
                </Text>
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}
