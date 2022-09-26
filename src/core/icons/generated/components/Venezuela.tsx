import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Venezuela.svg';

export function Venezuela(props: TProps) {
  return (
    <Icon {...props} name="Venezuela">
      <SVG />
    </Icon>
  );
}
