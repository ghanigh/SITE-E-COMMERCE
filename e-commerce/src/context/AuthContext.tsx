import React, { createContext, useState, useEffect } from 'react'

// URL
import { URL } from '../constants/URLS'

// Crée un contexte d'authentification
export const AuthContect = createContext()

export const AuthProvider = ({ Children }) => {
    // Etat pour suivre si l'authntification est en cour
const  [isLoading, setIsLoading] = useState(false)

// Etat pour stocker les informations de l'utilisateur connecté
const  [user, setUser] = useState(null)

// Fonction pour gérer l'authentification de l'utilisateur
const login = async () => {
    //
}

return (
    <AuthContext.Provider value={{ user, isLoading }}>
        {Children}
    </AuthContext.Provider>
)
}