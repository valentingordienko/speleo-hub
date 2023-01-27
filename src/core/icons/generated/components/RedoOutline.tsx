import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RedoOutline.svg';

export function RedoOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="RedoOutline">
      <SVG />
    </Icon>
  );
}
