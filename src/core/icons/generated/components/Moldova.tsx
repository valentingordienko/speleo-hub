import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Moldova.svg';

export function Moldova(props: TBaseProps) {
  return (
    <Icon {...props} name="Moldova">
      <SVG />
    </Icon>
  );
}
