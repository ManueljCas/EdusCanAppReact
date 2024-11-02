import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface User {
  email: string;
  password: string;
  role: string;
  name: string;
  profileImage: string;
  university?: string;
  group?: string; // Campo de grupo agregado
}

interface UserContextType {
  user: User | null;
  registerUser: (
    email: string,
    password: string,
    role: string,
    name: string,
    profileImage: string,
    university: string,
    group: string // Agregar el parámetro de grupo en la firma
  ) => void;
  loadUser: (email: string) => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const registerUser = async (
    email: string,
    password: string,
    role: string,
    name: string,
    profileImage: string,
    university: string,
    group: string // Agregar el parámetro de grupo
  ) => {
    const newUser = { email, password, role, name, profileImage, university, group };
    setUser(newUser);
    await AsyncStorage.setItem(`user_${email}`, JSON.stringify(newUser)); // Guarda con clave única
    console.log("Usuario registrado y guardado:", newUser);
  };

  const loadUser = async (email: string) => {
    try {
      const storedUser = await AsyncStorage.getItem(`user_${email}`);
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        console.log("Usuario cargado desde AsyncStorage:", parsedUser);
      } else {
        console.log("No se encontró usuario en AsyncStorage.");
      }
    } catch (error) {
      console.error("Error al cargar usuario desde AsyncStorage:", error);
    }
  };

  useEffect(() => {
    const loadLastUser = async () => {
      const lastUser = await AsyncStorage.getItem('lastUser');
      if (lastUser) {
        loadUser(lastUser);
      }
    };
    loadLastUser(); // Carga el último usuario al montar el contexto
  }, []);

  return (
    <UserContext.Provider value={{ user, registerUser, loadUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser debe ser usado dentro de un UserProvider');
  return context;
};
