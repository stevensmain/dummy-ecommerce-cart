# 🛒 Dummy E-Commerce Cart - Stivens Carrasquel

# Indicaciones de Desarrollo

Desarrollar una aplicación e-commerce sencilla utilizando React o Nextjs, que consuma
una API para mostrar productos y agregarlos a un carrito de compras. La aplicación debe
permitir a los usuarios ver el detalle de cada producto, añadir productos a un carro de
compras, y filtrar productos basándose en ciertos criterios.

Casos de uso:
1. Página Listado de Productos
- Consumir la API DummyJSON para obtener y mostrar un listado de productos y páginarlos.
- Implementar la funcionalidad de filtrado para que los usuarios puedan filtrar productos por:
    ○ Precio (price)
    ○ Porcentaje de descuento (discountPercentage)
    ○ Calificación (rating)
    ○ Stock disponible (stock)
    ○ Marca (brand)
    ○ Categoría (category)
2. Página Detalle de Producto
- Permitir a los usuarios ver el detalle de cada producto al seleccionarlo, mostrando información detallada del producto y agregarlo al carrito.
3. Carro de Compras
- Implementar un carro de compras donde los usuarios puedan añadir productos desde el listado y detalle. Permitir a los usuarios ver, actualizar la cantidad, o eliminar productos del carro y precio total. Implementar una solución de gestión del estado para manejar el carrito de compras que persiste la información.

## 🚀 Características

- **Next.js**: Framework React que permite renderizado del lado del servidor (SSR) y generación de sitios estáticos.
- **TypeScript**: Uso de tipado estático para mejorar la mantenibilidad y robustez del código.
- **Zustand**: Gestión de estado ligera y escalable para React.
- **Jest y Testing Library**: Implementación de tests unitarios y funcionales.
- **Diseño Responsive**: Interfaz adaptada a dispositivos móviles y de escritorio.
- **Componentes Reusables**: Uso de componentes React modulares y reusables.
- **Manejo de Carrito**: Añadir, eliminar, y actualizar productos en el carrito de compras.
- **Persistencia de Estado**: El estado del carrito se persiste en `localStorage`.

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