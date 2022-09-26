import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Australia.svg';

export function Australia(props: TProps) {
  return (
    <Icon {...props} name="Australia">
      <SVG />
    </Icon>
  );
}
