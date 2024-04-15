interface User {
    username: string;
    email: string;
  }
  
  let currentUser: User | null = null;
  
  export const authService = {
    login: async (email: string, password: string): Promise<User | null> => {
      // Appel à l'API ou traitement côté client pour l'authentification
      // Exemple simple : vérification factice des identifiants
      if (email === 'test@example.com' && password === 'password') {
        currentUser = {
          username: 'testuser',
          email: email,
        };
        return currentUser;
      } else {
        return null;
      }
    },
  
    logout: async (): Promise<void> => {
      // Suppression de l'utilisateur actuel
      currentUser = null;
    },
  
    getCurrentUser: (): User | null => {
      // Retourne l'utilisateur actuellement connecté
      return currentUser;
    },
  
    isAuthenticated: (): boolean => {
      // Vérifie si un utilisateur est connecté
      return currentUser !== null;
    },
  };
  