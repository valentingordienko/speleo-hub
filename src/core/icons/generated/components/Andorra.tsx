import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Andorra.svg';

export function Andorra(props: TBaseProps) {
  return (
    <Icon {...props} name="Andorra">
      <SVG />
    </Icon>
  );
}
