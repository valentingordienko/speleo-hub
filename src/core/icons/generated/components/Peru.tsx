import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Peru.svg';

export function Peru(props: TProps) {
  return (
    <Icon {...props} name="Peru">
      <SVG />
    </Icon>
  );
}
