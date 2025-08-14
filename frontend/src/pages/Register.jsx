import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const Register = () => {

    const nav = useNavigate();
    
    const [data, setData] = useState({
        Nombre: '',
        Apellido: '',
        userName: '',
        email: '',
        password: '',
        confirmPassword: '',
        numeroDocumento: ''
    });
    const noCoinciden = data.confirmPassword.length > 0 && data.password !== data.confirmPassword
    const handleChange = (e) => {
        setData({
                ...data,
                [e.target.name]: e.target.value
            })

    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (data.password === data.confirmPassword) {
                const respuesta = await axios.post("http://localhost:3000/api/Registro", data);
            
                if (respuesta.status === 200) {
                    console.log(data);
                    console.log("registro exitoso");
                    alert("USUARIO CREADO");
                    nav("/login");
                }
            } else {
                alert("Las contraseñas no coinciden");
            }

            {/*CONFIGURAR EL CATCH*/}

        } catch (error) {
            if (error.response?.status === 409) {
                console.log(data);
                console.log("El usuario ya fue registrado");
                alert("El usuario ya fue registrado, redirigiendo a Inicio de sesion");
                nav("/login");
            } else if (error.response?.status === 404) {
                alert("El correo no se encuentra registrado");
                console.log("el usuario no existe");
                console.log(data);
            } else if (error.response?.status === 401) {
                alert("La contraseña es incorrecta");
                console.log("la contraseña es incorrecta");
                console.log(data);
            } else {
                console.error("Error inesperado:", error);
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
            Registrate
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4 w-full">
            <input
                type="text"
                placeholder="Nombre"
                onChange={handleChange}
                name="Nombre"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-3 focus:ring-blue-500 outline-none"
            />
            <input
                type="text"
                placeholder="Apellido"
                name="Apellido"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-3 focus:ring-blue-500 outline-none"
            />
            <input
                type="text"
                placeholder="Numero de documento"
                name="numeroDocumento"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-3 focus:ring-blue-500 outline-none"
            />
            <input
                type="text"
                placeholder="Nombre de Usuario"
                name="userName"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-3 focus:ring-blue-500 outline-none"
            />
            <input
                type="email"
                placeholder="Correo electrónico"
                onChange={handleChange}
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-3 focus:ring-blue-500 outline-none"
            />
            <input
                type="password"
                placeholder="Contraseña"
                name="password"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-3 focus:ring-blue-500 outline-none"
            />
            <input
                type="password"
                placeholder="Confirmar Contraseña"
                name="confirmPassword"
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-3 focus:ring-blue-500 outline-none"
            />
            {noCoinciden && (
                <div
                style={{
                textAlign:"center",
                background: "#f44336",
                color: "#fff",
                padding: "5px 10px",
                borderRadius: "5px",
                fontSize: "14px",
                whiteSpace: "nowrap",
                boxShadow: "0px 2px 6px rgba(0,0,0,0.2)"
                }}
                >
                    ⚠️ LAS CONTRASEÑAS NO COINCIDEN ⚠️
                </div>
            )}
            <button
                type="submit"
                className="w-full bg-gradient-to-br from-blue-600 to-blue-800 hover:scale-105 text-white py-2 rounded-lg font-semibold transition duration-400"
            >
                Registrarme
            </button>
            </form>

            <p className="mt-4 text-sm text-gray-600 text-center">
            Ya tengo una cuenta. {" "}
            <a onClick={() => {nav("/login")} } className="text-blue-600 hover:underline cursor-pointer">
                Iniciar sesión
            </a>
            </p>

            <p className="mt-2 text-xs text-gray-400 text-center">
            Configuración de cookies
            </p>
        </div>
        </div>
    </div>
    );
}
