const OK = "ok!"
const notFound = "not found"


export const messageStatus = (length: number) => length ? OK : notFound;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const messageFindOne = (prop: any) => prop ? OK : notFound;