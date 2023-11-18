import Joi from 'joi'

export const validar = paciente => {
    const pacienteSchema = Joi.object({
        nombre: Joi.string().min(3).max(30).required(),
        edad: Joi.number().min(0).max(100).required(),
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    })

    const { error } = pacienteSchema.validate(paciente)
    if (error) {
        return { result: false, error }
    }
    return { result: true }
}
