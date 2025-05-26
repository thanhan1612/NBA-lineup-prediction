"use client"
export default function LoginPage()  {
    return (
        <div className = "flex h-screen w-full flex-col items-center justify-center">
            <div className = "mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px] shadow-xs">
                <div className ="flex flex-col text-center space-y-2">
                    <p className="text-lg font-bold uppercase">
                        Login
                    </p>
                    <input label ="this is input text"/>
                </div>
            </div>
        </div>
    )
};