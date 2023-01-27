import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/BigLogo.svg';

export function BigLogo(props: TBaseProps) {
  return (
    <Icon {...props} name="BigLogo">
      <SVG />
    </Icon>
  );
}
