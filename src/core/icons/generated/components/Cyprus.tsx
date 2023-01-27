import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Cyprus.svg';

export function Cyprus(props: TBaseProps) {
  return (
    <Icon {...props} name="Cyprus">
      <SVG />
    </Icon>
  );
}
