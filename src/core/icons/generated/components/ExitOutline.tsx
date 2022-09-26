import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ExitOutline.svg';

export function ExitOutline(props: TProps) {
  return (
    <Icon {...props} name="ExitOutline">
      <SVG />
    </Icon>
  );
}
