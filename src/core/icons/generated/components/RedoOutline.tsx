import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RedoOutline.svg';

export function RedoOutline(props: TProps) {
  return (
    <Icon {...props} name="RedoOutline">
      <SVG />
    </Icon>
  );
}
