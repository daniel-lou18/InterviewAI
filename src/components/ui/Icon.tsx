import { cn } from "@/lib/utils";
import * as LucideIcons from "lucide-react";

// Composant de type wrapper pour éviter de réécrire les classes utilitaires Tailwind pour chaque icône

type IconProps = {
  iconName: keyof typeof LucideIcons;
  className?: string;
};

export default function Icon({ iconName, className }: IconProps) {
  const IconComponent = LucideIcons[iconName] as
    | React.ComponentType<React.SVGProps<SVGSVGElement>>
    | undefined;

  if (!IconComponent) {
    console.log(`Icon "${iconName}" is not a valid Lucid Icon`);
    return null;
  }

  return (
    <IconComponent
      className={cn("mr-2 h-4 w-4 relative top-[1px]", className)}
    />
  );
}
