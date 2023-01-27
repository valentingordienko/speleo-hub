import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Anguilla.svg';

export function Anguilla(props: TBaseProps) {
  return (
    <Icon {...props} name="Anguilla">
      <SVG />
    </Icon>
  );
}
