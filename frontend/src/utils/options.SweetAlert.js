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
export {
    alertDelete,
    alertDeleteOk,
    alertDeleteComment,
    alertDeleteCommentOk,
}