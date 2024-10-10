import * as LucideIcons from "lucide-react";

// Composant de type wrapper pour éviter de réécrire les classes utilitaires Tailwind pour chaque icône

export default function Icon({
  iconName,
}: {
  iconName: keyof typeof LucideIcons;
}) {
  const IconComponent = LucideIcons[iconName] as
    | React.ComponentType<React.SVGProps<SVGSVGElement>>
    | undefined;

  if (!IconComponent) {
    console.log(`Icon "${iconName}" is not a valid Lucid Icon`);
    return null;
  }

  return <IconComponent className="mr-2 h-4 w-4 relative top-[1px]" />;
}
