import { LucideIcon } from "lucide-react";
import {Button } from '@/components/ui/button'
import Link from "next/link";

type Props = {
    icon:LucideIcon,
    label:string,
    href?:string
}

export function NavButton({
    icon:Icon,
    label,
    href}: Props){
        const content = <Icon />;
          return href ? (
    <Button
      asChild
      variant="ghost"
      size="icon"
      aria-label={label}
      title={label}
      className="rounded-full"
    >
      <Link href={href} passHref>{content}</Link>
    </Button>
  ) : (
    <Button
      variant="ghost"
      size="icon"
      aria-label={label}
      title={label}
      className="rounded-full"
    >
      {content}
    </Button>
  );


}
