import cn from "classnames";

export enum Variant {
  Orange = "orange",
  Blue = "blue",
  Zinc = "zinc",
}

type FilterBadgeProps = {
  text: string;
  variant: Variant;
};

export const FilterBadge = ({ text, variant }: FilterBadgeProps) => {
  const classNames = cn(" px-2 rounded-md cursor-pointer", {
    "bg-orange-300": variant === "orange",
    "bg-blue-300": variant === "blue",
    "bg-zinc-300": variant === "zinc",
    "bg-blue-500": variant === "blue",
  });

  return (
    <div className={classNames}>
      <span className="text-xs">{text}</span>
    </div>
  );
};
