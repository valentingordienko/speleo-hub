import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Micronesia.svg';

export function Micronesia(props: TProps) {
  return (
    <Icon {...props} name="Micronesia">
      <SVG />
    </Icon>
  );
}
