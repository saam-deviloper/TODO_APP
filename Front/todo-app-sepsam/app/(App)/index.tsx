import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "@/contexts/AuthProvider";
import { MdDelete, MdEdit } from "react-icons/md";
const MainScreen = () => {
  const { session, signOut } = useContext(AuthContext);
  const [task, setTask] = useState([]);
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(0);

  //   METHODS
  const handleSubmitTask = () => {
    console.log("calll", task);
    if (editMode) {
      const UpdatedTask = task.find((item, index) => index === editMode);
      UpdatedTask.task = input;
      setEditMode(0);
      setInput("");
    } else {
      const date = new Date().toLocaleString("en-US", {timeZone: "Iran"});
      setTask([...task, { task: input, time: date }]);
    }
    setInput("");
  };
  const handleDelete = (indexTask: number) => {
    const newTask = task.filter((task, index) => index != indexTask);
    setTask(newTask);
  };
  const handleEdit = (index) => {
    setEditMode(index);
    const selectedTask = task[index];
    setInput(selectedTask.task);
  };
  return (
    <View
      style={{
        display: "flex",
        padding: 10,
        marginTop: 10,
      }}
    >
      <View
        style={{
          marginTop: 10,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <TouchableOpacity
          style={{
            width: "30%",
            height: 50,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
            borderColor: "red",
            borderWidth: 1,
          }}
          onPress={signOut}
        >
          <Text
            style={{
              textAlign: "center",
              marginVertical: "auto",
              fontSize: 22,
              color: "red",
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={{ fontSize: 22, fontWeight: ":bold" }}>
        {session ? `Welcome ${session?.username}` : ""}
      </Text>
      {/* main screen */}
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 0,
        }}
      >
        <TextInput
          placeholder="enter tasks"
          style={{
            borderWidth: 1,
            borderColor: "grey",
            width: "65%",
            height: 50,
            borderRadius: 5,
            paddingHorizontal: 8,
          }}
          onChangeText={(txt) => setInput(txt)}
          value={input}
        />
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            width: "30%",
            height: 50,
            borderRadius: 5,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={handleSubmitTask}
        >
          <Text
            style={{
              textAlign: "center",
              marginVertical: "auto",
              fontSize: 22,
              color: "white",
            }}
          >
            {editMode ? "Update" : "Sumbit"}
          </Text>
        </TouchableOpacity>
      </View>
      {/* tasks table */}
      <View>
        {task.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                marginTop: 10,
                paddingVertical: 5,
                backgroundColor: index % 2 === 0 ? "#e3e3e3" : "white",
              }}
            >
              <Text style={{ fontSize: 34, color: "darkGrey" }}>
                {index + 1}
                {". "}
                {item.task}
                {" | "}
                {item.time}
                {"  "}
                <TouchableOpacity
                  onPress={() => {
                    handleDelete(index);
                  }}
                >
                  {<MdDelete />}
                </TouchableOpacity>
                {"  "}
                <TouchableOpacity
                  onPress={() => {
                    handleEdit(index);
                  }}
                >
                  {<MdEdit />}
                </TouchableOpacity>
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default MainScreen;
