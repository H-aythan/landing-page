import {useState,useEffect} from 'react'
import InputForm from './InputForm'
import { Formik ,Form, Field} from 'formik';

const Formulario = () => {
    const [datosForm,setDtosForm]=useState("");
    const [envio,setEnvio]=useState(false)
    
    useEffect(() => {
        console.log(datosForm);
        
    }, [datosForm])
    return (
        <>
        <Formik
            initialValues={{
                nombre:'',
                correo:'',
                telefono:'',
                asunto:'',
                mensaje:'',
            }}
            validate={(valores)=>{
                let errores={}

                if(!valores.nombre){
                    errores.nombre='Este campo es requerido'
                }else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
                    errores.nombre='El campo solo puede contener letras y espacios'   
                }

                if(!valores.correo){
                    errores.correo='Este campo es requerido'
                }else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
                    errores.correo='Error al ingresar el correo'
                }
                if(!valores.telefono){
                    errores.telefono='Este campo es requerido'
                }else if(isNaN(valores.telefono)){
                    errores.telefono='El campo solo puede contener numeros'
                }
                return errores
            }}
            onSubmit={(valores,{resetForm})=>{
                setDtosForm(valores)
                setEnvio(true)
                resetForm()
                setTimeout(()=>{setEnvio(false)},[3000])
            }}
        >
            {({errors,touched})=>(
                
            <Form className="flex flex-col gap-y-3">
                   
                <InputForm name="nombre" 
                    error={touched.nombre&&errors.nombre}
                />
                
                <InputForm name="correo" 
                    error={touched.correo&&errors.correo}
                />
                <InputForm name="telefono" 
                    error={touched.telefono&&errors.telefono}
                />
                <InputForm name="asunto"/>
                
                <div className="">
                    <p>Mensaje</p>
                    <Field 
                        className={`px-1 text-black rounded w-full focus:outline-none focus:ring-0 focus:border-blue-200 border-2`}
                        
                        name="mensaje" 
                        rows="10" 
                        cols="30"
                        as="textarea"
                        ></Field>
                </div>
                <button type="submit" className="py-1 text-black shadow-inner hover:bg-sky-300 hover:text-white border w-20 bg-blueGray-100 rounded ">
                    Enviar
                </button>
                {envio&&<div className="text-green-500 border-2 w-40 text-md pl-2 border-green-300 rounded">Formulario Enviado</div>}
            </Form>
            )}
    </Formik>
    </>
    )
}

export default Formulario
