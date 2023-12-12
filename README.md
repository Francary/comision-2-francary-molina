# Proyecto Final Epica Tramo III

Problemática: Creación de Plataforma Interactiva de Viajes con Registro y Login

### 1. Backenk

    - BD Mongo con mongoose
    - Uso de Vairiables de Entorno
    - Controllers
    - Modelos de User , Post , Comment
    - Validaciones con express-validator


    - Server inicia con npm run dev
---
### 2. Frontend

    - React Vite
    - Bootstrap
    - Login / Logout ---> Solo esta visible cuando corresponde
```js
   <button 
        onClick={auth? logout : ""}
        className={`btn ${auth? "btn btn-danger btn-sm" : "btn btn-success btn-sm"} `}
        type="submit">{auth? "LOGOUT" : <NavLink className="nav-link " aria-current="page" to="/user/login">LOGIN</NavLink>}
    </button>
```

    - Register ---> Si Estas Logegado no se ve la Opcion Register
```js
    <NavLink className={`nav-link ${auth? "d-none": "d-block"}`}  aria-current="page" to="/user/register">REGISTER</NavLink>
```
    - Post . Solo el Autor del Post puede eliminarlo o editarlo
    - Comment . Solo el Autor del Comentario puede eliminarlo o editarlo


    
> Autor Francary Molina 