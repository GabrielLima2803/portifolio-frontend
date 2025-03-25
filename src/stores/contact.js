import { defineStore } from "pinia";
import ContactService from "@/services/contact";

export const useContactStore = defineStore('contact', () => {

  const contactService = new ContactService
  async function sendMessage(dataMessage) {
      try {
        const response = await contactService.sendMessage(dataMessage)
        return response.data
      } catch (error) {
        console.error(error)
      }
  }

  return {
    sendMessage
  }
})