# parcial-docker-integrado
Segundo Parcial  Implantación de Sistemas
# Parcial Docker Integrado

## Datos del estudiante
- **Nombre:** Alfonso Antonio Cortez Aguilar
- **Expediente:** 25299  
- **Código estudiantil:** CA21-I04-001

## Ejercicio 1 - Servicio Base con Dockerfile

### Archivos creados:
- `server.js` - Servicio Node.js con endpoints / y /health
- `package.json` - Dependencias del proyecto
- `.dockerignore` - Archivos a ignorar en el build
- `Dockerfile` - Configuración del contenedor

### Comandos ejecutados:
```bash
docker build -t parcial-api .
docker run -d -p 3000:3000 parcial-api
