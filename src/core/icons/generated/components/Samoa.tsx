import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Samoa.svg';

export function Samoa(props: TProps) {
  return (
    <Icon {...props} name="Samoa">
      <SVG />
    </Icon>
  );
}
