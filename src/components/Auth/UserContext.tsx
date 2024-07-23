/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { Session, SupabaseClient, User } from '@supabase/supabase-js'

export interface AuthSession {
  user: User | null
  session: Session | null
}

const UserContext = createContext<AuthSession>({ user: null, session: null })

export interface Props {
  supabaseClient: SupabaseClient
  [propName: string]: any
}

export function UserContextProvider(props: Props) {
  const { supabaseClient } = props
  const [session, setSession] = useState<Session | null>(null)
  const [user, setUser] = useState<User | null>(session?.user ?? null)

  useEffect(() => {
    ; (async () => {
      const { data } = await supabaseClient.auth.getSession()
      setSession(data.session)
      setUser(data.session?.user ?? null)
    })()

    const { data: authListener } = supabaseClient.auth.onAuthStateChange(async (event, session) => {
      setSession(session)
      setUser(session?.user ?? null)
    })

    return () => {
      authListener?.subscription.unsubscribe()
    }
  }, [])
  const value = useMemo(
    () => ({
      session,
      user,
    }),
    [session, user],
  )

  return <UserContext.Provider value={value} {...props} />
}

export function useUser() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserContextProvider.`)
  }
  return context
}
