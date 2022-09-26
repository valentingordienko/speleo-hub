import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Guernsey.svg';

export function Guernsey(props: TProps) {
  return (
    <Icon {...props} name="Guernsey">
      <SVG />
    </Icon>
  );
}
