import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Anguilla.svg';

export function Anguilla(props: TProps) {
  return (
    <Icon {...props} name="Anguilla">
      <SVG />
    </Icon>
  );
}
