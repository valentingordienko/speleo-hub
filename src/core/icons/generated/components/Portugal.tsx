import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Portugal.svg';

export function Portugal(props: TBaseProps) {
  return (
    <Icon {...props} name="Portugal">
      <SVG />
    </Icon>
  );
}
