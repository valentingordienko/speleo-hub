import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Cyprus.svg';

export function Cyprus(props: TProps) {
  return (
    <Icon {...props} name="Cyprus">
      <SVG />
    </Icon>
  );
}
