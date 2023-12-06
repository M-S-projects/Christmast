export interface inputProps {
  placeholder?: string;
  width?: number;
  height?: number;
  color?: string;
  background?: string;
  fontSize?: number;
  fontWeight?: number;
  type?: type;
  border?: string;
  borderRadius?: number;
  hoverBackground?: string;
  hoverBorder?: string;
  hoverColor?: string;
  value?: string;
  onChange?: any;
}

type type = "text" | "number" | "password" | "button";
