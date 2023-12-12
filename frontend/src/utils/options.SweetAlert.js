const colors = 
   { 
    eliminar: "#dc3545",
    cancelar: "#198754",
    ok: "#198754",

}


const alertDelete = (
{ 
    title: "Quieres eliminar el Post?",
    text: "Si lo eliminas no se puede recuperar!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: colors.eliminar,
    cancelButtonColor: colors.cancelar,
    confirmButtonText: "Eliminar"
})

const alertDeleteOk = (
    {
        title: "Eliminado!",
        text: "Post Eliminado Correctamente...",
        confirmButtonColor: colors.ok,
        icon: "success"
        }
)
const alertDeleteCommentOk = (
    {
        title: "Eliminado!",
        text: "Comentario Eliminado Correctamente...",
        confirmButtonColor: colors.ok,
        icon: "success"
        }
)

const alertDeleteComment = (
    { 
        title: "Quieres eliminar el Comentario?",
        text: "Si lo eliminas no se puede recuperar!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: colors.eliminar,
        cancelButtonColor: colors.cancelar,
        confirmButtonText: "Eliminar"
    })

const alertCreateCommentOk =(
    {
        title: `Crear Comentario` ,
        text: `Comentario Creado Correctamente`,
        icon: "success",
        timer: 2000
      }
    
) 

const alertCreateComment = (
    {
        icon: "error",
        title:"Error al Crear Comentario",
        text: "El Comentario debe ser minimo 4 caracteres",
        timer: 2000
    }
)

const alertCreatePostOk =(
    {
        title: `Crear Post` ,
        text: `Post Creado Correctamente`,
        icon: "success",
        timer: 2000
      }
    
)

const alertCreatePost = (
    {
        icon: "error",
        title:"Error al Crear Post",
        text: "El title , description e imagen son Obligatorios",
        timer: 2000
    }
)
export {
    alertDelete,
    alertDeleteOk,
    alertDeleteComment,
    alertDeleteCommentOk,
    alertCreateCommentOk,
    alertCreateComment,
    alertCreatePost,
    alertCreatePostOk,
}