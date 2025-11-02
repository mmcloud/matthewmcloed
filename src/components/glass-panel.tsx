import { cn } from "@/lib/utils";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const glassmorphismClassName = "bg-black/20 backdrop-blur-lg border border-white/10 shadow-xl";

const GlassPanel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <Card ref={ref} className={cn(glassmorphismClassName, className)} {...props} />
));
GlassPanel.displayName = "GlassPanel";

const GlassPanelHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardHeader ref={ref} className={cn("", className)} {...props} />
));
GlassPanelHeader.displayName = "GlassPanelHeader";

const GlassPanelTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <CardTitle ref={ref} className={cn("", className)} {...props} />
));
GlassPanelTitle.displayName = "GlassPanelTitle";

const GlassPanelDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <CardDescription ref={ref} className={cn("text-muted-foreground", className)} {...props} />
));
GlassPanelDescription.displayName = "GlassPanelDescription";

const GlassPanelContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardContent ref={ref} className={cn("", className)} {...props} />
));
GlassPanelContent.displayName = "GlassPanelContent";

const GlassPanelFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <CardFooter ref={ref} className={cn("", className)} {...props} />
));
GlassPanelFooter.displayName = "GlassPanelFooter";


export { GlassPanel, GlassPanelHeader, GlassPanelTitle, GlassPanelDescription, GlassPanelContent, GlassPanelFooter };
