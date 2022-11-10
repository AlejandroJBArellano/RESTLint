// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const existingProperties: any = (body: any) => {
    // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
    let propsToEdit: any;
    for (const [key, value] of Object.entries(body)) {
        if(value) propsToEdit[key] = value
    }
    return propsToEdit;
}