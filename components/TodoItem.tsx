import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface TodoItemProps {
  todo: {
    id: string;
    text: string;
    done: boolean;
  };
  onToggle: (id: string) => void;
}



export default function TodoItem({ todo, onToggle }: TodoItemProps) {

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => onToggle(todo.id)}
    >
      <View style={styles.checkbox}>
        <Text style={styles.checkboxText}>{todo.done ? '✓' : ''}</Text>
      </View>
      <Text style={[
        styles.text,
        todo.done && styles.doneText
      ]}>
        {todo.text}
      </Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },

  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#007AFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },

  checkboxText: {
    color: '#007AFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  text: {
    fontSize: 16,
    color: '#000',
    flex: 1,
  },

  doneText: {
    textDecorationLine: 'line-through',
    color: '#999',
  },
  
});
