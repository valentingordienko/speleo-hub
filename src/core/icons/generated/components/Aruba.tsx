import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Aruba.svg';

export function Aruba(props: TBaseProps) {
  return (
    <Icon {...props} name="Aruba">
      <SVG />
    </Icon>
  );
}
