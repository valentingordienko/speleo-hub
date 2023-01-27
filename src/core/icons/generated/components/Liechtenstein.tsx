import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Liechtenstein.svg';

export function Liechtenstein(props: TBaseProps) {
  return (
    <Icon {...props} name="Liechtenstein">
      <SVG />
    </Icon>
  );
}
