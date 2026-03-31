import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  // State
  const name = ref('Armando Camus')
  const role = ref('Senior Web Developer')

  // Action (Equivalente a tus métodos)
  const setName = (newName) => {
    if (newName?.trim()) name.value = newName
  }

  return { name, role, setName }
})