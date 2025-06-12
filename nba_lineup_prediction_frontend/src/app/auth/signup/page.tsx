"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { LoginSchema } from "@/utils/login";
import { LoginFormData } from "@/utils/login";
import {useForm} from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod';
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import Background from "../../../../public/background";
export default function SignUpPage() {
    return (
       
     <div className = "flex h-screen w-full flex-col items-center justify-center">
            <h2 className ="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mb-8 first:mt-0 ">Welcome to NBA Lineup Prediction !</h2>
            <div className = "mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] shadow-md p-6 rounded-md">
                <div className ="flex flex-col text-center space-y-2 gap-2">
                    <p className="text-lg font-bold uppercase">
                        Sign Up
                    </p>
                    <div className="grid w-full max-w-sm items-start gap-1.5">
                        <Label htmlFor="username" className="text-left">Username*</Label>
                        <Input type="username" placeholder="Username"/>
                    </div>
                    <div className="grid w-full max-w-sm items-start gap-1.5">
                        <Label htmlFor="email" className="text-left">Email*</Label>
                        <Input type="email" placeholder="Email"/>
                    </div>
                    <div className="grid w-full max-w-sm items-start gap-1.5" >
                        <Label htmlFor="passsword" className="text-left">Password*</Label>
                        <Input type="password" placeholder="Password"/>
                    </div>
                    <div className="grid w-full max-w-sm items-start gap-1.5" >
                        <Label htmlFor="passsword" className="text-left">Confirm Password*</Label>
                        <Input type="password" placeholder="Password"/>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Checkbox id="terms" />
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Accept terms and conditions
                        </label>
                    </div>
                    <div>
                        <Button>Sign Up</Button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}