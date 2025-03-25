<script setup>
import { ref } from "vue";
import { useContactStore } from "@/stores/contact";

const name = ref("");
const email = ref("");
const message = ref("");

const contactStore = useContactStore();

const snackbar = ref(false);
const snackbarMessage = ref("");
const snackbarColor = ref("");

const submitMessage = async (e) => {
  e.preventDefault();
  const dataMessage = {
    name: name.value,
    email: email.value,
    message: message.value,
  };

  try {
    await contactStore.sendMessage(dataMessage);
    snackbarMessage.value = "Mensagem enviada com sucesso!";
    snackbarColor.value = "success";
    snackbar.value = true;

    name.value = "";
    email.value = "";
    message.value = "";
  } catch (error) {
    console.error("Erro ao enviar mensagem:", error);
    snackbarMessage.value = "Erro ao enviar mensagem.";
    snackbarColor.value = "error";
    snackbar.value = true;
  }
};
</script>

<template>
  <div class="container">
    <h3 class="title">{{ $t('SenMessageContact') }}</h3>
    <form class="form" @submit="submitMessage">
      <div class="form-group">
        <input type="text" id="name" class="input" v-model="name" required placeholder="Your Name" />
        <label for="name" class="label">{{ $t('nome') }}</label>
      </div>
      <div class="form-group">
        <input type="email" id="email" class="input" v-model="email" required placeholder="Your Email" />
        <label for="email" class="label">Email</label>
      </div>
      <div class="form-group">
        <textarea id="message" class="input textarea" v-model="message" placeholder="Write your Message" required></textarea>
        <label for="message" class="label">{{ $t('Mensagem') }}</label>
      </div>
      <button type="submit" class="submit-btn">{{ $t('SendMessage') }}</button>
    </form>

    <v-snackbar
      v-model="snackbar"
      :color="snackbarColor"
      location="top right"
      timeout="2000"
      class="color-white"
    >
    <p class="color-white">
      {{ snackbarMessage }}
    </p>
    </v-snackbar>
  </div>
</template>

<style scoped>
.container {
  border-radius: 1rem;
  padding: 1rem;
}
.title {
  text-align: center;
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
  color: #f0f2f4;
  font-weight: 600;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.form-group {
  position: relative;
}
.input {
  width: 100%;
  background: transparent;
  border: 2px solid #888b91;
  padding: 0.75rem;
  border-radius: 0.75rem;
  font-size: 1rem;
  color: #babec4;
  outline: none;
}
.textarea {
  height: 15rem;
  resize: none;
  margin-bottom: 0.6rem;
}
.label {
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: #151c28;
  border-radius: 100%;
  padding: 0 5px;
  font-size: 0.85rem;
  color: #babec4;
}
.submit-btn {
  display: inline-block;
  width: 200px;
  background-color: #a395e9;
  color: #151c28;
  border: none;
  padding: 0.75rem;
  border-radius: 0.8rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
  align-self: center;
}
.color-white {
  color: white;
}
.submit-btn:hover {
  background-color: #8a7ed6;
}
@media (max-width: 768px) {
  .input {
    font-size: 0.9rem;
    padding: 0.5rem;
  }
  .textarea {
    height: 10rem;
  }
  .submit-btn {
    width: 100%;
    max-width: 250px;
  }
}
</style>
