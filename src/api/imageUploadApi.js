import axios from "axios";

const imageUpload = {
    upload(file) {
        const data = new FormData();
        data.append('file', file);
        data.append("upload_preset", "genimg")
        data.append("tags", "browser_upload")
        const url = `https://api.cloudinary.com/v1_1/genfptu/image/upload`;
        return axios.post(url, data);
    }
};

export default imageUpload;
