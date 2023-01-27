import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Sweden.svg';

export function Sweden(props: TBaseProps) {
  return (
    <Icon {...props} name="Sweden">
      <SVG />
    </Icon>
  );
}
