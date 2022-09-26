import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Macao.svg';

export function Macao(props: TProps) {
  return (
    <Icon {...props} name="Macao">
      <SVG />
    </Icon>
  );
}
