# CDI Backend

Backend para sistema CDI desarrollado con Node.js, Express, GraphQL y MongoDB/MySQL.

## Requisitos

- Node.js v22.18.0 o superior
- npm
- MySQL
- PM2 (instalado globalmente o como dependencia)

## Configuración

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Configurar variables de entorno:
   ```bash
   cp .env.example .env
   ```
   Editar `.env` con tus valores.

3. Configurar base de datos MySQL:
   - Crear base de datos `cdi_database`
   - Verificar credenciales en `src/config/database.js`

## Desarrollo

```bash
npm run dev
```

## Build para producción

```bash
npm run build
```

Transpila el código ES6+ a ES5 en el directorio `dist/`.

## Despliegue con PM2

### Desarrollo
```bash
npm run pm2:dev
```

### Producción
```bash
npm run deploy
```

Este comando ejecuta:
1. `npm run build` - Transpilación
2. `npm run pm2:prod` - Inicia PM2 en modo producción

### Comandos PM2 útiles

```bash
# Ver estado
npm run pm2:status

# Ver logs
npm run pm2:logs

# Reiniciar
npm run pm2:restart

# Detener
npm run pm2:stop

# Eliminar
npm run pm2:delete
```

## Configuración PM2

La configuración de PM2 está en `ecosystem.config.js`:
- Modo: cluster
- Instancias: 1 (ajustable)
- Reinicio automático
- Logs en directorio `logs/`
- Límite de memoria: 1GB

## Estructura del proyecto

```
├── src/              # Código fuente
├── dist/             # Código transpilado (generado)
├── logs/             # Logs de aplicación (generado)
├── ecosystem.config.js # Configuración PM2
└── package.json
```

## Notas

- El build usa Babel con presets `env` y `stage-3`
- Se incluye `babel-polyfill` para compatibilidad
- PM2 maneja el proceso en producción con reinicios automáticos
- Asegúrate de que MySQL esté corriendo antes de desplegar