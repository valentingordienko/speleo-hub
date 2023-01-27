import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Macao.svg';

export function Macao(props: TBaseProps) {
  return (
    <Icon {...props} name="Macao">
      <SVG />
    </Icon>
  );
}
