import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Aruba.svg';

export function Aruba(props: TProps) {
  return (
    <Icon {...props} name="Aruba">
      <SVG />
    </Icon>
  );
}
