import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/ContextUser";
import axios from "axios";

export const Login = () => {
    
    const nav = useNavigate();
    const { user, setUser, setLogueado } = useUserContext();

    const [data, setData] = useState({
        userName: '',
        password: ''
    });

    const handleChange = (e) => {
        setData({
                ...data,
                [e.target.name]: e.target.value
            })

    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const respuesta = await axios.post("http://localhost:3000/api/Login", data);
            if (respuesta.status == 200) {
                setLogueado(true)
                setUser(respuesta.data.user)
                console.log(data)
                console.log("logueo exitoso");
                alert("SESION INICIADA")
                nav("/notes")
            }
        } catch (error) {
            if (error.response?.status == 404) {
                alert("El usuario no se encuentra registrado")
                console.log("el usuario no existe")
                console.log(data)
            } else if (error.response?.status == 401) {
                alert("La contraseña es incorrecta")
                console.log("la contraseña es incorrecta")
                console.log(data)
            }
            
        }
    }

    return (
    <div className="flex min-h-screen">
      {/* Lado izquierdo con imagen */}
        <div className="hidden md:block w-2/3">
        <img
            src="/src/assets/fondo.jpg"
            alt="Fondo"
            className="w-full h-full object-cover"
        />
        </div>

      {/* Lado derecho con formulario */}
        <div className="w-full md:w-1/3 flex items-center justify-center bg-white shadow-2xl/20">
        <div className="flex flex-col items-center max-w-md w-full p-8">
            <h1 className=" text-4xl font-Newake mb-6 text-gray-800">
            Inicia sesión
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <input
                type="text"
                placeholder="Nombre de usuario"
                onChange={handleChange}
                name="userName"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-3 focus:ring-blue-500 outline-none"
            />
            <input
                type="password"
                placeholder="Contraseña"
                name="password"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-3 focus:ring-blue-500 outline-none"
            />
            <button
                type="submit"
                className="w-full bg-gradient-to-br from-blue-600 to-blue-800 hover:scale-105 text-white py-2 rounded-lg font-semibold transition duration-400"
            >
                Entrar
            </button>
            </form>

            <p className="mt-4 text-sm text-gray-600 text-center">
            ¿Todavía no tienes una cuenta?{" "}
            <a onClick={() => {nav("/register")} } className="text-blue-600 hover:underline cursor-pointer">
                Regístrate
            </a>
            </p>
        </div>
        </div>
    </div>
    );
}
