// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const existingProperties = (body: any) => {
    const propsToEdit = {};
    for (const [key, value] of Object.entries(body)) {
        if(value) propsToEdit[key] = value
    }
    return propsToEdit;
}