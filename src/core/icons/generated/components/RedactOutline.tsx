import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/RedactOutline.svg';

export function RedactOutline(props: TProps) {
  return (
    <Icon {...props} name="RedactOutline">
      <SVG />
    </Icon>
  );
}
