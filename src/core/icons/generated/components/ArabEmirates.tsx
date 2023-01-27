import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/ArabEmirates.svg';

export function ArabEmirates(props: TBaseProps) {
  return (
    <Icon {...props} name="ArabEmirates">
      <SVG />
    </Icon>
  );
}
