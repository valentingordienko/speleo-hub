import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Indonesia.svg';

export function Indonesia(props: TBaseProps) {
  return (
    <Icon {...props} name="Indonesia">
      <SVG />
    </Icon>
  );
}
