let tareas = [
    {
        getId:1,
        description:'Lavar la ropa',
        completed:false},
    {
        getId:2,
        description:'Limpiar el piso',
        completed:false},
    {
        getId:3,
        description:'Ordenar los muebles',
        completed:false}
];

function addTarea(){
    const dataTarea = document.querySelector('#nuevaTarea');
    const añadirId = tareas[tareas.length - 1]
    newId = añadirId.getId + 1
    let añadir = {
                    getId:newId,
                    description:dataTarea.value,
                    completed:false
                }
    tareas.push(añadir)
    renderList()
    totalInfo()
    realizadas()
    dataTarea.value = ''
}
function renderList(){
    let html = ''
    let actualizarTareas = document.getElementById('tareaAñadida')
    tareas.forEach(function(value){
        html += `<div class="row">
                        <div class="col">${value.getId}</div>
                        <div class="col">${value.description}</div>
                        <div class="col"><input type="checkbox" id="checkIt${value.getId}" onclick="modifyTask(${value.getId})"></div>
                        <div class="col cursor"><i class="fa-solid fa-x" onclick="deleteTask(${value.getId})"></i></div>
                    </div>` 
    })
    actualizarTareas.innerHTML = html
}
function totalInfo(){
    const totalInfo = document.getElementById('totalNum').innerHTML = tareas.length
    return totalInfo
}
function realizadas(){
    const realizadas = tareas.filter( tareas => tareas.completed == true )
    document.getElementById('realizadasNum').innerHTML = realizadas.length
}
function borrar(id){    
    const borrar = tareas.findIndex((ele) => ele.getId == id) 
    tareas.splice(borrar, 1) 
    renderList()
    totalInfo()
    realizadas()    
}
function modificar(id){
    if(document.getElementById('checkIt' + id).checked === true){
        const cambios = tareas.forEach(adiciones => {
            if (adiciones.getId === id) {
                adiciones.completed = true
            }
            return adiciones;
          });
    }
    else{
        const cambios = tareas.forEach(adiciones => {
            if (adiciones.getId === id) {
                adiciones.completed = false
            }
            return adiciones;
          });

    }
    realizadas()        
}
renderList()
totalInfo()