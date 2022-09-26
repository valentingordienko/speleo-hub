import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Argentina.svg';

export function Argentina(props: TProps) {
  return (
    <Icon {...props} name="Argentina">
      <SVG />
    </Icon>
  );
}
