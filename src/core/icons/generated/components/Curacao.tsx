import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Curacao.svg';

export function Curacao(props: TBaseProps) {
  return (
    <Icon {...props} name="Curacao">
      <SVG />
    </Icon>
  );
}
