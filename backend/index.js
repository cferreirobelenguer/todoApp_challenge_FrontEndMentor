const express = require('express')
const fs = require('fs')


const app = express()
app.use(express.json())

var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Configuración del CORS
app.use((req,res,next)=>{
    //Permitimos el control de acceso para que cualquier cliente pueda hacer peticiones ajax
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers', 'Authorization, x-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Controll-Allow-Request-Method');
    //Permitimos métodos http
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT , DELETE');
    next();
});

const getData = () => {
    //Coge los datos existentes en data.json
    const jsonData = fs.readFileSync('data.json')
    return JSON.parse(jsonData)    
}
const saveData = (data) => {
    //Almacena los datos en data.json
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync('data.json', stringifyData)
}

app.post('/add/', (req, res) => {
    //Los datos existentes se almacenan en existData
    const existData = getData()
    
    //Se cogen los datos del cuerpo de la petición en la variable listadoData
    const listadoData = req.body
    
    //Si no hay datos hay un error 401
    if (listadoData.data==null) {
        return res.status(401).send({error: true, msg: 'data missing'})
    }
    
    //Si es todo correcto se introducen los datos en el array de data.json
    existData.push(listadoData.data)
    
    saveData(existData);
    res.send({success: true, msg: 'data added successfully'})
})

//Devuelve todos los datos del array de data.json
app.get('/list/', (req, res) => {
    const datosAlmacenados = getData()
    res.send(datosAlmacenados)
})

/*Método de modificar, busca por el contenido del dato pasado por url*/
app.patch('/update/:data', (req, res) => {
    //Coge el dato a buscar por url
    const info = req.params.data
    //Coge los nuevos datos
    const Data = req.body
    //Coge los datos de data.json
    const existData = getData()
    //chequea si el dato existe o no     
    const findExist = existData.find( contenido => contenido === info)
    if (!findExist) {
        return res.status(409).send({error: true, msg: 'data not exist'})
    }
    //Filtra el contenido distinto al que queremos modificar
    const updateData = existData.filter( contenido => contenido!== info )
    //Se modifica el dato juntandolo con el contenido distinto al que queremos modificar
    updateData.push(Data.data)
    
    saveData(updateData)
    res.send({success: true, msg: 'User data updated successfully'})
})
/*Método de borrar, busca por el contenido del dato pasado por url*/
app.delete('/delete/:data', (req, res) => {
    const info = req.params.data
    //Code los datos actuales del data.json
    const existData = getData()
    //Busca si el dato pasado por url está dentro de data.json
    const filterData = existData.filter( contenido => contenido!== info )
    if ( existData.length === filterData.length ) {
        //En caso de que no exista el dato hay un error 409
        return res.status(409).send({error: true, msg: 'data does not exist'})
    }
    //En caso de que si exista, se elimina el dato
    saveData(filterData)
    res.send({success: true, msg: 'User removed successfully'})
    
})



//Configuración de puerto
app.listen(5000, () => {
    console.log('Server runs on port 5000')
})