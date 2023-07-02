
interface ValidationRule {
    field: string
    method: () => boolean
    args: [{min: number, max: number}]
    validWhen: boolean
    message: string
}