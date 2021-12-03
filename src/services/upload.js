import api from './access'

const UploadService = () => {
    const fileUpload = async file => {
        return api.post('/upload', file, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }

    return {
        fileUpload
    }
}

export default UploadService()
