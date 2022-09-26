import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/Iraq.svg';

export function Iraq(props: TProps) {
  return (
    <Icon {...props} name="Iraq">
      <SVG />
    </Icon>
  );
}
