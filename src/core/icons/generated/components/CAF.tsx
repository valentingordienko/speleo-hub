import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/CAF.svg';

export function CAF(props: TBaseProps) {
  return (
    <Icon {...props} name="CAF">
      <SVG />
    </Icon>
  );
}
