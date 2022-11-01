import * as S from './Tooltip.styled';
import * as T from './Tooltip.types';

const Tooltip = ({ text, children }: T.TooltipProps) => {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
      <S.Message>{text}</S.Message>
    </S.Container>
  );
};

export { Tooltip };
