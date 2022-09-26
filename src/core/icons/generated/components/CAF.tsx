import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CAF.svg';

export function CAF(props: TProps) {
  return (
    <Icon {...props} name="CAF">
      <SVG />
    </Icon>
  );
}
