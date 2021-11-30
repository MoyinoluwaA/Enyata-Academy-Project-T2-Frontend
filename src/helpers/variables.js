export const baseUrl = process.env.VUE_APP_BASE_URL
export const authenticatedUser = 'authenticatedUser'
export const lettersRegex = /^[a-zA-Z]*$/g
export const emailRegex = /\b[\w-]+@[\w-]+\.\w{2,4}\b/gi
export const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm