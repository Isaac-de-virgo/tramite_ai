"use client";

import * as React from "react"

import { cn } from "@/lib/utils"
import { useMediaQuery } from "@uidotdev/usehooks";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"
import { generateResponse } from '@/services/groqService';
require('dotenv').config();

export function DrawerDialogMani() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Nueva Manifestación</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Nueva Manifestación</DialogTitle>
            <DialogDescription>
                Comunica de manera eficiente y rápida tus PQRSDF.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Nueva Manifestación</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Nueva Manifestación</DrawerTitle>
          <DrawerDescription>
          Comunica de manera eficiente y rápida tus PQRSDF.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancelar</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  const [prompt, setPrompt] = React.useState('');
  const [response, setResponse] = React.useState('');
  const guardarTramite = async () => {
    const result = await generateResponse({ promptUser: prompt });
    setResponse(result);
  }

  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="email">PQRSDF</Label>
        <Textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Escribe aquí tu manifestación." />
      </div>
      <Button onClick={guardarTramite} type="button">Enviar</Button>
      <p>Respuesta: {response}</p>
    </form>
  )
}
