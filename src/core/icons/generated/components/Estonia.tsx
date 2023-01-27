import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Estonia.svg';

export function Estonia(props: TBaseProps) {
  return (
    <Icon {...props} name="Estonia">
      <SVG />
    </Icon>
  );
}
