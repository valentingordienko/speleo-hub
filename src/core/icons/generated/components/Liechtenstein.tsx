import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Liechtenstein.svg';

export function Liechtenstein(props: TProps) {
  return (
    <Icon {...props} name="Liechtenstein">
      <SVG />
    </Icon>
  );
}
