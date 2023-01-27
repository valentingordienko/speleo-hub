import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Nepal.svg';

export function Nepal(props: TBaseProps) {
  return (
    <Icon {...props} name="Nepal">
      <SVG />
    </Icon>
  );
}
