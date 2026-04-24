import Image from "next/image";

type Props = {
  variant?: "light" | "dark";
  className?: string;
};

export function Logo({ variant = "dark", className = "" }: Props) {
  const textColor = variant === "light" ? "text-white" : "text-navy-900";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative h-9 w-9 overflow-hidden rounded-lg ring-1 ring-black/10">
        <Image
          src="/logo.png"
          alt=""
          fill
          sizes="36px"
          className="object-cover"
          priority
        />
      </div>
      <span className={`text-lg font-semibold tracking-tight ${textColor}`}>
        MyTaskly
      </span>
    </div>
  );
}
