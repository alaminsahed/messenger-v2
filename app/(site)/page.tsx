import Image from 'next/image'
import AuthForm from './components/AuthForm'


export default function Home() {
    return (
        <div className='flex flex-col min-h-full justify-center py-12  sm:px-6 
        lg:px-8 
        bg-gray-100 '>
            <div className='sm:m-auto sm:w-full sm:max-w-md'>
                <Image
                    alt="Facebook Messenger"
                    src="/images/logo.png"
                    height="48"
                    width="48"
                    className='mx-auto w-auto'
                />
                <h2 className='text-4xl text-center mt-6 tracking-tight font-bold text-gray-900'>Sign in to your account</h2>
                <AuthForm />
            </div>
        </div>
    )
}
