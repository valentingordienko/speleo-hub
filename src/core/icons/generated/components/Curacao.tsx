import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Curacao.svg';

export function Curacao(props: TProps) {
  return (
    <Icon {...props} name="Curacao">
      <SVG />
    </Icon>
  );
}
