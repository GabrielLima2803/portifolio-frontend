import axios from "axios";

class ContactService {
    async sendMessage(dataMessage) {
        const response = await axios.post("/contacts", {...dataMessage})
        return response
    }
}

export default ContactService