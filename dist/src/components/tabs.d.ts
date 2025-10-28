import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";
declare const Tabs: React.ForwardRefExoticComponent<TabsPrimitive.TabsProps & React.RefAttributes<HTMLDivElement>>;
declare const TabsList: React.ForwardRefExoticComponent<Omit<Omit<TabsPrimitive.TabsListProps & React.RefAttributes<HTMLDivElement>, "ref">, "placeholder"> & React.RefAttributes<HTMLDivElement>>;
declare const TabsTrigger: React.ForwardRefExoticComponent<Omit<Omit<TabsPrimitive.TabsTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref">, "placeholder"> & React.RefAttributes<HTMLButtonElement>>;
declare const TabsContent: React.ForwardRefExoticComponent<Omit<Omit<TabsPrimitive.TabsContentProps & React.RefAttributes<HTMLDivElement>, "ref">, "placeholder"> & React.RefAttributes<HTMLDivElement>>;
export { Tabs, TabsList, TabsTrigger, TabsContent };
