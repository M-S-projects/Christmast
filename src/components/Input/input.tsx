import * as S from "./style";

export interface inputProps {
  children?: string;
  width?: number;
  height?: number;
  color?: string;
  background?: string;
  fontSize?: number;
  fontWeight?: number;
  border?: string;
  borderRadius?: number;
  hoverBackground?: string;
  hoverBorder?: string;
  hoverColor?: string;
  onClick?: Function;
}

export const Input = ({
  children,
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
  onClick,
}: inputProps) => {
  return (
    <S.Input
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
      onClick={onClick}
    >
      {children}
    </S.Input>
  );
};
