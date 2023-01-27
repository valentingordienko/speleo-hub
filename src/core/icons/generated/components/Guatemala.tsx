import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Guatemala.svg';

export function Guatemala(props: TBaseProps) {
  return (
    <Icon {...props} name="Guatemala">
      <SVG />
    </Icon>
  );
}
