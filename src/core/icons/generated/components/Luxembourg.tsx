import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Luxembourg.svg';

export function Luxembourg(props: TBaseProps) {
  return (
    <Icon {...props} name="Luxembourg">
      <SVG />
    </Icon>
  );
}
