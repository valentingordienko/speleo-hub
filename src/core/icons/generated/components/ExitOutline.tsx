import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ExitOutline.svg';

export function ExitOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="ExitOutline">
      <SVG />
    </Icon>
  );
}
