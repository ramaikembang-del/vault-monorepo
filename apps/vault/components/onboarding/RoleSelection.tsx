// @ts-nocheck
'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { setPlayerRole } from '@/lib/user-progress'
import { PlayerRole } from '@/types/user'
import { Shield, Sword, Crosshair } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function RoleSelection() {
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleSelect = async (role: PlayerRole) => {
        setLoading(true)
        try {
            if (role) await setPlayerRole(role)
            router.refresh()
        } catch (e) {
            console.error(e)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
            <div className="grid w-full max-w-3xl grid-cols-1 gap-4 p-4 md:grid-cols-2">

                {/* Field Ops Card */}
                <Card className="cursor-pointer border-zinc-800 bg-zinc-900/50 hover:border-orange-500 hover:bg-zinc-900 transition-all"
                    onClick={() => handleSelect('field_ops')}>
                    <CardHeader className="text-center">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-orange-500/10">
                            <Crosshair className="h-8 w-8 text-orange-500" />
                        </div>
                        <CardTitle className="text-2xl text-orange-500">Field Ops & Product</CardTitle>
                        <CardDescription>The Marketer & Closer</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center text-zinc-400">
                        <p className="mb-4">Focus on growth, execution, and closing deals.</p>
                        <ul className="text-sm list-disc list-inside">
                            <li>Sales Playbooks</li>
                            <li>Market Research</li>
                            <li>Daily Operations</li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Strategy Card */}
                <Card className="cursor-pointer border-zinc-800 bg-zinc-900/50 hover:border-blue-500 hover:bg-zinc-900 transition-all"
                    onClick={() => handleSelect('strategy_arch')}>
                    <CardHeader className="text-center">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                            <Shield className="h-8 w-8 text-blue-500" />
                        </div>
                        <CardTitle className="text-2xl text-blue-500">Strategy & Architecture</CardTitle>
                        <CardDescription>The Builder & Architect</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center text-zinc-400">
                        <p className="mb-4">Focus on vision, systems, and technical foundations.</p>
                        <ul className="text-sm list-disc list-inside">
                            <li>Corporate Strategy</li>
                            <li>Product Specs</li>
                            <li>Technical Architecture</li>
                        </ul>
                    </CardContent>
                </Card>

            </div>
        </div>
    )
}
