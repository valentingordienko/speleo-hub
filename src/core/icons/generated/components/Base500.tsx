import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Base500.svg';

export function Base500(props: TProps) {
  return (
    <Icon {...props} name="Base500">
      <SVG />
    </Icon>
  );
}
