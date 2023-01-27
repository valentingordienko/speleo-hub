import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Guernsey.svg';

export function Guernsey(props: TBaseProps) {
  return (
    <Icon {...props} name="Guernsey">
      <SVG />
    </Icon>
  );
}
