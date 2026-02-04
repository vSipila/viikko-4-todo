import { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AddTodo from './components/AddTodo';
import TodoItem from './components/TodoItem';

interface Todo {
  id: string;
  text: string;
  done: boolean;
}


export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    try {
      const data = await AsyncStorage.getItem('todos');
      if (data) {
        setTodos(JSON.parse(data));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const saveTodos = async (newTodos: Todo[]) => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(newTodos));
    } catch (error) {
      console.error(error);
    }
  };

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      done: false,
    };


    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    saveTodos(newTodos);

  };

  const toggleTodo = (id: string) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
    saveTodos(newTodos);
    
  };

  return (
    <SafeAreaView style={styles.container}>
      <AddTodo onAddTodo={addTodo} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem todo={item} onToggle={toggleTodo} />
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
