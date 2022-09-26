import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Portugal.svg';

export function Portugal(props: TProps) {
  return (
    <Icon {...props} name="Portugal">
      <SVG />
    </Icon>
  );
}
