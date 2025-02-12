import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";

import users from "../credentials.json";

interface User {
  username: string;
  password: string;
}

interface Users {
  users: User[];
}

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const validateInputs = () => {
    const usernameRegex = /^.{5,}$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^a-zA-Z\d]).{8,}$/;

    if (!usernameRegex.test(username)) {
      alert("Username must be at least 5 characters");
      return false;
    }

    if (!passwordRegex.test(password)) {
      alert("Password must be at least 8 characters");
      return false;
    }

    return true;
  };

  const handleLogin = () => {
    if (validateInputs()) {
      const user = users.users.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        router.push("/home");
      } else {
        alert("Invalid username or password");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});
