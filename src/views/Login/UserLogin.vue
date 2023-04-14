<!---->
<template>
    <Particles id="tsparticles" :particlesInit="particlesInit" :options="options" class="w-full h-full -z-10 absolute" />
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8 bg-cyan-300 p-5 z-10">
            <a-form :model="loginState" @finish="handleFinish" @finishFailed="handleFinishFailed">
                <a-form-item label="邮箱" name="email" :rules="[{ required: true, message: '请输入你的邮箱' }]">
                    <a-input v-model:value="loginState.email" placeholder="Your Email">
                        <template #prefix>
                            <IconFont name="icon-email"></IconFont>
                        </template>
                    </a-input>
                </a-form-item>
                <a-form-item label="密码" name="pwd" :rules="[{ required: true, message: '请输入你的密码' }]">
                    <a-input v-model:value="loginState.pwd" placeholder="Your Password" type="password">
                        <template #prefix>
                            <IconFont name="icon-3701mima"></IconFont>
                        </template>
                    </a-input>
                </a-form-item>
                <a-form-item label="选择账号" name="user" :rules="[{ require: true, message: '请选择登录账号' }]">
                    <a-radio-group v-model:value="account" @change="handleFill">
                        <a-radio :value="0">管理员账号</a-radio>
                        <a-radio :value="1">普通用户账号</a-radio>
                    </a-radio-group>
                </a-form-item>
                <a-form-item>
                    <a-button type="primary" html-type="submit" block shape="round">
                        登录
                    </a-button>
                </a-form-item>
            </a-form>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { reactive, ref, toRefs } from 'vue'
import { FormProps, message } from 'ant-design-vue';
import { useRouter } from 'vue-router';
import 'ant-design-vue/es/message/style/css';
import http from '@/util/http';
import { loadFull } from "tsparticles";

const particlesInit = async (engine: any) => {
    await loadFull(engine);
};

const router = useRouter()

const options = ref(
    {
        background: {
            color: {
                value: '#0d47a1'
            }
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: 'push'
                },
                onHover: {
                    enable: true,
                    mode: 'repulse'
                },
                resize: true
            },
            modes: {
                bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40
                },
                push: {
                    quantity: 4
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                }
            }
        },
        particles: {
            color: {
                value: '#ffffff'
            },
            links: {
                color: '#ffffff',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1
            },
            collisions: {
                enable: true
            },
            move: {
                direction: 'none',
                enable: true,
                outMode: 'bounce',
                random: false,
                speed: 6,
                straight: false
            },
            number: {
                density: {
                    enable: true,
                    area: 800
                },
                value: 80
            },
            opacity: {
                value: 0.5
            },
            shape: {
                type: 'circle'
            },
            size: {
                random: true,
                value: 5
            }
        },
        detectRetina: true
    }
)

let loginState = ref({} as { email: string, pwd: string })

const account = ref<number>();


const handleFinish: FormProps['onFinish'] = values => {
    http.post('/login', values).then(res => {

        const { code, msg, token, role } = res.data.data
        if (code !== 200) {
            message.error(msg)
        } else {
            message.success(msg);
            localStorage.setItem('userrole', role)
            localStorage.setItem('token', token)
            router.push('/index')
        }
    })
};
const handleFinishFailed: FormProps['onFinishFailed'] = errors => {
    // console.log(errors);
    message.error('信息漏填');
};

const handleFill = (e: Event) => {
    const { value } = e.target as any
    if (value == 0) {
        loginState.value = {
            email: 'admin@163.com',
            pwd: '123456'
        }
    } else {
        loginState.value = {
            email: 'user@163.com',
            pwd: '123456'
        }
    }

}
</script>

