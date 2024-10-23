import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Helmet } from 'react-helmet-async'
import { toast } from 'sonner'
import { Link, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { ArrowRight, ImageUp } from 'lucide-react'
import { registerSeller } from '@/api/register-seller'

const signUpForm = z.object({
    name: z.string(),
    phone: z.string(),
    email: z.string().email(),
    avatarId: z.string().nullable(),
    password: z.string(),
    passwordConfirmation: z.string()
})

type SignUpForm  = z.infer<typeof signUpForm>

export function SignUp() {
    const navigate = useNavigate()

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignUpForm>()

    const { mutateAsync: registerSellerFn } = useMutation({
        mutationFn: registerSeller
    })

    async function handleSignUp(data: SignUpForm) {
        try {
           await registerSellerFn({
            name: data.name,
            email: data.email,
            phone: data.phone,
            avatarId: data.avatarId,
            password: data.password,
            passwordConfirmation: data.passwordConfirmation,
           })

            toast.success('Vendedor cadastrado com sucesso!', {
                action: {
                    label: 'Login',
                    onClick: () => navigate(`/sign-in?email=${data.email}`)
                }
            })
        }
        catch {
            toast.error('Erro ao cadastrar VENDEDOR!')
        }
    }

    return (
        <>
            <Helmet title="Cadastro" />
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-bold">Crie sua conta</h1>
                    <p>Informe os seus dados pessoais e de acesso</p>
                </div>

                <form onSubmit={handleSubmit(handleSignUp)} className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <span className="text-base font-bold">Perfil</span>
                        <div className="flex items-center justify-center h-32 w-32 bg-rose-50 text-orange-600 rounded-lg">
                            <ImageUp size={36}/>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-gray-400" htmlFor="name">NOME</label>
                            <input type="text" placeholder="Seu nome Completo" name="name" className="w-full border-b-2" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-gray-400" htmlFor="phone">TELEFONE</label>
                            <input type="text" placeholder="(00) 00000-0000" name="phone" className="w-full border-b-2" />
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="text-base font-bold">Acesso</span>
                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-gray-400" htmlFor="email">E-MAIL</label>
                            <input type="email" placeholder="Seu e-mail cadastrado" id="signup-email" className="w-full border-b-2" {...register('email')} />
                        </div>
                        
                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-gray-400" htmlFor="pass">SENHA</label>
                            <input type="password" placeholder="Senha de acesso" id="pass" className="w-full border-b-2" {...register('password')} />
                        </div>

                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-gray-400" htmlFor="pass-confirm">SENHA</label>
                            <input type="password" placeholder="Confirme a senha" id="pass-confirm" className="w-full border-b-2" />
                        </div>
                    </div>

                    
                </form>

                <button disabled={isSubmitting} className="flex justify-between items-center p-3 bg-orange-600 text-white rounded-lg h-16">
                    Cadastrar
                    <ArrowRight />
                </button>

                <div className="flex flex-col gap-2">
                    <p className="text-gray-600">Já tem uma conta?</p>
                    <Link to="/log-in" className="flex justify-between items-center p-3 bg-white text-orange-600 rounded-lg border-[1px] border-orange-600 h-16">
                        Acessar
                        <ArrowRight />
                    </Link>
                </div>
            </div>
            
        </>
    )
}