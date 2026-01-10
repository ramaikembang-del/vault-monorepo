// @ts-nocheck
'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from '@/components/ui/command'
import { Calculator, Calendar, CreditCard, Settings, User, Rocket, Box, LayoutDashboard, FileText } from 'lucide-react'
import { useSearch } from '@/hooks/useSearch'

export function CommandMenu() {
    const [open, setOpen] = React.useState(false)
    const [query, setQuery] = React.useState('')
    const router = useRouter()
    const { search, status } = useSearch()

    // Toggle Command Menu with Ctrl+K
    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener('keydown', down)
        return () => document.removeEventListener('keydown', down)
    }, [])

    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false)
        command()
    }, [])

    const searchResults = React.useMemo(() => {
        return search(query)
    }, [query, search])

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput
                placeholder="Type a command or search..."
                onValueChange={setQuery}
            />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>

                {/* Dynamic Search Results */}
                {query.length > 0 && (
                    <CommandGroup heading="Search Results">
                        {searchResults.map((node: any) => (
                            <CommandItem key={node.id} onSelect={() => runCommand(() => router.push(`/biz/${node.id}`))}>
                                <FileText className="mr-2 h-4 w-4" />
                                <span>{node.name}</span>
                                <span className="ml-auto text-xs text-muted-foreground">{node.group}</span>
                            </CommandItem>
                        ))}
                    </CommandGroup>
                )}

                {/* Static Suggestions (Only show when not searching or few results) */}
                {query.length === 0 && (
                    <>
                        <CommandGroup heading="Suggestions">
                            <CommandItem onSelect={() => runCommand(() => router.push('/'))}>
                                <LayoutDashboard className="mr-2 h-4 w-4" />
                                <span>Dashboard</span>
                            </CommandItem>
                            <CommandItem onSelect={() => runCommand(() => router.push('/biz'))}>
                                <Rocket className="mr-2 h-4 w-4" />
                                <span>Biz Lab</span>
                            </CommandItem>
                            <CommandItem onSelect={() => runCommand(() => router.push('/products'))}>
                                <Box className="mr-2 h-4 w-4" />
                                <span>Products Lab</span>
                            </CommandItem>
                        </CommandGroup>
                        <CommandSeparator />
                        <CommandGroup heading="Settings">
                            <CommandItem onSelect={() => runCommand(() => console.log('Profile clicked'))}>
                                <User className="mr-2 h-4 w-4" />
                                <span>Profile</span>
                            </CommandItem>
                            <CommandItem onSelect={() => runCommand(() => console.log('Settings clicked'))}>
                                <Settings className="mr-2 h-4 w-4" />
                                <span>Settings</span>
                            </CommandItem>
                        </CommandGroup>
                    </>
                )}
            </CommandList>
        </CommandDialog>
    )
}
