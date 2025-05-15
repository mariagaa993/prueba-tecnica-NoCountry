# Prueba Técnica Frontend - Panel de Seguimiento de Equipos (Vista Empresa)

## 📝 Descripción  
Proyecto para que una empresa visualice sus equipos en un panel dinámico e intuitivo, alineado al branding de No Country. Se están utilizando datos simulados.

---

## 🛠️ Tecnologías usadas

- ⚛️ **Next.js**   
- 📜 **TypeScript**   
- 🎨 **Tailwind CSS** 

---

## ⚙️ Características principales

- **Tabs horizontales** para navegar entre equipos.  
- **Visualización de miembros del equipo** con foto, nombre, rol, ubicación.  
- **Insights clave** con título, icono, valor.  
- **Botón “Ver Insights”** que abre un modal con:  
  - Selección de hasta 5 equipos.
  - Ver más insights a medida que se seleccione los equipos. 
  - Precio total según selección.  
  - Botón para Comprar (sin funcionalidad).

---

## 📂 Estructura del proyecto

- `components/` - Componentes reutilizables (Header, Tabs, Dropdown, Insight, Modal, etc.)  
- `utils/mock.ts` - Datos simulados
- `utils/tab.ts` - Para mostrar los tabs 
- `styles/` - Estilos globales (Tailwind)

---

## 📂 Decisiones técnicas

- Para la parte de insight se decidió mostrar un carrousel solo para la versión mobile. No encontré
necesario mostrar el carrousel en tablet y desktop por la cantidad de insights (3). En caso de mostrar
más de 4 el cambio sería mínimo porque es el mismo componente, solo sería habilitar los estilos para
tablet y desktop.
- Dentro del modal se muestra información de más insights que son relevantes para una empresa según
la selección. Se decidió mostrar a medida de la selección para evitar que la persona tenga que salir,
ir al equipo correspondiente y ver los insights de dicho equipo. Es mucho más sencillo para el usuario,
que al hacer la selección tenga información importante a la mano sin tener que rebuscarla facilitando
así, la hora de comprar. 

---

## 🚀 Cómo ejecutar el proyecto

Primero, ejecuta el servidor de desarrollo:

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```
Abrir [http://localhost:3000](http://localhost:3000) para ver la UI.
