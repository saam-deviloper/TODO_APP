import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import ThemedTextInput from "@/components/ThemedTextInput";
import { ThemedView } from "@/components/ThemedView";
import { Dimens } from "@/constants/Dimens";
import { AuthContext } from "@/contexts/AuthProvider";
import React, { useContext, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
// import { MdDelete, MdEdit } from "react-icons/md";
const mainPage = () => {
  const { session, signOut } = useContext(AuthContext);
  const [task, setTask] = useState([
    { task: "Test task&&&&&&&&&&&&&&&&&&&&&&", time: "7/16/2024, 8:46:33 PM" },
  ]);
  const [input, setInput] = useState<string>("");
  const [editMode, setEditMode] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState(null);

  //   METHODS
  const handleSubmitTask = () => {
    if (editMode) {
      // find which task should update
      let selectedTaskToUpdateIndex = task.findIndex(
        (item, index) => index === selectedId
      );
      // if task founded
      if (selectedTaskToUpdateIndex != -1) {
        let copyOfTask = [...task];
        copyOfTask[selectedTaskToUpdateIndex].task = input;
        setTask(copyOfTask);
      }
      setEditMode(false);
      setInput("");
    } else {
      const date = new Date().toLocaleString("en-US", { timeZone: "Iran" });
      setTask([...task, { task: input, time: date }]);
    }
    setInput("");
  };
  const handleDelete = (indexTask: number) => {
    const newTask = task.filter((task, index) => index != indexTask);
    setTask(newTask);
  };
  const handleEdit = (index) => {
    setEditMode(true);
    setSelectedId(index);
    setInput(task[index].task);
  };
  return (
    <ThemedView
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
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingVertical: 8,
        }}
      >
        <ThemedText style={{ fontSize: 22, fontWeight: ":bold" }}>
          {session ? (
            <>
              <ThemedText>{`Welcome ${session?.username}`}</ThemedText>
              <HelloWave />
            </>
          ) : (
            ""
          )}
        </ThemedText>
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

      {/* main screen */}
      <ThemedView
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginHorizontal: 0,
        }}
      >
        <ThemedTextInput
          placeHolder="enter tasks"
          type="custom"
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
          <ThemedText
            style={{
              textAlign: "center",
              marginVertical: "auto",
              fontSize: 22,
              color: "white",
            }}
          >
            {editMode ? "Update" : "Sumbit"}
          </ThemedText>
        </TouchableOpacity>
      </ThemedView>
      {/* tasks table */}
      <ThemedView>
        {task.map((item, index) => {
          return (
            <ThemedView
              key={index}
              style={{
                // width: Dimens.WIDTH - 11,
                height: Dimens.HEIGHT / 10,
                marginTop: 10,
                paddingVertical: 8,
                paddingHorizontal: 5,
                backgroundColor: index % 2 === 0 ? "#e3e3e3" : "white",
                borderRadius: 8,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingHorizontal: 5,
                }}
              >
                {/* titles */}
                <View
                  style={{ marginRight: "auto", flex: 0.7, paddingRight: 2 }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      color: "darkGrey",
                      flexWrap: "wrap",
                    }}
                  >
                    {index + 1}
                    {". "}
                    {item.task}
                  </Text>
                </View>
                {/* buttons */}
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    flex: 0.3,
                  }}
                >
                  {/* delete */}
                  <TouchableOpacity
                    onPress={() => {
                      handleDelete(index);
                    }}
                  >
                    {/* {<MdDelete />} */}
                    <Text style={{ color: "red" }}>Delete</Text>
                  </TouchableOpacity>
                  {/* edit */}
                  <TouchableOpacity
                    onPress={() => {
                      handleEdit(index);
                    }}
                    style={{ marginHorizontal: 10 }}
                  >
                    {/* {<MdEdit />} */}
                    <View>
                      <Text style={{ color: "orange" }}>Edit</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View></View>
              </View>
              <View>
                <Text
                  style={{ fontSize: 12, alignItems: "center", marginLeft: 8 }}
                >
                  {item.time}
                </Text>
              </View>
            </ThemedView>
          );
        })}
      </ThemedView>
    </ThemedView>
  );
};

export default mainPage;
