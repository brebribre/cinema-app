import Input from '../components/Input';
import {useCallback, useState} from 'react';

function Auth(){
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [variant, setVariant] = useState('login');

    
    const toggleVariant = useCallback(()=>{
        setVariant((currentVariant)=> currentVariant==='login'?'register':'login')
    },[]);

    return (<div className="relative bg-no-repeat bg-center bg-fixed bg-cover h-full w-full bg-[url('/images/hero.jpg')]">
        <div className="bg-black w-full h-full lg:bg-opacity-50">
            <nav className="px-12 py-5">
                <img src="/images/logo.png" alt="logo" className="h-12 mt-5"></img>
            </nav>
            <div className="flex justify-center">
                <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md-w-full">

                    <h2 className="text-white text-4xl mb-8 font-semibold">
                        {variant==='login'?'Sign in':'Create an account'}
                    </h2>

                    <div className="flex flex-col gap-4">
                        {variant === 'register' && (
                        <Input
                            id="name"
                            label="Username"
                            onChange={(ev: any)=>{setName(ev.target.value)}}
                            type="email"
                            value=" "
                        />)}
                        
                        <Input
                            id="email"
                            label="Email"
                            onChange={(ev: any)=>{setEmail(ev.target.value)}}
                            type="email"
                            value={email}
                        />
                        <Input
                            id="password"
                            label="Password"
                            onChange={(ev: any)=>{setPassword(ev.target.value)}}
                            type="password"
                            value={password}
                        />
                    </div>
                    <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
                        {variant === 'login'? 'Login' : 'Sign up'}
                    </button>
                    <p className="text-neutral-500 mt-12">
                        {variant === 'login' ? 'First time using Netflix?' : 'Already have an account?'}
                    <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                        {variant === 'login'? 'Create an account' : 'Login'}
                    </span>
                    </p>
                    
                </div>
            </div>
        </div>  
    </div>)
}

export default Auth;