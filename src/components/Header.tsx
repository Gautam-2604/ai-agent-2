import { Button } from '@/components/ui/button'
import { UserButton } from '@clerk/nextjs'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import React, { use } from 'react'
import NavigationProvider, { NavigationContext } from './NavigationProvider'

const Header = () => {
    const {setIsMobileNavOpen, isMobileNavOpen} = use(NavigationContext)
  return (
    <header className='border-b border-gray-200/50 bg-white/80 backdrop-blur-xl shadow-sm sticky   top-0 z-50'>
        <div className='flex items-center justify-between px-4 py-3 '>
            <div className='flex items-center gap-3'>
                <Button variant='ghost' size="icon" className='md:hidden text-gray-500 hover:text-gray-700 hover:bg-gray-100/50' onClick={()=>setIsMobileNavOpen(true)}>
                <HamburgerMenuIcon className='w-5 h-5' />
                </Button>
                <div className='font-semibold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent'>
                    Chat with an AI Agent
                </div>

            </div>
            <div className='flex items-center'>
                <UserButton
                    afterSignOutUrl='/'
                    appearance={{
                        elements:{
                            avatarBox:'h-8 w-8 ring-gray-200/50 ring-offset-2 rounded-full transition-shadow hover:ring-gray-300/50',
                        }
                    }}
                         />
            </div>

        </div>
    </header>
  )
}

export default Header
