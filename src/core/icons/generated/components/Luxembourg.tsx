import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Luxembourg.svg';

export function Luxembourg(props: TProps) {
  return (
    <Icon {...props} name="Luxembourg">
      <SVG />
    </Icon>
  );
}
