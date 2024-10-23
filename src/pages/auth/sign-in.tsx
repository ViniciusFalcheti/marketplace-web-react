import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Helmet } from 'react-helmet-async'
import { toast } from 'sonner'
import { Link, useSearchParams, redirect } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { signIn } from '@/api/sign-in'
import { ArrowRight } from 'lucide-react'

const signInForm = z.object({
    email: z.string().email(),
    password: z.string()
})

type SignInForm  = z.infer<typeof signInForm>

export function SignIn() {
    const [searchParams] = useSearchParams()

    const { register, handleSubmit, formState: { isSubmitting } } = useForm<SignInForm>({
        defaultValues: {
            email: searchParams.get('email') ?? '',
            password: searchParams.get('password') ?? '',
        }
    })

    const { mutateAsync: authenticate } = useMutation({
        mutationFn: signIn,
    })

    async function handleSignIn(data: SignInForm) {
        try {
            
            await authenticate({ email: data.email, password: data.password })
            
            redirect("/")
            toast.success('Logado com sucesso!')

            
        }
        catch {
            toast.error('Credenciais inválidas!')
        }
    }

    return (
        <>
            <Helmet title="Login" />
            <div className="flex flex-col gap-12">
                <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-bold">Acesse sua conta</h1>
                    <p>Informe seu e-mail e senha para entrar</p>
                </div>

                <form onSubmit={handleSubmit(handleSignIn)} className="flex flex-col gap-12">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-gray-400" htmlFor="email">E-MAIL</label>
                            <input type="email" placeholder="Seu e-mail cadastrado" id="email" className="w-full border-b-2" {...register("email")} />
                        </div>
                        
                        <div className="flex flex-col gap-1">
                            <label className="text-xs text-gray-400" htmlFor="pass">SENHA</label>
                            <input type="password" placeholder="Sua senha de acesso" id="pass" className="w-full border-b-2" {...register("password")} />
                        </div>

                    </div>
                    <button disabled={isSubmitting} className="flex justify-between items-center p-3 bg-orange-600 text-white rounded-lg h-16">
                        Acessar
                        <ArrowRight />
                    </button>
                </form>

                <div className="absolute bottom-[144px]">
                    <p className="text-gray-600">AINDA NÃO TEM UMA CONTA?</p>
                    <Link to="/sign-in" className="flex justify-between items-center p-3 bg-white text-orange-600 rounded-lg border-[1px] border-orange-600 h-16">
                        Cadastrar
                        <ArrowRight />
                    </Link>
                </div>
            </div>
        </>
    )
}