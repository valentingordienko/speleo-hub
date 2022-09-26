import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Chad.svg';

export function Chad(props: TProps) {
  return (
    <Icon {...props} name="Chad">
      <SVG />
    </Icon>
  );
}
