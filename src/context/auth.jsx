import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../services/api'; // Ajuste o caminho da sua API se necessário

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const usuarioSalvo = localStorage.getItem('@dio:user');
    return usuarioSalvo ? JSON.parse(usuarioSalvo) : null;
  });

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (loginData) => {
    try {
      setLoading(true);
      // 1. Busca os usuários filtrando pelo e-mail informado
      const { data } = await api.get(`/users?email=${loginData.email}`);
      
      if (data.length > 0) {
        const usuarioEncontrado = data[0]; // Pega o primeiro usuário do array

        // 2. Compara a senha do banco (password) com a do formulário (senha)
        if (usuarioEncontrado.password === loginData.password) {
           // 🔥 2. SALVA NO LOCALSTORAGE: Guarda os dados do usuário como texto
          localStorage.setItem('@dio:user', JSON.stringify(usuarioEncontrado));
          setUser(usuarioEncontrado); // Armazena os dados do usuário no estado global
          
          alert(`Olá ${usuarioEncontrado.name}, você está logado(a)!`);
          navigate("/Feed");
          return;
        }
      }
      alert("Email ou senha inválidos");
    } catch (error) {
      console.error(error);
      alert("Houve um erro ao tentar fazer login, tente novamente");
    } finally {
      setLoading(false);
    }
  };

 const handleSignOut = () => {
    // 🔥 3. LIMPA O LOCALSTORAGE: Remove os dados ao clicar em "Sair"
    localStorage.removeItem('@dio:user');
    setUser(null);
    navigate('/login');
  };

  // 🔥 O RETURN DO SEU ARQUIVO FICA AQUI:
  return (
    <AuthContext.Provider value={{ user, loading, handleLogin, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};
