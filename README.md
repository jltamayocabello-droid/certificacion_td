# Vue 3 + Vite: Proyecto de Certificación

🚀 **Front-End Trainee**

Este proyecto forma parte de la ruta de certificación de **Talento Digital para Chile**. Se compone de dos partes fundamentales:
1. **Aplicación de Perfil de Usuario**: Una interfaz interactiva que demuestra el dominio desde las bases de maquetación semántica hasta la gestión de estado global en frameworks modernos.
2. **Material de Repaso**: Un conjunto de ejercicios prácticos detallados en el directorio `/repaso_contenido` que cubren los fundamentos técnicos del entrenamiento.

---

## 🛠️ Stack Tecnológico

- **HTML5 & CSS3**: Maquetación semántica y diseño responsivo.
- **SASS (SCSS)**: Preprocesador para una arquitectura de estilos escalable (Variables, Nesting).
- **Metodología BEM**: Estándar de nomenclatura para clases CSS.
- **JavaScript Vanilla (ES6+)**: Lógica fundamental y manipulación del DOM.
- **Vue 3 (Composition API)**: Framework progresivo para la construcción de interfaces.
- **Pinia**: Gestión de estado global y reactiva.
- **Vite**: Herramienta de construcción y servidor de desarrollo ultra rápido.

---

## 📂 Estructura del Proyecto

```plaintext
├── index.html              # Archivo principal (Vite Entry Point)
├── src/
│   ├── main.js             # Configuración de Vue y Pinia
│   ├── App.vue             # Componente Raíz
│   ├── components/         # Componentes (ProfileCard.vue, TheNavBar.vue)
│   ├── stores/             # Estados globales con Pinia (user.js)
│   └── style.css           # Estilos base/compilados
├── SCSS/
│   └── main.scss           # Código fuente SASS (Variables, Mixins, BEM)
├── repaso_contenido/       # 📚 Ejercicios prácticos de cada lección técnica
├── vite.config.js          # Configuración de Vite/Vue 3
└── package.json            # Dependencias y scripts del proyecto
```

---

## 📝 Funcionalidades Clave

- **Componentización**: Interfaz dividida en componentes desacoplados y reutilizables.
- **Reactividad Global**: Uso de un Store de Pinia para que los cambios de datos (como el nombre de usuario) se reflejen instantáneamente en toda la aplicación (`Card` y `Navbar`).
- **Estilos Profesionales**: Implementación de SASS con arquitectura BEM para evitar colisiones de estilos.
- **Validación de Datos**: Lógica de JavaScript para asegurar que los inputs del usuario sean correctos antes de actualizar el estado.

---

## 📚 Material de Repaso

El directorio `/repaso_contenido` contiene ejercicios específicos realizados durante el entrenamiento, cubriendo:

- Selectores complejos de CSS y Reset Pro.
- Promesas y manejo de Asincronía con `Fetch API`.
- Fundamentos de la Reactividad en Vue 3.

---

## 🚀 Instalación y Uso

1. **Clonar el repositorio.**
2. **Instalar dependencias**:

```bash
npm install
```

3. **Iniciar modo desarrollo**:

```bash
npm run dev
```