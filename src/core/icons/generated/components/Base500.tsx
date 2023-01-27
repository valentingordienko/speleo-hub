import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Base500.svg';

export function Base500(props: TBaseProps) {
  return (
    <Icon {...props} name="Base500">
      <SVG />
    </Icon>
  );
}
