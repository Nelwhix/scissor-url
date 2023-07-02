import validator from 'validator'

export default class FormValidator {
    public validations: ValidationRule[]

    constructor(validations: ValidationRule[]) {
        this.validations = validations
    }

    valid() {
        const validation = {}
        this.validations.map(rule => (
            validation[rule.field] = {
                isInvalid: false,
                message: ''
            }
        ))

        return { isValid: true, ...validation}
    }

    validate(state) {
        let validation = this.valid()
        this.validations.forEach(rule => {
            if (!validation[rule.field].isInvalid) {
                const field_value = state[rule.field].toString()
                const args = rule.args || []
                const validation_method = typeof rule.method === 'string' ? 
                    validator[rule.method] : rule.method
            }
        })
        return validation
    }
}