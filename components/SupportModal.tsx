"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CrossmintPaymentElement } from "@crossmint/client-sdk-react-ui";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface SupportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SupportModal({ isOpen, onClose }: SupportModalProps) {
  const handlePaymentEvent = (event: any) => {
    console.log("Payment event:", event);
    if (event.type === "payment:process.succeeded") {
      // Handle successful payment
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent className="bg-ocean-blue text-sand">
            <DialogHeader>
              <DialogTitle className="text-2xl font-serif">
                Support the Artist
              </DialogTitle>
            </DialogHeader>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <CrossmintPaymentElement
                projectId={process.env.NEXT_PUBLIC_PROJECT_ID!}
                collectionId={process.env.NEXT_PUBLIC_COLLECTION_ID!}
                environment={
                  process.env.NEXT_PUBLIC_ENVIRONMENT as
                    | "staging"
                    | "production"
                }
                mintConfig={{
                  type: "erc-1155",
                  totalPrice: "0.1",
                  _quantity: 1,
                }}
                onEvent={handlePaymentEvent}
              />
            </motion.div>
          </DialogContent>
        </Dialog>
      )}
    </AnimatePresence>
  );
}
