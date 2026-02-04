import { useState } from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

interface AddTodoProps {
  onAddTodo: (text: string) => void;
}

export default function AddTodo({ onAddTodo }: AddTodoProps) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      onAddTodo(input);
      setInput('');
    }

  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a new task"
        placeholderTextColor="#999"
        value={input}
        onChangeText={setInput}
      />

      <Button title="Add" onPress={handleAdd} />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },

  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
  
});
