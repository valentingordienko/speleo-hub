import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Fiji.svg';

export function Fiji(props: TBaseProps) {
  return (
    <Icon {...props} name="Fiji">
      <SVG />
    </Icon>
  );
}
