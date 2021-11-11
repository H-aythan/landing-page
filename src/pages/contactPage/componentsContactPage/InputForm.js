import {Field} from 'formik'
const InputForm = ({name,error}) => {
    
    return (
        
        <div className="w-full">
            <label htmlFor={name} className="capitalize">
                {name}
                {name!=="asunto"&&" (requerido)"}
            </label><br/>
            <Field 
                className={`px-1 rounded w-full focus:outline-none focus:ring-0 text-black
                    ${!error&&"focus:border-blue-200"} border-2 placeHolder-red-500
                    placeholder-red-500 ${error&&'border-red-500'}
                `}
                type={name==="correo"?'email':'text'} 
                id={name} 
                name={name}
            />
            <div className="text-red-500 ">
                {error}
            </div>
        </div>
    )
}

export default InputForm
