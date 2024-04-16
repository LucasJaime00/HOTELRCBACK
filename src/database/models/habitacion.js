import mongoose, {Schema} from "mongoose";

const habitacionSchema = new Schema({
    nombreHabitacion:{
        type: String,
        required: true,
        minLength: 2,
        maxLength: 30,
        unique:true
    },
    precio:{
        type:Number,
        required:true,
        min:100,
        max:10000
    },
    imagen:{
        type:String,
        required:true,
        validate:{
            validator: function(valor){
                //validar el valor con un patron
                return /(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/i.test(valor)
            },
            message: props => `${props.value} no es una url de imagen valida.`
        }
    },
    categoria:{
        type:String,
        required:true,
        enum:['Infusiones','Batidos','Dulce','Salado']
    },
    descripcion_breve:{
        type:String,
        required:true,
        minLength: 10,
        maxLength: 100,
    },
    descripcion_amplia:{
        type:String,
        required:true,
        minLength: 20,
        maxLength: 1000,
    }
})

/
const Habitacion = mongoose.model('habitacion',habitacionSchema)

export default Habitacion;