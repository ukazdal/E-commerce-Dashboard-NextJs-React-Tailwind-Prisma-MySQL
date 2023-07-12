"use client"

import { userStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "../ui/modal"

export const StoreModal = () => {
  const storeModal = userStoreModal();

  return (
    <Modal title="Create Store" description="New Store" isOpen={storeModal.isOpen} onClose={storeModal.onClose}>
       Future Create Store Form
    </Modal>
  )
}