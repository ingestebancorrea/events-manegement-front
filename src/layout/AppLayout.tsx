import { ReactNode } from "react"
import { Main } from "../components/Main"
import { NavBar } from "../components/NavBar"

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NavBar />

      <Main>
        {children}
      </Main>
    </>
  )
}
