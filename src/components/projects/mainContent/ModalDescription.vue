<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  modelValue: Boolean, 
  name: String,
  description: String,
});

const emit = defineEmits(['update:modelValue']);

const closeModal = () => {
  emit('update:modelValue', false);
};
</script>

<template>
  <v-dialog :model-value="props.modelValue" max-width="500" @update:modelValue="closeModal">
    <v-card>
      <v-card-title class="text-h5">
        {{ props.name }}
      </v-card-title>
      <v-card-text>
        {{ props.description }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="closeModal">Fechar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
