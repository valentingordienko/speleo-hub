import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/India.svg';

export function India(props: TProps) {
  return (
    <Icon {...props} name="India">
      <SVG />
    </Icon>
  );
}
