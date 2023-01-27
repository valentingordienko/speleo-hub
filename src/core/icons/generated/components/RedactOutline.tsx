import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RedactOutline.svg';

export function RedactOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="RedactOutline">
      <SVG />
    </Icon>
  );
}
