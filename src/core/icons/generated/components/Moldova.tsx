import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Moldova.svg';

export function Moldova(props: TProps) {
  return (
    <Icon {...props} name="Moldova">
      <SVG />
    </Icon>
  );
}
