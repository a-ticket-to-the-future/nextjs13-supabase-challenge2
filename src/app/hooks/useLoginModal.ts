import { create } from 'zustand'
import { ModalType } from '../types'

//ログイン状態
const useLoginModal = create<ModalType>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true}),
    onClose: () => set({ isOpen: false}),
}))

export default useLoginModal