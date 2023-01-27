import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Australia.svg';

export function Australia(props: TBaseProps) {
  return (
    <Icon {...props} name="Australia">
      <SVG />
    </Icon>
  );
}
