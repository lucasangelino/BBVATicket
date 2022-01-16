export const getUserStorage = () => {
    return (
        {
            agente: localStorage.getItem("agent"),
            escritorio: localStorage.getItem("escritorio")
        }
    )
}