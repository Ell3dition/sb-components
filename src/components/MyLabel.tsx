import "./MyLabel.css";

interface Props {
  /**
   * Text to display
   */
  label: string;
  /**
   * Label size
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Todas mayusculas
   */
  allCaps?: boolean;
  /**
   * Color del span
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";

  /**
   * Color del texto
   */
  fontColor?: string;
}

/**
 * AllCaps: bolean
 * color:
 * fontColor:string -- al texto del span
 */

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color = "text-primary",
  fontColor = "#000000",
}: Props) => {
  return (
    <span className={`${size} ${color}`} style={{ color: fontColor }}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
