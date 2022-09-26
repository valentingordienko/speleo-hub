import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Estonia.svg';

export function Estonia(props: TProps) {
  return (
    <Icon {...props} name="Estonia">
      <SVG />
    </Icon>
  );
}
