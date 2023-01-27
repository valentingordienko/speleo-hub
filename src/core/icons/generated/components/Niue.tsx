import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Niue.svg';

export function Niue(props: TBaseProps) {
  return (
    <Icon {...props} name="Niue">
      <SVG />
    </Icon>
  );
}
