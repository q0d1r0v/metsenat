<script setup lang="ts">
// imports
import { ref } from "vue"
import { Checkbox } from "vue-recaptcha"
import { http } from "../../utils/axios"
import { useRouter } from "vue-router"

// import uic
import UICButton from "../../components/uic/button.vue"
import UICInput from "../../components/uic/input.vue"

// types
interface IFormType {
    username: string
    password: string
}

// router
const router = useRouter()

// data
const form = ref<IFormType>({
    username: '',
    password: ''
})
const checked = ref<string>('')
const theme = ref<'light' | 'dark'>('light')
const waiting = ref<boolean>(false)

async function sendForm() {
    try {
        waiting.value = true
        const { data } = await http.post("/auth/login/", {
            username: form.value.username,
            password: form.value.password
        })
        localStorage.setItem('access_token', data.access)
        router.push('/')
    } catch (err: any) {
        console.log(err)
        alert(err?.data?.message || "Kirishda xatolik yuz berdi!")
    } finally {
        waiting.value = false
    }
}

</script>

<template>
    <div class="w-full h-full bg-[#F5F5F7] flex items-center justify-center">
        <div>
            <div class="mb-[48px] flex items-center justify-center">
                <img alt="#metsenat_logo" src="../../assets/metsenat-logo.png" class="w-[314px]" />
            </div>
            <div class="w-[379px] h-[456px] p-[32px] bg-[#fff] rounded-xl">
                <span class="text-[#28293D] text-2xl font-bold">
                    Kirish
                </span>
                <div class="mt-11">
                    <div>
                        <span class="text-xs font-bold">LOGIN</span>
                        <UICInput v-model="form.username" placeholder="Login" size="md" />
                    </div>
                    <div class="mt-5">
                        <span class="text-xs font-bold">PAROL</span>
                        <UICInput v-model="form.password" placeholder="Parol" size="md" type="password" />
                    </div>
                    <div class="mt-5 w-full flex items-center justify-center">
                        <Checkbox :key="theme" v-model="checked" :theme="theme" />
                    </div>

                    <div class="mt-5">
                        <UICButton color="primary" size="lg"
                            :disabled="!checked || !form.username || !form.password || waiting" @click="sendForm">
                            Kirish
                        </UICButton>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>