# 🛒 Dummy E-Commerce Cart

Este es un proyecto de ejemplo de una aplicación de carrito de compras desarrollada con [Next.js](https://nextjs.org/), [TypeScript](https://www.typescriptlang.org/), y gestionada con [Zustand](https://zustand-demo.pmnd.rs/). Las pruebas unitarias y funcionales están implementadas utilizando [Jest](https://jestjs.io/) y [React Testing Library](https://testing-library.com/).

## 🚀 Características

- **Next.js**: Framework React que permite renderizado del lado del servidor (SSR) y generación de sitios estáticos.
- **TypeScript**: Uso de tipado estático para mejorar la mantenibilidad y robustez del código.
- **Zustand**: Gestión de estado ligera y escalable para React.
- **Jest y Testing Library**: Implementación de tests unitarios y funcionales.
- **Diseño Responsive**: Interfaz adaptada a dispositivos móviles y de escritorio.
- **Componentes Reusables**: Uso de componentes React modulares y reusables.
- **Manejo de Carrito**: Añadir, eliminar, y actualizar productos en el carrito de compras.
- **Persistencia de Estado**: El estado del carrito se persiste en `localStorage`.

## 🛠️ Tecnologías

- **Next.js**
- **TypeScript**
- **Zustand**
- **Jest**
- **React Testing Library**
- **TailwindCSS**
- **pnpm** (para la gestión de dependencias)

## 📦 Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/stevensmain/dummy-ecommerce-cart.git
```

2. Navega al directorio del proyecto:

```bash
cd nombre-del-repo
```

3. Instala las dependencias usando `pnpm`:

```bash
pnpm install
```

## 🏃‍♂️ Ejecución del Proyecto

Para ejecutar la aplicación en modo de desarrollo:

```bash
pnpm dev
```

La aplicación estará disponible en `http://localhost:3000`.

### Build para Producción

Para crear una versión optimizada para producción:

```bash
pnpm build
```

Para ejecutar el servidor en producción:

```bash
pnpm start
```

## 🧪 Ejecución de Tests

Este proyecto incluye tests unitarios y de integración usando Jest y React Testing Library.

Para ejecutar los tests:

```bash
pnpm test
```

Para ejecutar los tests en modo watch (ideal para desarrollo):

```bash
pnpm test:watch
```