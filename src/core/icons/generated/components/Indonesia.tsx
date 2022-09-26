import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Indonesia.svg';

export function Indonesia(props: TProps) {
  return (
    <Icon {...props} name="Indonesia">
      <SVG />
    </Icon>
  );
}
