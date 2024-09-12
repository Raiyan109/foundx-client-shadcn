import { Footer } from '@/components/common/footer'
import { Header } from '@/components/common/header'
import { ThemeProvider } from '@/components/theme-provider'
import React from 'react'

const CommonLayout = ({ children }) => {
    return (
        <div>
            <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
            >
                <Header />
                <main className="h-[calc(100vh-94px)] overflow-y-auto">
                    {children}
                </main>
                <Footer />
            </ThemeProvider>
        </div>
    )
}

export default CommonLayout