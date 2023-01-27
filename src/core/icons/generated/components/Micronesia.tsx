import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Micronesia.svg';

export function Micronesia(props: TBaseProps) {
  return (
    <Icon {...props} name="Micronesia">
      <SVG />
    </Icon>
  );
}
