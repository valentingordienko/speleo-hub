import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Peru.svg';

export function Peru(props: TBaseProps) {
  return (
    <Icon {...props} name="Peru">
      <SVG />
    </Icon>
  );
}
