import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Guatemala.svg';

export function Guatemala(props: TProps) {
  return (
    <Icon {...props} name="Guatemala">
      <SVG />
    </Icon>
  );
}
