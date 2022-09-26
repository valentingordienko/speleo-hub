import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArabEmirates.svg';

export function ArabEmirates(props: TProps) {
  return (
    <Icon {...props} name="ArabEmirates">
      <SVG />
    </Icon>
  );
}
