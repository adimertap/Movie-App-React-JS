import React, { useEffect } from 'react';
import Label from '@/Components/InputLabel';
import Input from '@/Components/TextInput';
import Button from '@/Components/PrimaryButton';
import ValidationErrors from '@/Components/ValidationErrors';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Register(){
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        // console.log(data);
        post(route('register'));
    };

return (
<>
    <Head title="Sign-Up" />
    <div className="mx-auto max-w-screen min-h-screen bg-black text-white md:px-10 px-3">
        <div className="fixed top-[-50px] hidden lg:block">
            <img src="/images/signup-image.png"
                className="hidden laptopLg:block laptopLg:max-w-[450px] laptopXl:max-w-[640px]" alt="" />
        </div>
        <div className="py-10 flex laptopLg:ml-[680px] laptopXl:ml-[870px]">
            <div>
                <img src="/images/moonton-white.svg" alt="" />
                <div className="my-[40px]">
                    <div className="font-semibold text-[26px] mb-3">
                        Sign Up
                    </div>
                    <p className="text-base text-[#767676] leading-7">
                        Explore our new movies and get <br />
                        the better insight for your life
                    </p>
                    <ValidationErrors errors={errors}>
                    </ValidationErrors>
                </div>
                <form className="w-[370px]" onSubmit={submit}>
                    <div className="flex flex-col gap-6">
                        <div>
                            
                            <Label forInput="fullname" value="Full Name"></Label>
                            <Input type='text' value={data.name} isFocused={true}
                                name='name' placeholder='Your Full Name' 
                                handleChange={onHandleChange} required>
                            </Input>
                        </div>
                        <div>
                            <Label forInput="email" value="Email"></Label>
                            <Input type='email' name='email' placeholder='Your Email Address' value={data.email}
                                handleChange={onHandleChange} required></Input>
                        </div>
                        <div>
                            <Label forInput="password" value="Password"></Label>
                            <Input type="password" name="password" placeholder="Your Password" value={data.password}
                                handleChange={onHandleChange} required></Input>
                        </div>
                        <div>
                            <Label forInput="password" value="Confirm Password"></Label>
                            <Input type="password" name="password_confirmation" placeholder="Password Confirmation" value={data.password_confirmation}
                                handleChange={onHandleChange} required></Input>
                        </div>
                    </div>
                    <div className="grid space-y-[14px] mt-[30px]">
                        <Button type='submit' processing={processing}>
                            <span className="text-base font-semibold">
                                Sign Up
                            </span>
                        </Button>
                        <Link href={route('login')}>
                            <Button variant='light-outline'>
                                <span className="text-base text-white">
                                    Sign In to My Account
                                </span>
                            </Button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</>
)};
