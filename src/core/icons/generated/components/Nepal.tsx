import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Nepal.svg';

export function Nepal(props: TProps) {
  return (
    <Icon {...props} name="Nepal">
      <SVG />
    </Icon>
  );
}
