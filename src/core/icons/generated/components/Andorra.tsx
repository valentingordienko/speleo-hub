import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Andorra.svg';

export function Andorra(props: TProps) {
  return (
    <Icon {...props} name="Andorra">
      <SVG />
    </Icon>
  );
}
