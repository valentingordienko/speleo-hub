import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Chad.svg';

export function Chad(props: TBaseProps) {
  return (
    <Icon {...props} name="Chad">
      <SVG />
    </Icon>
  );
}
