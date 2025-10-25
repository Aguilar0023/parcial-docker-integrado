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

## Ejercicio 2 - Persistencia con PostgreSQL

### Comandos ejecutados:
- docker volume create db_data
- docker run -d postgres:15 con volumen db_data
- Tabla 'estudiantes' creada y datos insertados
- Datos persisten tras reinicio del contenedor

### Verificaciones:
- Volumen db_data creado correctamente
- PostgreSQL corriendo en puerto 5432
- Datos insertados: Alfonso Antonio Cortez Aguilar, 25299, CA21-I04-001
- Persistencia verificada: datos mantienen tras docker restart

## Ejercicio 3 - Integración completa con Docker Compose

### Archivos creados:
- `docker-compose.yml` - Configuración de servicios integrados
- `.env` - Variables de entorno para conexión a DB

### Comandos ejecutados:
```bash
docker compose up -d --build
### Resultado final:
```json
{"estudiante":{"nombre":"Alfonso Antonio Cortez Aguilar","expediente":"25299","codigo_estudiantil":"CA21-I04-001"},"datos_db":[{"id":1,"nombre":"Alfonso Antonio Cortez Aguilar","expediente":"25299","codigo_estudiantil":"CA21-I04-001"}],"message":"Conexión a PostgreSQL exitosa"}
