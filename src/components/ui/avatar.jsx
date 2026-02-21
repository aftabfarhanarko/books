"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

function Avatar({
  className,
  ...props
}) {
  return (
    <div
      data-slot="avatar"
      className={cn("relative flex h-9 w-9 shrink-0 overflow-hidden rounded-full bg-muted", className)}
      {...props}
    />
  );
}

function AvatarImage({
  className,
  ...props
}) {
  return (
    <img
      data-slot="avatar-image"
      className={cn("aspect-square h-full w-full", className)}
      {...props}
    />
  );
}

function AvatarFallback({
  className,
  ...props
}) {
  return (
    <div
      data-slot="avatar-fallback"
      className={cn("flex h-full w-full items-center justify-center bg-muted text-xs font-medium text-muted-foreground", className)}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback }

