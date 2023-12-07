const alertDelete = (
{ 
    title: "Quieres eliminar el Post?",
    text: "Si lo eliminas no se puede recuperar!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#dc3545",
    cancelButtonColor: "#198754",
    confirmButtonText: "Eliminar"
})

const alertDeleteOk = (
    {
        title: "Eliminado!",
        text: "Post Eliminado Correctamente...",
        confirmButtonColor: "#dc3545",
        icon: "success"
        }
)
export {
    alertDelete,
    alertDeleteOk,
}