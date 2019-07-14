import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList, ScrollView } from 'react-native';

export default function Todo() {
    const [todos, addTodo] = useState([]);
    const [current, currentTodo] = useState({text:''});
    const removeTodo = (index) => { 
        const oldTodos = todos;
        oldTodos.splice(index, 1)
        return(
            addTodo([...todos])
        )
    }
    const addingTodo = () => {
        const empty = (current.text == "") ? addTodo([...todos]) : addTodo([...todos, current])
        return(
            {empty}
        )
    }
  return (
    <View style={styles.container}>
			<TextInput
                onChangeText={(text) => currentTodo({text})}
                placeholder="Add todo list">
            </TextInput>
			<Button
				onPress={() => addingTodo()}
				title="Click me"
				color="red"
				accessibilityLabel="Click this button to increase count"
			/>
            <ScrollView>
            <FlatList
                data={todos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => 
                    <Text onPress={ () => removeTodo(index)}>{item.text || {}}</Text>
                }
            />
            </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
	container: {
        backgroundColor: '#F5FCFF',
        height: 200
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
});