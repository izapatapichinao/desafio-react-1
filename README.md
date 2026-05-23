# Pizzería Mamma Mía 🍕

## Descripción

Este proyecto es una aplicación web interactiva para una pizzería, construida con React y Vite. El objetivo principal de esta etapa es la creación de una interfaz de usuario modular, utilizando componentes funcionales, paso de propiedades (`props`) y renderizado condicional.

## Funcionalidades y Requerimientos Implementados

El desarrollo cubre los siguientes requerimientos estructurales y lógicos:

### 1. Arquitectura Principal (App)

El componente raíz integra la vista principal, asegurando que la barra de navegación y el pie de página se mantengan constantes mientras el contenido central fluye de manera lógica.

### 2. Navegación Dinámica (Navbar)

La barra de navegación simula un sistema de autenticación de usuarios mediante un estado estático (`token`).

- **Usuario autenticado:** Se despliegan las opciones de "Profile" y "Logout".
- **Usuario invitado:** Se despliegan las opciones de "Login" y "Register".
- Los botones de "Home" y el total del carrito de compras permanecen siempre visibles, con el valor monetario formateado bajo el estándar local (separador de miles).

### 3. Encabezado Visual (Header)

Incluye un banner de bienvenida posicionado en la vista principal, destacando el nombre de la pizzería ("¡Pizzería Mamma Mia!") y su eslogan, estilizado con una imagen de fondo adaptativa y filtros oscuros para garantizar el contraste y la legibilidad del texto.

### 4. Tarjetas de Productos (CardPizza)

Se implementó un componente reutilizable para la exhibición de cada variedad de pizza. Este componente recibe y procesa datos dinámicos a través de `props`:

- Nombre del producto.
- Listado de ingredientes.
- Precio (formateado dinámicamente).
- Imagen representativa.
  La vista principal renderiza múltiples instancias de estas tarjetas (Napolitana, Española, Pepperoni) organizadas en una grilla responsiva.

### 5. Pie de Página (Footer)

Un bloque inferior que cierra la interfaz, mostrando los derechos de autor correspondientes al año y nombre de la marca.

## Tecnologías Utilizadas

- **Frontend:** React (Componentes funcionales y JSX)
- **Herramienta de Construcción:** Vite.js
- **Estilos:** Bootstrap 5 y CSS3 nativo (Flexbox, background-blend-mode)
- **Iconografía:** FontAwesome / Emojis nativos

## Instrucciones de Instalación y Ejecución

Sigue estos pasos para correr el proyecto en tu entorno local:

1.  Clona este repositorio en tu máquina local.
2.  Abre una terminal en la raíz del proyecto.
3.  Instala las dependencias necesarias ejecutando el comando:
    `npm install`
4.  Levanta el servidor de desarrollo local ejecutando:
    `npm run dev`
5.  Abre tu navegador web e ingresa a la dirección indicada en la terminal (por defecto suele ser `http://localhost:5173`).
