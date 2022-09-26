import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Fiji.svg';

export function Fiji(props: TProps) {
  return (
    <Icon {...props} name="Fiji">
      <SVG />
    </Icon>
  );
}
