# Accounts | Red Link

![application](https://github.com/amdeberHx/rl_ejercicios/blob/main/Cristian_Reyes/hx-rl/accounts_rl.png)

### Ejercicio
```
@GET
REQUEST https://apirest/getCuentas?tipo=”string”&orden=”string”
RESPONSE: {“cuentas”:[{“nroCuenta”:1234, “tipo”:”CA$”},{“nroCuenta”:5678, “tipo”:”CC$”},{“nroCuenta”:9012, “tipo”:”CAu$s”}]}

Diseñe una funcionalidad apta para:
 - Permitir al usuario filtrar cuentas por su tipo y ordenarlas ascendente o descendentemente.
 - Luego mostrar/ocultar, en caso de estar vacío, en un Array o Lista el contenido del RESPONSE
 - Utilizar One-Way/Two-Way Data Binding, Interpolación y Directivas. 
 - Desarrollar un test unitario sencillo para una de las funcionalidades.

(1 Point)
```
### Componentes de la solución
- Se creo el componente **Account** para satisfacer el ejercicio.
- Se creo el servicio **DataService** para la obtención de los datos.
- Se implemento la dependencia **@angular/material** para el manejo de tabla y sus propiedades.
- Se creo **test** para el servicio *DataService*.
- Se creo la directiva **OnlyNumbersDirective** para restringir el tipo de dato admitido en el filtro de tabla.

### Funcionalidad que ofrece la solución
- Filtro de tabla que permite filtrar por número de cuenta, se limito solamente a número de cuenta para la implementación de la directiva *OnlyNumbersDirective*.
- Se permite reordenar la tabla tocado en el encabezado de cada columna.
-----------------------------
- Se crearon alias para el fácil acceso a componentes, servicios y módulos compartidos en la estructura de proyecto planteada.
