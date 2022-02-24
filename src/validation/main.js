import * as Yup from 'yup';

const validationSchema = Yup.object({
    journey:Yup.object({
        source:Yup.string().required("Source cannot be empty"),
        destination:Yup.string().required("Destination cannot be empty"),
        cartype:Yup.string().required("Car Type cannot be empty")
    }),
    contact:Yup.object({
        name:Yup.string().required("Name Cannot be empty")
    })
})

export default validationSchema;