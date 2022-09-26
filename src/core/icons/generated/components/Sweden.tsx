import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Sweden.svg';

export function Sweden(props: TProps) {
  return (
    <Icon {...props} name="Sweden">
      <SVG />
    </Icon>
  );
}
