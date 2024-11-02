import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFocusEffect } from '@react-navigation/native';
import styles from './Maestro';

interface Group {
  groupName: string;
  subject: string;
  students: number;
  sessions: number;
}

const HomeMaestro: React.FC = () => {
  const [groups, setGroups] = useState<Group[]>([]);

  const fetchGroups = async () => {
    const storedGroups = await AsyncStorage.getItem('groups');
    if (storedGroups) {
      setGroups(JSON.parse(storedGroups));
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Grupos</Text>
      {groups.length === 0 ? (
        <View style={styles.messageContainer}>
          <Text style={styles.messageText}>
            En este momento no se ha creado ningún grupo, es una lástima...
          </Text>
        </View>
      ) : (
        <FlatList
          data={groups}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.groupCard}>
              <View style={styles.iconContainer}>
                <Icon name="ellipsis-v" size={18} color="#007bff" />
              </View>
              <Text style={styles.groupName}>{item.groupName}</Text>
              <Text style={styles.subject}>Materia: {item.subject}</Text>
              <Text style={styles.info}>Estudiantes: {item.students}</Text>
              <Text style={styles.info}>Sesiones: {item.sessions}</Text>
            </TouchableOpacity>
          )}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
        />
      )}
    </View>
  );
};

export default HomeMaestro;
