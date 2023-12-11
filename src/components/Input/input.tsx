import { inputProps } from "../../types/InputProps";
import * as S from "./style";

export const Input = ({
  placeholder,
  width,
  height,
  color,
  background,
  fontSize,
  fontWeight,
  border,
  borderRadius,
  hoverBackground,
  hoverBorder,
  hoverColor,
  onChange,
  type,
}: inputProps) => {
  return (
    <S.Input
      type={type}
      width={width}
      height={height}
      fontSize={fontSize}
      color={color}
      background={background}
      border={border}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      hoverBackground={hoverBackground}
      hoverBorder={hoverBorder}
      hoverColor={hoverColor}
      onChange={(event: any) => onChange(event.target.value)}
      placeholder={placeholder}
    ></S.Input>
  );
};
