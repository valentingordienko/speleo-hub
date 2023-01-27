import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Samoa.svg';

export function Samoa(props: TBaseProps) {
  return (
    <Icon {...props} name="Samoa">
      <SVG />
    </Icon>
  );
}
