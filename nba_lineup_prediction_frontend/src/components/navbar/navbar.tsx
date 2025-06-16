'use client'
import { Trophy } from 'lucide-react';
import { DropdownMenu } from '../ui/dropdown-menu';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const Navbar = () => {
    const pathname = usePathname();
    const router = useRouter();
    const handleClickPlayer = () => {
        router.push('/players');
    };
    const handleClickPlayoffStats = () => {
        router.push('/playoffstats');
    };
    const hideNavbarRoutes = ['/auth/login','/auth/signup'];
    const shouldHideNavbar = hideNavbarRoutes.includes(pathname);
    if (shouldHideNavbar) return null
    return (
        <div>
        <div className='flex items-center m-4 ml-6 justify-between'>
            <div className='flex items-center gap-2 '>
                <Trophy />
                <h2 className='font-bold text-2xl'>Crafted your perfect NBA Lineup</h2>
            </div>
            <div className='flex flex-row gap-4 items-center'>
                <div className='relative inline-block group'>
                    <span className="cursor-pointer"
                        role="button"
                        tabIndex={0}
                        aria-haspopup="true"
                        aria-expanded="false">Players</span>
                     <div className="hidden absolute bg-[#f9f9f9] min-w-[160px] shadow-lg px-4 py-3 z-[1] group-hover:flex flex-col gap-2 top-full left-0  rounded-md border border-gray-200">
                        <div 
                            className="hover:bg-gray-200 p-2 rounded cursor-pointer transition-colors duration-200"
                            role="menuitem"
                            tabIndex={0}
                            onClick = {() => handleClickPlayer()}
                        >
                            <p className="text-sm">Player Stats</p>
                        </div>
                        <div 
                            className="hover:bg-gray-200 p-2 rounded cursor-pointer transition-colors duration-200"
                            role="menuitem"
                            tabIndex={0}
                            onClick= {() => handleClickPlayoffStats()}
                        >
                            <p className="text-sm">Playoff Stats</p>
                        </div>
                    </div>
                </div>
                <div className='relative inline-block group'>
                    <span className="cursor-pointer"
                        role="button"
                        tabIndex={0}
                        aria-haspopup="true"
                        aria-expanded="false">Teams</span>
                     <div className="hidden absolute bg-[#f9f9f9] min-w-[160px] shadow-lg px-4 py-3 z-[1] group-hover:flex flex-col gap-2 top-full left-0  rounded-md border border-gray-200">
                        <div 
                            className="hover:bg-gray-200 p-2 rounded cursor-pointer transition-colors duration-200"
                            role="menuitem"
                            tabIndex={0}
                            onClick = {() => handleClickPlayer()}
                        >
                            <p className="text-sm">Team Stats</p>
                        </div>
                        <div 
                            className="hover:bg-gray-200 p-2 rounded cursor-pointer transition-colors duration-200"
                            role="menuitem"
                            tabIndex={0}
                        >
                            <p className="text-sm">Playoff Stats</p>
                        </div>
                    </div>

                </div>
                <div >
                    <a href= '/auth/login'>Login</a>
                </div>
            </div>
        </div>
        </div>
    )
};
export default Navbar;