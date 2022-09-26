import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BigLogo.svg';

export function BigLogo(props: TProps) {
  return (
    <Icon {...props} name="BigLogo">
      <SVG />
    </Icon>
  );
}
