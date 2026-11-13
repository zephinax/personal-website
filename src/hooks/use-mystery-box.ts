import { atom, useAtom } from "jotai"

const mysteryBoxOpenAtom = atom<boolean>(false)

export function useMysteryBox() {
  return useAtom(mysteryBoxOpenAtom)
}
